import React, { useState } from 'react';
import { NavLink } from './NavLink';
import { navItems } from '../features/data/navItems';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const filteredItems = navItems.filter(item => !item.requiresAuth || isLoggedIn);
  const leftItems = filteredItems.slice(0, 3);
  const rightItems = filteredItems.slice(3);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b-2 border-border-navbar w-full">
      {/* Desktop */}
      <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center px-8 py-4">
        <div className="flex space-x-8 justify-self-end mr-12">
          {leftItems.map(item => (
            <NavLink key={item.name} to={item.href} type={item.type}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <Link to={'/'} className="justify-self-center">
          <div className="flex items-center space-x-2">
            <span className="text-4xl font-bold text-career font-chloe whitespace-nowrap">Career Insights</span>
            <div className="flex space-x-1">
              <span className="w-3 h-3 bg-logo-uno rounded-full"></span>
              <span className="w-3 h-3 bg-logo-dos rounded-full"></span>
              <span className="w-3 h-3 bg-logo-tres rounded-full"></span>
              <span className="w-3 h-3 bg-logo-cuatro rounded-full"></span>
            </div>
          </div>
        </Link>
        <div className="flex space-x-8 justify-self-start ml-12">
          {rightItems.map(item => (
            <NavLink key={item.name} to={item.href} type={item.type}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 py-4">
        <Link to={'/'} onClick={() => setMenuOpen(false)}>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-career font-chloe whitespace-nowrap">Career Insights</span>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-logo-uno rounded-full"></span>
              <span className="w-2 h-2 bg-logo-dos rounded-full"></span>
              <span className="w-2 h-2 bg-logo-tres rounded-full"></span>
              <span className="w-2 h-2 bg-logo-cuatro rounded-full"></span>
            </div>
          </div>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          aria-label="Abrir menú"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col border-t border-gray-100 bg-white px-4 pb-4">
          {filteredItems.map(item => (
            <div key={item.name} className="py-3 border-b border-gray-50 last:border-0" onClick={() => setMenuOpen(false)}>
              <NavLink to={item.href} type={item.type}>
                {item.name}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
