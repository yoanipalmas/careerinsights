import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";

type NavLinkProps = {
  to: string;
  type?: "link" | "anchor";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
};

export function NavLink({ to, type = "link", children, onClick }: NavLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if this link is active
  const isActive = (() => {
    if (type === "anchor") return false; // anchors (CONÓCENOS, SERVICIOS) don't have a dedicated page
    // exact match for "/" to avoid matching everything; prefix match for others
    if (to === "/") return location.pathname === "/";
    return location.pathname === to || location.pathname.startsWith(to + "/");
  })();

  const baseClass = `
    relative font-medium text-sm tracking-wide transition-colors duration-200
    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:right-0
    after:mx-auto after:h-0.5 after:rounded-full after:transition-all after:duration-300
  `;

  const activeClass = `text-[#EFBC68] after:w-full after:bg-[#EFBC68]`;
  const inactiveClass = `text-gray-700 hover:text-[#2A2420] after:w-0 hover:after:w-full after:bg-[#EFBC68]`;

  const className = `${baseClass} ${isActive ? activeClass : inactiveClass}`;

  if (type === "anchor") {
    const [, hash] = to.split("#");
    const sectionId = hash;
    const isHome = location.pathname === "/";

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      if (isHome && sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(() => {
            const el2 = document.getElementById(sectionId);
            if (el2) el2.scrollIntoView({ behavior: "smooth" });
          }, 300);
        }
      } else {
        navigate(`/?scrollTo=${sectionId}`);
      }
    };

    return (
      <a href={to} className={className} onClick={e => { handleClick(e); if (onClick) onClick(e); }}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
