"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: 'https://seednestle.vercel.app', // Allow frontend requests
    methods: ['GET', 'POST'],
    credentials: true
}));
// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://admin:admin%400258@seednestledb.8odvf.mongodb.net/SeedNestleDB?retryWrites=true&w=majority";
mongoose_1.default.connect(MONGO_URI, { dbName: 'SeedNestleDB' })
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));
// Routes
const subscriberRoutes_1 = __importDefault(require("../routes/subscriberRoutes"));
app.use('/api', subscriberRoutes_1.default);
// Export for Vercel
exports.default = app;
