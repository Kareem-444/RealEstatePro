import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Home,
  Shield,
  FileText,
  HelpCircle,
  Users,
  Briefcase,
  Newspaper,
  DollarSign,
  ArrowUpRight,
  Key,
  Building2,
  LifeBuoy,
  Headphones,
  Cookie
} from "lucide-react";

interface FooterLink {
  href: string;
  label: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us", icon: Users },
      { href: "/careers", label: "Careers", icon: Briefcase },
      { href: "/news", label: "News & Press", icon: Newspaper },
      { href: "/investors", label: "Investor Relations", icon: DollarSign }
    ]
  },
  {
    title: "Services",
    links: [
      { href: "/buy", label: "Buy Property", icon: Home },
      { href: "/sell", label: "Sell Property", icon: ArrowUpRight },
      { href: "/rent", label: "Rentals", icon: Key },
      { href: "/commercial", label: "Commercial", icon: Building2 }
    ]
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact Us", icon: Mail },
      { href: "/faq", label: "FAQ", icon: HelpCircle },
      { href: "/help", label: "Help Center", icon: LifeBuoy },
      { href: "/support", label: "Customer Support", icon: Headphones }
    ]
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service", icon: FileText },
      { href: "/privacy", label: "Privacy Policy", icon: Shield },
      { href: "/cookies", label: "Cookie Policy", icon: Cookie },
      { href: "/licenses", label: "Licenses", icon: FileText }
    ]
  }
];

const socialLinks = [
  { href: "https://facebook.com/realestatepro", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com/realestatepro", icon: Twitter, label: "Twitter" },
  { href: "https://instagram.com/realestatepro", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com/company/realestatepro", icon: Linkedin, label: "LinkedIn" }
];

const contactInfo = {
  address: "123 Business Ave, Suite 100, New York, NY 10001",
  phone: "+1 (555) 123-4567",
  email: "hello@realestatepro.com"
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-3">
                RealEstatePro
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner in real estate. We help you find your dream home 
                and make smart property investments with confidence.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <p className="text-sm">{contactInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400 flex-shrink-0" />
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400 flex-shrink-0" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="flex items-center gap-2 text-sm hover:text-white transition-colors duration-200 group"
                      >
                        {Icon && (
                          <Icon 
                            size={16} 
                            className="text-gray-500 group-hover:text-blue-400 transition-colors duration-200" 
                          />
                        )}
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest market insights and property listings delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-500">
              &copy; {currentYear} RealEstatePro. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:block">Follow us:</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 pt-6 border-t border-gray-800">
            <Link href="/accessibility" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
              Accessibility
            </Link>
            <Link href="/sitemap" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
              Sitemap
            </Link>
            <Link href="/security" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
              Security
            </Link>
            <Link href="/compliance" className="text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}