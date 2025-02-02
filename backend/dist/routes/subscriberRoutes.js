"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const subscriber_1 = __importDefault(require("../models/subscriber"));
const router = express_1.default.Router();
// Email validation function
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
// POST /subscribe
router.post('/subscribe', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        // Check if email is provided
        if (!email) {
            res.status(400).json({ error: 'Email is required' });
            return;
        }
        // Validate email format
        if (!isValidEmail(email)) {
            res.status(400).json({ error: 'Enter a valid email address' });
            return;
        }
        // Check if email already exists
        const existingSubscriber = yield subscriber_1.default.findOne({ email });
        if (existingSubscriber) {
            res.status(409).json({ error: 'Email already subscribed' }); // 409 Conflict
            return;
        }
        // Create and save new subscriber
        const newSubscriber = new subscriber_1.default({ email });
        yield newSubscriber.save();
        res.status(201).json({ message: 'Subscription successful' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to subscribe' });
    }
}));
exports.default = router;
