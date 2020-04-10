require("dotenv").config()
import fetch from 'node-fetch'

class SMS {
  static send(from:string, phone:string, body:string):Promise<any> {
    return fetch(
      `https://www.bulksmsnigeria.com/api/v1/sms/create?api_token=${process.env.SMS_TOKEN}&from=${from}&to=${phone}&body=${body}&dnd=2`
    );
  }
}

export default SMS
