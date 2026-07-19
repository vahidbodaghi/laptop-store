import {
  TbBooks,
  TbHome,
  TbInfoCircle,
  TbPhoneCall,
} from "react-icons/tb";


const navLinks = [
  {id: 1, to: "/", label: "Home", icon: TbHome },
  {id: 2, to: "/articles", label: "Articles", icon: TbBooks },
  {id: 3, to: "/about-us", label: "About Us", icon: TbInfoCircle },
  {id: 4, to: "/contact-us", label: "Contact Us", icon: TbPhoneCall },
  
];

const customerLinks = [
  { id: 1, label: "Track Order", to: "/track-order" },
  { id: 2, label: "Returns", to: "/returns" },
  { id: 3, label: "FAQ", to: "/faq" },
  { id: 4, label: "Privacy Policy", to: "/privacy-policy" },
  { id: 5, label: "Terms & Conditions", to: "/terms" },
];

export {navLinks ,customerLinks}