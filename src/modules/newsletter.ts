require("dotenv").config();
const mailjet = require("node-mailjet").connect(
  process.env.mailjetPublicKey,
  process.env.mailjetSecretKey
);

interface Error{
    statusCode?: number;
}

class Newsletter {
  static addToList(firstname:string, lastname:string, name:string, email:string, phone:string, list:string) {
    mailjet
      .post("contactslist", { version: "v3" })
      .id(list)
      .action("managemanycontacts")
      .request({
        Action: "addnoforce",
        Contacts: [
          {
            Email: email,
            IsExcludedFromCampaigns: "false",
            Name: name,
            Properties: {
              firstname: firstname,
              lastname: lastname,
              phone: phone
            },
          },
        ],
      })
      .then((result:Response) => {
        console.log(result.body);
      })
      .catch((err: Error) => {
        console.log(err.statusCode);
      });
  }
}

export default Newsletter
