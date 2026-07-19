import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import InfoCard from "./InfoCard";
import { MdEmail } from "react-icons/md";

export default function ContactInfoSection() {
  const socials = [
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaFacebookF, label: "Facebook" },
    { icon: FaLinkedinIn, label: "LinkedIn" },
  ];
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      content: (
        <>
          221B Market Street
          <br />
          San Francisco, CA 94103
        </>
      ),
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      content: (
        <>
          +1 (415) 555-0192
          <br />
          <span className="text-sm font-normal text-slate-500">
            Mon–Fri, 9am–6pm PT
          </span>
        </>
      ),
    },
    {
      icon: MdEmail,
      label: "Email",
      content: (
        <>
          hello@storefront.com
          <br />
          <span className="text-sm font-normal text-slate-500">
            Replies within 24 hours
          </span>
        </>
      ),
    },
    {
      icon: FaClock,
      label: "Business Hours",
      content: (
        <>
          Mon–Fri: 9am – 6pm
          <br />
          Sat: 10am – 4pm · Sun: Closed
        </>
      ),
    },
  ];

  return (
    <section id="contact-info" className="bg-slate-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Reach us directly
          </h2>
          <p className="mt-3 text-slate-600">
            Prefer not to fill out a form? Here's every other way to find us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <InfoCard key={item.label} icon={item.icon} label={item.label}>
              {item.content}
            </InfoCard>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <span className="text-sm font-medium text-slate-500">
            Follow along
          </span>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: IconCmp, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-indigo-500 hover:via-fuchsia-500 hover:to-amber-500 hover:text-white hover:shadow-lg"
              >
                <IconCmp className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
