import React from 'react';
import { NavLink } from './NavLink';
import { navItems } from '../features/data/navItems';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const filteredItems = navItems.filter(item => !item.requiresAuth || isLoggedIn);
  const leftItems = filteredItems.slice(0, 2);
  const rightItems = filteredItems.slice(2);

  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center px-4 md:px-8 py-4 border-b-2 border-border-navbar w-full">
      {/* Left Side (pegado al logo) */}
      <div className="flex space-x-4 md:space-x-8 justify-self-end mr-6 md:mr-12">
        {leftItems.map(item => (
          <NavLink key={item.name} to={item.href} type={item.type}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Center - Logo */}
      <Link to={'/'} className="justify-self-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl md:text-4xl font-bold text-career font-chloe whitespace-nowrap">Career Insights</span>
          <div className="flex space-x-1">
            <span className="w-2 h-2 md:w-3 md:h-3 bg-logo-uno rounded-full"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-logo-dos rounded-full"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-logo-tres rounded-full"></span>
            <span className="w-2 h-2 md:w-3 md:h-3 bg-logo-cuatro rounded-full"></span>
          </div>
        </div>
      </Link>

      {/* Right Side (pegado al logo) */}
      <div className="flex space-x-4 md:space-x-8 justify-self-start ml-6 md:ml-12">
        {rightItems.map(item => (
          <NavLink key={item.name} to={item.href} type={item.type}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
