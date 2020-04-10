"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const htmlBody = (firstName, lastName) => {
    return `<table style='background-color: #d5d5d5;' border='0' width='100%' cellspacing='0'>
<tbody>
<tr>
<td>
<table style='font-family: Helvetica,Arial,sans-serif; background-color: #fff; margin-top: 40px; margin-bottom: 40px;' border='0' width='600' cellspacing='0' cellpadding='0' align='center'>
<tbody>
<tr>
<td style='padding-top: 40px; padding-right: 40px; padding-bottom: 15px;' colspan='2'>
<p style='text-align: center;'><a href='https://hopebehindbarsafrica.org'><img src='https://hopebehindbarsafrica.org/volunteer/images/hbb_logo.jpg' alt='Hope Behind Bars Logo' width='20%' border='0' /></a></p>
</td>
</tr>
<tr>
<td style='padding-right: 40px; text-align: right;' colspan='2'><span style='font-size: 12pt;'></span></td>
</tr>
<tr>
<td style='color: #000; font-size: 12pt; font-weight: normal; line-height: 15pt; padding: 40px 40px 80px 40px;' colspan='2' valign='top'>
<p>Dear ${firstName} ${lastName},</p>
<p>Thank you for your interest in volunteering with Hope behind Bars Africa Initiative.</p>
<p>Volunteers are an important part of our team and help us in many ways. We appreciate everyone who gives us the gift of their time. Wherever you volunteer, you will make a difference!</p>
<p>A member of our Volunteer Management team shall be in touch with you on the next steps. </p>
<p>Thank you.</p>
<p>Sincerely,</p>
</td>
</tr>
<tr>
<td style='border-top: 5px solid #000000; height: 10px; font-size: 7pt;' colspan='2' valign='top'><span>&nbsp;</span></td>
</tr>
<tr style='text-align: center;'>
<td id='s1' style='padding-left: 20px;' valign='top'><span style='text-align: center; color: #333; font-size: 12pt;'><strong>Funke Adeoye</strong></span><span style='color: #cccccc; font-size: x-large;'>&nbsp;|&nbsp;</span><span style='text-align: left; color: #333; font-size: 11pt; font-weight: normal;'>Executive Director</span></td>
</tr>
<tr style='text-align: center; padding-left: 20px; padding-right: 20px; padding-bottom: 0;'>
<td colspan='2' valign='top'><span style='color: #333; font-size: 8pt; font-weight: normal; line-height: 17pt;'><span style='font-size: 12pt;'>Hope Behind Bars Africa</span><br />Plot 123, DeoGratias Plaza, Utako, Abuja, Nigeria.<br />tel: +23407033633243<br /><strong>email:&nbsp;</strong>letstalk@hopebehindbarsafrica.org &nbsp;|&nbsp; <strong>www.hopebehindbarsafrica.org</strong></span>
<p><a href='https://twitter.com/hopebehindbar'><img src='https://s3.amazonaws.com/rkjha/signature-maker/icons/twitter_circle_color-20.png' width='20px' height='20px' /></a><a href='https://www.facebook.com/Hopebehindbar/'><img src='https://s3.amazonaws.com/rkjha/signature-maker/icons/facebook_circle_color-20.png' width='20px' height='20px' /></a><a><img src='https://s3.amazonaws.com/rkjha/signature-maker/icons/linkedin_circle_color-20.png' width='20px' height='20px' /></a><a href='https://www.instagram.com/hopebehindbar/'><img src='https://s3.amazonaws.com/rkjha/signature-maker/icons/instagram_circle_color-20.png' width='20px' height='20px' /></a></p>
</td>
</tr>
<tr>
<td id='s3' style='padding-left: 20px; padding-right: 20px;' colspan='2' valign='bottom'>
<p style='font-family: Helvetica, sans-serif; text-align: center; font-size: 12px; line-height: 21px; color: #333;'><span style='margin-left: 4px;'><span style='opacity: 0.4; color: #333; font-size: 9px;'>Disclaimer: This message and any files transmitted with it are confidential and privileged. If you have received it in error, please notify the sender by return e-mail and delete this message from your system. If you are not the intended recipient you are hereby notified that any dissemination, copy or disclosure of this e-mail is strictly prohibited.&nbsp;This email is for negotiation purposes only and does not create a binding contract.</span></span></p>
</td>
</tr>
<tr>
<td style='border-bottom: 5px solid #fc9700; height: 5px; font-size: 7pt;' colspan='2' valign='top'>&nbsp;</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>`;
};
exports.htmlBody = htmlBody;
const textBody = (firstName, lastName) => {
    return `
    Dear ${firstName} ${lastName},
    Thank you for your interest in volunteering with Hope behind Bars Africa Initiative.
    Volunteers are an important part of our team and help us in many ways. We appreciate everyone who gives us the gift of their time. Wherever you volunteer, you will make a difference!
    A member of our Volunteer Management team shall be in touch with you on the next steps.
    Thank you.
    Sincerely,
    Funke Adeoye
    Executive Director
    Hope Behind Bars Africa
    `;
};
exports.textBody = textBody;
