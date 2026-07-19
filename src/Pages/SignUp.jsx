import { Link } from "react-router";
import { FaBolt, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import GoogleButton from "../Components/auth/GoogleButton";
import FormDivider from "../Components/auth/FormDivider";
import FormButton from "../Components/auth/FormButton";
import FormCheckbox from "../Components/auth/FormCheckbox";
import FormInput from "../Components/auth/FormInput";
import LoginHero from "../Components/auth/LoginHero";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validations/loginSchema";
import ReCAPTCHA from "react-google-recaptcha";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full bg-white font-sans">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left: brand panel */}
        <LoginHero
          title="Create Account"
          description="Sign up to create your account and start shopping with us."
        />

        {/* Right: form */}
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
              Create Account
            </h2>
            <p className="mt-1.5 text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
              >
                Log in
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
              {/* Full Name */}
              <FormInput
                label="Full Name"
                type="text"
                placeholder="Jane Doe"
                icon={
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                }
                register={register}
                name="fullName"
               
                error={errors.fullName}
              />

              {/* Email */}
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

              {/* Confirm Password */}

              <FormInput
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                icon={
                  <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                }
                register={register}
                name="confirmPassword"
                error={errors.confirmPassword}
              />

              {/* Terms */}

              <FormCheckbox
                name="agreed"
                register={register}
                
                error={errors.agreed}
              >
                I agree to the {""}
                <Link to="/terms" className="text-blue-600 hover:text-blue-700">
                  Terms and Conditions {""}
                </Link>
                and {""}
                <Link
                  to="/privacy-policy"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </Link>
              </FormCheckbox>
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
              <FormButton>Create Account</FormButton>

              {/* Divider */}
              <FormDivider />

              {/* Google */}
              <GoogleButton />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
