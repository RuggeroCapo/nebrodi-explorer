import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ to, children, className }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  // If custom className is provided, use it; otherwise use default styling
  const defaultClasses = `text-sm font-medium transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-foreground"
  }`;

  return (
    <Link
      to={to}
      className={className || defaultClasses}
    >
      {children}
    </Link>
  );
};

