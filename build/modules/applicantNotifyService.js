"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsletter_1 = __importDefault(require("./newsletter"));
const email_1 = __importDefault(require("./email"));
const applicantAppSuccessful_1 = require("../emails/applicantAppSuccessful");
class NotifyService {
    static email_sms_applicant(applicant) {
        const name = `${applicant.firstName} ${applicant.lastName}`;
        //add user to mailing list
        newsletter_1.default.addToList(applicant.firstName, applicant.lastName, name, applicant.email, applicant.phone, "24393");
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
        email_1.default.sendWithoutAttachment(applicant.firstName, applicant.lastName, applicant.email, "Hope Behind Bars Africa", "letstalk@hopebehindbarsafrica.org", "Capital Representation for Law Students and Young Lawyers: Course Application Status", applicantAppSuccessful_1.textBody(applicant.firstName, applicant.lastName), applicantAppSuccessful_1.htmlBody(applicant.firstName, applicant.lastName));
    }
}
exports.default = NotifyService;
