"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const node_fetch_1 = __importDefault(require("node-fetch"));
class SMS {
    static send(from, phone, body) {
        return node_fetch_1.default(`https://www.bulksmsnigeria.com/api/v1/sms/create?api_token=${process.env.SMS_TOKEN}&from=${from}&to=${phone}&body=${body}&dnd=2`);
    }
}
exports.default = SMS;
