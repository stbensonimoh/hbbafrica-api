import Newsletter from "./newsletter";
import SMS from "./sms";
import Email from "./email";
import { htmlBody, textBody } from "../emails/volunteerAppSuccessful";
import { Volunteer } from "../models/volunteer";

class NotifyService {
  static email_sms_volunteer(volunteer: any): void {
    const name = `${volunteer.firstName} ${volunteer.lastName}`;

    //add user to mailing list
    Newsletter.addToList(
      volunteer.firstName,
      volunteer.lastName,
      name,
      volunteer.email,
      volunteer.phone,
      "18088"
    );

    //send sms
    SMS.send(
      "HBBAfrica",
      volunteer.phone,
      `Dear ${name},  thank you for volunteering! The team will be so glad to have you join our efforts.
    A member of our Volunteer Management team shall be in touch with you on the next steps.
    Cheers,
    Funke Adeoye
    Executive Director HBBA
        `
    )
      .then((res: Response) => res.json())
      .then((results: Response) => console.log(results))
      .catch((err: Error) => console.log(err));

    //send email
    Email.sendWithoutAttachment(
      volunteer.firstName,
      volunteer.lastName,
      volunteer.email,
      "Hope Behind Bars Africa",
      "letstalk@hopebehindbarsafrica.org",
      "Hope Behind Bars Africa: Volunteer Application Successful!",
      textBody(volunteer.firstName, volunteer.lastName),
      htmlBody(volunteer.firstName, volunteer.lastName)
    );
  }
}

export default NotifyService;
