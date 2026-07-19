
import { Link } from "react-router";
import { navLinks, customerLinks } from "../../constants/navLinks";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">ShopSphere</h3>

            <p className="text-sm leading-6 text-slate-500">
              Your trusted online store for quality products, fast delivery, and
              secure shopping.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm text-slate-500">
              {navLinks.map((item) => (
                <li key={item.id} className="transition-colors hover:text-indigo-600">
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Service</h3>

            <ul className="space-y-3 text-sm text-slate-500">
              {customerLinks.map((item) => (
                <li key={item.id} className="transition-colors hover:text-indigo-600">
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>

            <div className="space-y-3 text-sm text-slate-500">
              <p>New York, USA</p>
              <p>+1 (555) 123-4567</p>
              <p>support@shopsphere.com</p>
              <p>Mon - Fri: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-slate-200"></div>

        <div className="flex flex-col gap-3 text-center text-sm text-slate-500 md:flex-row md:justify-between">
          <p>Fast Worldwide Shipping</p>
          <p>24/7 Customer Support</p>
          <p>Secure Payments</p>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        <p className="mt-2">
          Developed by{" "}
          <a
            href="https://github.com/vahidbodaghi"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Vahid Bodaghi GitHub profile"
            className="font-medium text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Vahid Bodaghi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
