import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";

type NavLinkProps = {
  to: string;
  type?: "link" | "anchor";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
};

export function NavLink({ to, type = "link", children, onClick }: NavLinkProps) {
  const className = `
    text-gray-800
    font-medium
    relative
    after:content-['']
    after:absolute
    after:bottom-0
    after:left-0
    after:w-full
    after:h-0.5
    after:bg-gradient-to-r
    after:from-orange-500
    after:to-purple-500
    after:scale-x-0
    hover:after:scale-x-100
    after:transition-transform
    after:duration-300
    after:origin-left
  `;

  const navigate = useNavigate();
  const location = useLocation();

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
          // fallback: setTimeout in case not mounted yet
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

