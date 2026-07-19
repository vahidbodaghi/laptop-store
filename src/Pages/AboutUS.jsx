import React from "react";
import {
  FaGem,
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaUsers,
  FaBoxOpen,
  FaStar,
  FaCalendarAlt,
  FaArrowRight,
  FaUserCircle,
  FaLightbulb,
  FaAward,
} from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";



const FONT_ID = "about-us-font-import";

function useFontImport() {
  React.useEffect(() => {
    if (document.getElementById(FONT_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

const FONT_STYLE = {
  body: { fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" },
  display: { fontFamily: "'Sora', ui-sans-serif, system-ui, sans-serif" },
};

/* ------------------------------- Hero ------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0E2A22]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#1F7A5C]/40 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#C9A24B]/20 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 text-center sm:pb-24 sm:pt-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#C9A24B] backdrop-blur-sm">
          Our Story
        </span>

        <h1
          style={FONT_STYLE.display}
          className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          About Us
        </h1>
        <p style={FONT_STYLE.body} className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Learn more about our story, mission, and values.
        </p>

        <p style={FONT_STYLE.body} className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60">
          We're a small team of makers and shoppers who got tired of choosing between
          quality and convenience — so we built a storefront that never asks you to.
        </p>

        <div className="mt-9">
          <a
            href="#our-story"
            style={FONT_STYLE.body}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A24B] px-7 py-3.5 text-sm font-semibold text-[#0E2A22] shadow-[0_10px_30px_rgba(201,162,75,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9B563]"
          >
            Discover Our Journey
            <FaArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Our Story ----------------------------- */

function OurStory() {
  return (
    <section id="our-story" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <span style={FONT_STYLE.body} className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            Where it began
          </span>
          <h2 style={FONT_STYLE.display} className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
            Our Story
          </h2>
          <div style={FONT_STYLE.body} className="mt-5 space-y-4 text-[15px] leading-relaxed text-[#5B5B54]">
            <p>
              It started in a two-bedroom apartment in 2016, with a single
              question: why did buying something well-made online always feel
              like a gamble? Our founders — a product designer and a supply
              chain engineer — set out to fix that, one carefully sourced item
              at a time.
            </p>
            <p>
              What began as a handful of curated goods sold out of a spare
              room has grown into a storefront trusted by thousands of
              customers across the country. The apartment is gone, but the
              standard we set that first year hasn't moved an inch.
            </p>
            <p>
              Today, every product we carry is chosen the same way the first
              one was: tested personally, vetted for quality, and only
              shipped once it's something we'd be proud to use ourselves.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#EDEAE2] to-[#DCE4DD] shadow-[0_20px_50px_rgba(20,20,18,0.08)]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span style={FONT_STYLE.display} className="text-sm font-medium uppercase tracking-[0.2em] text-[#8A8A80]">
                Our Workshop, 2016
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-2xl border-8 border-white bg-[#C9A24B]/30 shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Our Mission ----------------------------- */

function OurMission() {
  const pillars = [
    { icon: BsEmojiSmile, title: "Customer Satisfaction", text: "Every decision starts with the person on the other end of the order." },
    { icon: FaAward, title: "Quality Products", text: "We vet every item ourselves before it ever reaches your cart." },
    { icon: FaLightbulb, title: "Innovation", text: "We rethink the little frictions of shopping so you don't have to notice them." },
  ];

  return (
    <section className="bg-[#F7F6F3] py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span style={FONT_STYLE.body} className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
          What drives us
        </span>
        <h2 style={FONT_STYLE.display} className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
          Our Mission
        </h2>
        <p style={FONT_STYLE.body} className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#5B5B54] sm:text-base">
          To make premium goods accessible without compromise — pairing
          thoughtful design with honest pricing, and backing every order with
          service that actually helps.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map(({ icon: IconCmp, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#E7E4DB] bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(20,20,18,0.08)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0E2A22] text-[#C9A24B] transition-colors duration-300 group-hover:bg-[#1F7A5C]">
                <IconCmp className="h-5 w-5" />
              </div>
              <h3 style={FONT_STYLE.display} className="mt-4 text-lg font-semibold text-[#141412]">
                {title}
              </h3>
              <p style={FONT_STYLE.body} className="mt-1.5 text-sm leading-relaxed text-[#5B5B54]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Why Choose Us --------------------------- */

function WhyChooseUs() {
  const features = [
    { icon: FaGem, title: "Premium Quality", text: "Every item is sourced, tested, and vetted before it earns a place in our catalog." },
    { icon: FaShippingFast, title: "Fast Delivery", text: "Most orders ship within 24 hours and arrive in 2–3 business days." },
    { icon: FaShieldAlt, title: "Secure Payment", text: "Bank-level encryption protects every transaction, every time." },
    { icon: FaHeadset, title: "Customer Support", text: "A real person is one message away, seven days a week." },
  ];

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span style={FONT_STYLE.body} className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            The difference
          </span>
          <h2 style={FONT_STYLE.display} className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
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
              <h3 style={FONT_STYLE.display} className="mt-4 text-base font-semibold text-[#141412]">
                {title}
              </h3>
              <p style={FONT_STYLE.body} className="mt-1.5 text-sm leading-relaxed text-[#5B5B54]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Statistics ----------------------------- */

function Statistics() {
  const stats = [
    { icon: FaUsers, value: "50K+", label: "Total Customers" },
    { icon: FaBoxOpen, value: "120K+", label: "Products Sold" },
    { icon: FaStar, value: "98%", label: "Positive Reviews" },
    { icon: FaCalendarAlt, value: "8+", label: "Years of Experience" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E2A22] py-16 sm:py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#1F7A5C]/40 blur-[110px]" />
        <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#C9A24B]/10 blur-[110px]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4 sm:gap-6">
        {stats.map(({ icon: IconCmp, value, label }, i) => (
          <div
            key={label}
            className={`flex flex-col items-center gap-2 px-2 text-center sm:border-l sm:border-white/10 ${i === 0 ? "sm:border-l-0" : ""}`}
          >
            <IconCmp className="h-6 w-6 text-[#C9A24B]" />
            <span style={FONT_STYLE.display} className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {value}
            </span>
            <span style={FONT_STYLE.body} className="text-xs font-medium uppercase tracking-[0.12em] text-white/50">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------- Team -------------------------------- */

function Team() {
  const members = [
    { name: "Amara Whitfield", role: "Founder & CEO" },
    { name: "Daniel Okafor", role: "Head of Product" },
    { name: "Lena Marchetti", role: "Customer Experience Lead" },
  ];

  return (
    <section className="bg-[#F7F6F3] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span style={FONT_STYLE.body} className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1F7A5C]">
            The people behind it
          </span>
          <h2 style={FONT_STYLE.display} className="mt-3 text-3xl font-bold tracking-tight text-[#141412] sm:text-4xl">
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
              <h3 style={FONT_STYLE.display} className="mt-5 text-lg font-semibold text-[#141412]">
                {name}
              </h3>
              <p style={FONT_STYLE.body} className="mt-1 text-sm text-[#5B5B54]">
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Final CTA ----------------------------- */

function FinalCta() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E2A22] px-8 py-14 text-center sm:px-16 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-[#C9A24B]/20 blur-[90px]" />
            <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#1F7A5C]/40 blur-[90px]" />
          </div>
          <div className="relative">
            <h2 style={FONT_STYLE.display} className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Ready to explore what we've built?
            </h2>
            <p style={FONT_STYLE.body} className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-base">
              Browse the full collection and see why thousands of customers
              keep coming back.
            </p>
            <div className="mt-8">
              <a
                href="#"
                style={FONT_STYLE.body}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A24B] px-8 py-3.5 text-sm font-semibold text-[#0E2A22] shadow-[0_10px_30px_rgba(201,162,75,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D9B563]"
              >
                Shop Now
                <FaArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



export default function AboutUs() {
  useFontImport();

  return (
    <div className="min-h-screen w-full bg-white">
      <Hero />
      <OurStory />
      <OurMission />
      <WhyChooseUs />
      <Statistics />
      <Team />
      <FinalCta />
    </div>
  );
}
