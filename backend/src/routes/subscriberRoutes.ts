import express, { Request, Response } from 'express';
import Subscriber from '../models/subscriber';

const router = express.Router();

// Email validation function
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// POST /subscribe
router.post('/subscribe', async (req: Request, res: Response): Promise<void> => {
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
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      res.status(409).json({ error: 'Email already subscribed' }); // 409 Conflict
      return;
    }

    // Create and save new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    res.status(201).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

export default router;
