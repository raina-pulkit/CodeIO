"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const express_1 = __importDefault(require("express"));
const loginController_1 = require("../controllers/loginController");
exports.api = (0, express_1.default)();
exports.api.post("/", loginController_1.login);
