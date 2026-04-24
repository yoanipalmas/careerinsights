export type NavItemType = 'link' | 'anchor';

export interface NavItem {
  name: string;
  href: string;
  type: NavItemType;
  requiresAuth?: boolean;
}

export const navItems: NavItem[] = [
  { name: 'STARTUPS', href: '/empresa', type: 'link' },
  { name: 'PARTICULARES', href: '/junior', type: 'link' },
  { name: 'CONÓCENOS', href: '/#conocenos', type: 'anchor' },
  { name: 'SERVICIOS', href: '/#servicios', type: 'anchor' },
  { name: 'BLOG', href: '/blog', type: 'link' },
  { name: 'CONTACTO', href: '/contacto', type: 'link' },
  { name: 'MI PERFIL', href: '/perfil', type: 'link', requiresAuth: true },
];
