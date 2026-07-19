import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Team() {
  const members = [
    { name: "Amara Whitfield", role: "Founder & CEO" },
    { name: "Daniel Okafor", role: "Head of Product" },
    { name: "Lena Marchetti", role: "Customer Experience Lead" },
  ];

  return (
    <section className="bg-[#F7F6F3] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            The people behind it
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
            Meet the Team
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {members.map(({ name, role }) => (
            <div
              key={name}
              className="group rounded-2xl border border-[#E7E4DB] bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,20,18,0.08)]"
            >
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#EDEAE2] text-[#8A8A80] transition-colors duration-300 group-hover:bg-[#0E2A22] group-hover:text-[#C9A24B]">
                <FaUserCircle className="h-14 w-14" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#141412]">
                {name}
              </h3>
              <p className="mt-1 text-sm text-[#5B5B54]">{role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
