import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaAward, FaLightbulb } from "react-icons/fa";

export default function OurMission() {
  const pillars = [
    {
      icon: BsEmojiSmile,
      title: "Customer Satisfaction",
      text: "Every decision starts with the person on the other end of the order.",
    },
    {
      icon: FaAward,
      title: "Quality Products",
      text: "We vet every item ourselves before it ever reaches your cart.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      text: "We rethink the little frictions of shopping so you don't have to notice them.",
    },
  ];
  return (
    <section className="bg-[#F7F6F3] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">
          What drives us
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
          Our Mission
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-500 sm:text-base">
          To make premium goods accessible without compromise — pairing
          thoughtful design with honest pricing, and backing every order with
          service that actually helps.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: IconCmp, title, text }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-300 text-gray-600 transition-colors duration-300 group-hover:bg-blue-400">
                <IconCmp className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#141412]">
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
