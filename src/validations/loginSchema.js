import * as Yup from "yup";

const emailSchema = Yup.string()
  .required("Email is required")
  .min(10, "Email must be at least 10 characters")
  .max(30, "Email must be at most 30 characters")
  .email("Invalid email address");

const passwordSchema = Yup.string()
  .required("Password is required")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,20}$/,
    "Password must contain uppercase, lowercase, number and special character",
  );

export const loginSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  captcha: Yup.string().required("Please verify that you are not a robot."),
});

export const signUpSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters")
    .max(100, "Full name must be at most 100 characters"),

  email: emailSchema,

  password: passwordSchema,

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
  captcha: Yup.string().required("Please verify that you are not a robot."),

  agreed: Yup.boolean().oneOf([true], "You must accept the terms."),
});
