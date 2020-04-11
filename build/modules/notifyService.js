"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsletter_1 = __importDefault(require("./newsletter"));
const sms_1 = __importDefault(require("./sms"));
const email_1 = __importDefault(require("./email"));
const volunteerAppSuccessful_1 = require("../emails/volunteerAppSuccessful");
class NotifyService {
    static email_sms_volunteer(volunteer) {
        const name = `${volunteer.firstName} ${volunteer.lastName}`;
        //add user to mailing list
        newsletter_1.default.addToList(volunteer.firstName, volunteer.lastName, name, volunteer.email, volunteer.phone, "18088");
        //send sms
        sms_1.default.send("HBBAfrica", volunteer.phone, `Dear ${name},  thank you for your application! The team will be so glad to have you join our efforts. A member of our Volunteer Management team shall be in touch with you on the next steps.
      Cheers,
      Funke Adeoye
      Executive Director HBBA`)
            .then((res) => res.json())
            .then((results) => console.log(results))
            .catch((err) => console.log(err));
        //send email
        email_1.default.sendWithoutAttachment(volunteer.firstName, volunteer.lastName, volunteer.email, "Hope Behind Bars Africa", "letstalk@hopebehindbarsafrica.org", "Hope Behind Bars Africa: Volunteer Application Successful!", volunteerAppSuccessful_1.textBody(volunteer.firstName, volunteer.lastName), volunteerAppSuccessful_1.htmlBody(volunteer.firstName, volunteer.lastName));
    }
}
exports.default = NotifyService;
