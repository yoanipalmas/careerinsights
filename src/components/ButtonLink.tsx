import { Link } from "react-router-dom";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
};

export function ButtonLink({ to, children }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className="
        bg-[#ffb7a1]
        hover:bg-[#ed7a6b]
        text-white
        font-semibold
        px-8
        py-3
        rounded-lg
        shadow-md
        transition
        duration-300
        focus:outline-none
        focus:ring-2
        focus:ring-pink-500
        inline-block
        text-center
      "
    >
      {children}
    </Link>
  );
}
