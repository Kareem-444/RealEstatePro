import Link from "next/link";
import { Home, Building2, PlusSquare, Heart, ListChecks, BookText, LogIn, UserPlus } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/properties", label: "Properties", icon: Building2 },
  { href: "/add-property", label: "Add Property", icon: PlusSquare },
  { href: "/favorites", label: "Favorites", icon: Heart },
  { href: "/compare", label: "Compare", icon: ListChecks },
  { href: "/blog", label: "Blog", icon: BookText },
  { href: "/auth/login", label: "Login", icon: LogIn },
  { href: "/auth/register", label: "Register", icon: UserPlus },
];

export default function Navbar() {
  return (
    <nav className="w-full py-4 bg-emerald-950 shadow-lg mb-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <ul className="flex gap-6 items-center">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-emerald-50 hover:bg-emerald-800 hover:text-white transition-colors font-semibold text-base focus:outline-none focus:ring-2 focus:ring-emerald-400"
                prefetch={true}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
