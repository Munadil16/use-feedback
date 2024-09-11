import { z } from "zod";

export const newFeedbackSchema = z.object({
  id: z.string().optional(),
  message: z.string().trim().min(1, "Message is required"),
  customerName: z.string().trim().min(1, "Name is required"),
  customerEmail: z.string().email("Invalid email address"),
  customerImage: z.string().trim().min(1, "Photo is required"),
  rating: z.number(),
});

export type FeedbackType = z.infer<typeof newFeedbackSchema>;
