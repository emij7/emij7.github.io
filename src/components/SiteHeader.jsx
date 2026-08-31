"use client";

import Image from "next/image";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import officialLogo from "../../assets/img/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { resumeLink, siteLinks } from "../content/portfolio";

export default function SiteHeader({ content, locale }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    ["home", content.home],
    ["experience", content.experience],
    ["projects", content.projects],
    ["about", content.about],
    ["contact", content.contact],
  ];

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("nav-open", isOpen);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("nav-open");
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Ignacio Emiliano Juarez — Home">
          <span className="brand-mark" aria-hidden="true">
            <Image src={officialLogo} alt="" priority sizes="44px" />
          </span>
          <span className="brand-copy">
            Ignacio
            <small>Software Engineer</small>
          </span>
        </a>

        <div className="desktop-navigation">
          <div className="nav-links">
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            {resumeLink.enabled ? (
              <a href={resumeLink.href} target="_blank" rel="noreferrer">
                {content.resume}
              </a>
            ) : null}
          </div>

          <div className="nav-actions">
            <LanguageSwitcher locale={locale} />
            <a
              className="icon-link"
              href={siteLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github aria-hidden="true" />
            </a>
            <a
              className="icon-link"
              href={siteLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin aria-hidden="true" />
            </a>
          </div>
        </div>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? content.close : content.menu}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <div
          id="mobile-navigation"
          className={`mobile-navigation ${isOpen ? "is-open" : ""}`}
          aria-hidden={!isOpen}
        >
          <div className="mobile-nav-links">
            {navigation.map(([id, label], index) => (
              <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>
                <span aria-hidden="true">0{index + 1}</span>
                {label}
              </a>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <LanguageSwitcher locale={locale} />
            <a href={siteLinks.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={siteLinks.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
