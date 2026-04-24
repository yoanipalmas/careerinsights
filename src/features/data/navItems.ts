export type NavItemType = 'link' | 'anchor';

export interface NavItem {
  name: string;
  href: string;
  type: NavItemType;
  requiresAuth?: boolean;
}

export const navItems: NavItem[] = [
  { name: 'CONÓCENOS', href: '/#conocenos', type: 'anchor' },
  { name: 'SERVICIOS', href: '/#servicios', type: 'anchor' },
  { name: 'CONTACTO', href: '/contacto', type: 'link' },
  { name: 'BLOG', href: '/blog', type: 'link' },
  { name: 'MI PERFIL', href: '/perfil', type: 'link', requiresAuth: true },
];
