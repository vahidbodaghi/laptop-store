import * as Yup from "yup";
const emailSchema = Yup.string()
  .required("Email is required")
  .min(10, "Email must be at least 10 characters")
  .max(30, "Email must be at most 30 characters")
  .email("Invalid email address");

export const contactSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name must be at most 100 characters"),

  email: emailSchema,

  subject: Yup
    .string()
    .trim()
    .required("Subject is required.")
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject must be at most 100 characters."),

  message: Yup
    .string()
    .trim()
    .required("Message is required.")
    .min(20, "Message must be at least 20 characters.")
    .max(1000, "Message must be at most 1000 characters."),
});
