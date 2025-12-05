export interface Persona {
    id: string;
    name: string;
    description: string;
    colorClass: string; // Tailwind text color class, e.g. "text-red-500"
    keyword: string;
}

export interface NavigationLink {
    href: string;
    label: string;
}