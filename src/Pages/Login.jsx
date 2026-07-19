import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { FaBolt, FaEnvelope, FaLock } from "react-icons/fa";
import LoginHero from "../Components/auth/LoginHero";
import FormInput from "../Components/auth/FormInput";
import FormCheckbox from "../Components/auth/FormCheckbox";
import FormButton from "../Components/auth/FormButton";
import GoogleButton from "../Components/auth/GoogleButton";
import FormDivider from "../Components/auth/FormDivider";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations/loginSchema";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <LoginHero
          title="Welcome Back"
          description="Sign in to track your orders, manage your wishlist, and pick up your cart right where you left it."
        />

        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 md:px-16 lg:px-20">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 inline-flex items-center gap-2 lg:hidden">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0B1220] text-cyan-300">
                <FaBolt className="h-4 w-4" />
              </span>
              <span className="text-xl font-extrabold tracking-tight text-[#0B1220]">
                Shopino
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Welcome Back
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Don't have an account yet?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
              >
                Create one
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              <FormInput
                label="Email"
                type="email"
                placeholder="you@example.com"
                icon={
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                }
                register={register}
                name="email"
                error={errors.email}
              />
              <FormInput
                label="Password"
                type="password"
                placeholder="Enter your password"
                icon={
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                }
                register={register}
                name="password"
                error={errors.password}
              />

              <div className="flex items-center justify-between">
                <FormCheckbox
                  label="Remember me"
                  name="remember"
                  register={register}
                  rules={{
                    required: "You must accept the terms.",
                  }}
                  error={errors.remember}
                />

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(token) => {
                    setValue("captcha", token, {
                      shouldValidate: true,
                    });
                  }}
                  onExpired={() => {
                    setValue("captcha", "", {
                      shouldValidate: true,
                    });
                  }}
                />
              </div>

              {/* Submit */}

              <FormButton>Log In</FormButton>

              <FormDivider />

              {/* Google Login */}

              <GoogleButton
                onClick={() => console.log("Google login clicked")}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
