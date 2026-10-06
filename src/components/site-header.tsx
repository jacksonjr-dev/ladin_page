import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Brand } from "@/components/brand";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/contact";
import { navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" aria-label="JPGLabs — Início" onClick={close}>
          <Brand />
        </Link>
        <nav className="header-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link"
              activeProps={{ className: "nav-link is-active", "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild className="header-contact">
            <a href={contact.whatsappUrl} target="_blank" rel="noopener noreferrer">
              Vamos conversar
              <ArrowUpRight aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className="mobile-link"
              activeProps={{ className: "mobile-link is-active", "aria-current": "page" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
