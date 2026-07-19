import React from "react";
import { FaGem, FaHeadset, FaShieldAlt, FaShippingFast } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: FaGem,
      title: "Premium Quality",
      text: "Every item is sourced, tested, and vetted before it earns a place in our catalog.",
    },
    {
      icon: FaShippingFast,
      title: "Fast Delivery",
      text: "Most orders ship within 24 hours and arrive in 2–3 business days.",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      text: "Bank-level encryption protects every transaction, every time.",
    },
    {
      icon: FaHeadset,
      title: "Customer Support",
      text: "A real person is one message away, seven days a week.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            The difference
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: IconCmp, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#E7E4DB] bg-[#FBFAF7] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_16px_36px_rgba(20,20,18,0.09)]"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#0E2A22] text-[#C9A24B] transition-all duration-300 group-hover:bg-[#C9A24B] group-hover:text-[#0E2A22]">
                <IconCmp className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#141412]">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-[#5B5B54]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
