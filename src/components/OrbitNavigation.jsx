"use client";

import { Briefcase, Code2, Github, Linkedin, Mail, UserRound } from "lucide-react";
import { siteLinks } from "../content/portfolio";

export default function OrbitNavigation({ labels }) {
  const items = [
    { label: labels.experience, href: "#experience", Icon: Briefcase },
    { label: labels.projects, href: "#projects", Icon: Code2 },
    { label: labels.about, href: "#about", Icon: UserRound },
    { label: "GitHub", href: siteLinks.github, Icon: Github, external: true },
    { label: "LinkedIn", href: siteLinks.linkedin, Icon: Linkedin, external: true },
    { label: labels.contact, href: "#contact", Icon: Mail },
  ];

  return (
    <nav className="orbit-navigation" aria-label="Visual shortcuts">
      <div className="orbit-track" aria-hidden="true" />
      <div className="orbit-items">
        {items.map(({ label, href, Icon, external }, index) => (
          <a
            key={label}
            className={`orbit-item orbit-item-${index + 1}`}
            href={href}
            aria-label={label}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            <span>
              <Icon aria-hidden="true" />
              <small>{label}</small>
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
