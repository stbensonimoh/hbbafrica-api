import Newsletter from "./newsletter";
import SMS from "./sms";
import Email from "./email";
import { htmlBody, textBody } from "../emails/applicantAppSuccessful";
import { Applicant } from "../models/applicant";

class NotifyService {
  static email_sms_applicant(applicant: any): void {
    const name = `${applicant.firstName} ${applicant.lastName}`;

    //add user to mailing list
    Newsletter.addToList(
      applicant.firstName,
      applicant.lastName,
      name,
      applicant.email,
      applicant.phone,
      "24393"
    );

    //send sms
    // SMS.send(
    //   "HBBAfrica",
    //   applicant.phone,
    //   `Dear ${name}, thank you for taking the time to apply for the Short Course On Capital Representation for Law students and Young Lawyers. We have received your application and are currently reviewing it. All applicants will receive a decision on their applications in July. In the meantime, if you have any questions, you may contact us via email. Best Wishes,
    //   The Access to Justice Team,
    //   Hope behind Bars Africa.`
    // )
    //   .then((res: Response) => res.json())
    //   .then((results: Response) => console.log(results))
    //   .catch((err: Error) => console.log(err));

    //send email
    Email.sendWithoutAttachment(
      applicant.firstName,
      applicant.lastName,
      applicant.email,
      "Hope Behind Bars Africa",
      "letstalk@hopebehindbarsafrica.org",
      "Capital Representation for Law Students and Young Lawyers: Course Application Status",
      textBody(applicant.firstName, applicant.lastName),
      htmlBody(applicant.firstName, applicant.lastName)
    );
  }
}

export default NotifyService;
