import { FaArrowRight, FaCheck, FaEnvelope, FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import FormInput from "../../auth/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdSubject } from "react-icons/md";
import { BiMessage } from "react-icons/bi";
import { contactSchema } from "../../../validations/contactSchema";
import Swal from "sweetalert2";

export default function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);

    reset();

    Swal.fire({
      icon: "success",
      title: "Message sent!",
      text: "Your message has been sent successfully.",
      confirmButtonText: "OK",
      confirmButtonColor: "#4f46e5",
    });
  };

  return (
    <section id="contact-form" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Send us a message
          </h2>
          <p className="mt-3 text-slate-600">
            Tell us what's on your mind — we read every message.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-10"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
          </div>
          <FormInput
            label="Subject"
            type="text"
            placeholder="Order inquiry, feedback, partnership…"
            icon={
              <MdSubject className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            }
            register={register}
            name="subject"
            error={errors.subject}
          />
          <FormInput
            label="Message"
            placeholder="Tell us how we can help…"
            icon={
              <BiMessage className="absolute left-3 top-1/6 -translate-y-1/2 text-gray-400" />
            }
            register={register}
            name="message"
            textarea
            error={errors.message}
          />

          
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-amber-500 bg-[length:160%_100%] bg-left px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-500 hover:bg-right hover:shadow-[0_14px_34px_rgba(99,102,241,0.35)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
