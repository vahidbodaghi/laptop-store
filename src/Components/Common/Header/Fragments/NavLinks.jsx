import { NavLink } from "react-router";

export default function NavLinks({
  links,
  mobile = false,
  onLinkClick,
}) {
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.id}
            to={link.to}
            onClick={onLinkClick}
            className={({ isActive }) =>
              `group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-indigo-100 text-indigo-600 [&_svg]:text-indigo-600"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-0.5 [&_svg]:text-slate-400 hover:[&_svg]:text-indigo-500"
              }
              ${mobile ? "w-full" : ""}`
            }
          >
            <Icon className="transition-colors duration-300" />
            {link.label}
          </NavLink>
        );
      })}
    </>
  );
}