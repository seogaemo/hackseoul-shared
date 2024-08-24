"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceHost = exports.serviceHost = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.serviceHost = process.env.HOST || "localhost";
const getServiceHost = (host) => process.env.NODE_ENV === "production" ? host : exports.serviceHost;
exports.getServiceHost = getServiceHost;
//# sourceMappingURL=env.js.map