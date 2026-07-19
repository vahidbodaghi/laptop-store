import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { navLinks } from "./../../../constants/navLinks";

import NavLinks from "./Fragments/NavLinks";
import { TbMenu2, TbX } from "react-icons/tb";
import HeaderActions from "./Fragments/HeaderActions";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="w-full! border-b border-slate-200 h-15 bg-gradient-to-r from-white via-slate-50 to-white shadow-sm relative z-50">
      <nav className="flex-between h-full px-4 container mx-auto">
        <div className="hidden lg:flex gap-4">
          <NavLinks links={navLinks} />
        </div>

        {/* Desktop CTA — hidden below lg */}
        <div className="hidden lg:block">
          <HeaderActions />
        </div>

        {/* Mobile hamburger toggle — visible below lg */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors duration-300 hover:bg-slate-100 hover:text-slate-900"
        >
          {menuOpen ? (
            <TbX className="text-xl" />
          ) : (
            <TbMenu2 className="text-xl" />
          )}
        </button>
      </nav>

      {/* Mobile dropdown panel — visible below lg when open */}
      <div
        id="mobile-nav-panel"
        className={[
          "lg:hidden absolute inset-x-0 top-full bg-white border-b border-slate-200 shadow-sm overflow-hidden transition-all duration-300 ease-out",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          <NavLinks
            links={navLinks}
            mobile
            onLinkClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="px-4 pb-4">
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}

export default Header;
