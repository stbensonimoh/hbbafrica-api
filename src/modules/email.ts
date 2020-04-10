require("dotenv").config();
const mailjet = require("node-mailjet").connect(
  process.env.mailjetPublicKey,
  process.env.mailjetSecretKey
);
import fs from "fs";

interface Error{
    statusCode?: number;
}

class Email {
  static sendWithoutAttachment(
    firstName:string,
    lastName:string,
    email:string,
    fromName:string,
    fromEmail:string,
    subject:string,
    textBody:string,
    htmlBody:string
  ) {
    mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: fromEmail,
              Name: fromName,
            },
            To: [
              {
                Email: email,
                Name: `${firstName} ${lastName}`,
              },
            ],
            Subject: subject,
            TextPart: textBody,
            HTMLPart: htmlBody,
          },
        ],
      })
      .then((result: Response) => {
        console.log(result.body);
      })
      .catch((err: Error) => {
        console.log(err.statusCode);
      });
  }

  static sendWithAttachment(
    firstName:string,
    lastName:string,
    email:string,
    fromName:string,
    fromEmail:string,
    subject:string,
    textBody:string,
    htmlBody:string,
    fileName:string
  ) {
    let buff = fs.readFileSync(fileName);
    let base64data = buff.toString("base64");
    mailjet
      .post("send", { version: "v3.1" })
      .request({
        Messages: [
          {
            From: {
              Email: fromEmail,
              Name: fromName,
            },
            To: [
              {
                Email: email,
                Name: `${firstName} ${lastName}`,
              },
            ],
            Subject: subject,
            TextPart: textBody,
            HTMLPart: htmlBody,
            Attachments: [
              {
                ContentType: "application/pdf",
                Filename: fileName,
                Base64Content: base64data,
              },
            ],
          },
        ],
      })
      .then((result: Response) => {
        console.log(result.body);
      })
      .catch((err: Error) => {
        console.log(err.statusCode);
      });
  }
}

export default Email
