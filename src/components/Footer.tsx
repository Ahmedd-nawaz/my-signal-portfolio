import { socialLinks } from "@/lib/social";

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border px-md py-lg">
      <div className="container-app flex flex-col sm:flex-row items-center justify-between gap-md font-mono text-small text-dark-text-muted">
        <span>© 2026 Ahmed Nawaz. All rights reserved.</span>
        <div className="flex items-center gap-lg">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-dark-text transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}