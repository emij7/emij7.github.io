import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Bot,
  Briefcase,
  Check,
  Code2,
  Database,
  Github,
  GitBranch,
  Globe2,
  Layers3,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import aboutBackground from "../../public/background/about-background.jpg";
import homeBackground from "../../public/background/home-background-bt.png";
import projectsBackground from "../../public/background/projects-background.png";
import { primaryStack, siteLinks, stackGroups } from "../content/portfolio";
import HeroVisual from "./HeroVisual";
import ProjectVisual from "./ProjectVisual";
import RainBackground from "./RainBackground";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SectionModel from "./SectionModel";
import SiteHeader from "./SiteHeader";

const groupIcons = {
  frontend: Code2,
  backend: Server,
  data: Database,
  mobile: Smartphone,
  tools: GitBranch,
};

function TechList({ items, core = false }) {
  return (
    <div className={`tech-list ${core ? "tech-list-core" : ""}`}>
      {items.map((item) => (
        <span key={item} className={primaryStack.includes(item) ? "is-primary" : ""}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function PortfolioPage({ content }) {
  const { locale } = content;

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        {locale === "es" ? "Saltar al contenido" : "Skip to content"}
      </a>

      <SiteHeader content={content.nav} locale={locale} />
      <RainBackground />

      <main id="main-content" lang={locale}>
        <section id="home" className="hero-section" aria-labelledby="hero-title">
          <Image
            className="hero-background"
            src={homeBackground}
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-inner">
            <Reveal className="hero-copy" variant="left">
              <p className="eyebrow">
                <span aria-hidden="true" />
                {content.hero.eyebrow}
              </p>
              <h1 id="hero-title">{content.hero.name}</h1>
              <p className="hero-roles">
                {content.hero.roles.map((role) => (
                  <span key={role}>{role}</span>
                ))}
              </p>
              <p className="hero-description">{content.hero.description}</p>

              <TechList items={primaryStack} core />

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {content.hero.projectsCta}
                  <ArrowDown aria-hidden="true" />
                </a>
                <a
                  className="button button-secondary"
                  href={siteLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a className="text-link" href="#contact">
                  {content.hero.contactCta}
                </a>
              </div>
            </Reveal>

            <Reveal className="hero-visual-column" delay={0.12} variant="scale">
              <HeroVisual
                signature={content.hero.signature}
                scope={content.hero.scope}
                navigation={content.nav}
              />
            </Reveal>
          </div>

          <a className="scroll-cue" href="#experience" aria-label={content.experience.eyebrow}>
            <span>{content.experience.eyebrow}</span>
            <ArrowDown aria-hidden="true" />
          </a>
        </section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-title">
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                eyebrow={content.experience.eyebrow}
                title={content.experience.title}
                intro={content.experience.intro}
              />
            </Reveal>

            <div className="experience-timeline">
              {content.experience.items.map((item, index) => (
                <Reveal key={`${item.company}-${item.period}`} delay={Math.min(index * 0.05, 0.15)} variant="rise">
                  <article
                    className={`experience-item ${item.featured ? "is-featured" : ""} ${
                      item.compact ? "is-compact" : ""
                    }`}
                  >
                    <div className="experience-period">
                      <span>{item.period}</span>
                      {item.featured ? <small>{content.experience.current}</small> : null}
                    </div>
                    <div className="timeline-marker" aria-hidden="true">
                      <i />
                    </div>
                    <div className="experience-content">
                      <div className="experience-title-row">
                        <div>
                          <h3>{item.role}</h3>
                          <p>{item.company}</p>
                        </div>
                        {item.featured ? <Briefcase aria-hidden="true" /> : null}
                      </div>
                      <p className="experience-summary">{item.summary}</p>
                      {item.points ? (
                        <ul>
                          {item.points.map((point) => (
                            <li key={point}>
                              <Check aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <Image
            className="projects-background"
            src={projectsBackground}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
          />
          <SectionModel type="batman" />
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                eyebrow={content.projects.eyebrow}
                title={content.projects.title}
                intro={content.projects.intro}
              />
            </Reveal>

            <div className="featured-projects">
              {content.projects.featured.map((project, index) => (
                <Reveal key={project.id} delay={Math.min(index * 0.06, 0.12)} variant="rise">
                  <article className={`project-card ${project.prominent ? "is-prominent" : ""}`}>
                    <div className="project-copy">
                      <div className="project-meta">
                        <span>{project.type}</span>
                        <span className="production-status">
                          <i aria-hidden="true" />
                          {content.projects.production}
                        </span>
                      </div>
                      <h3>{project.name}</h3>
                      <p className="project-description">{project.description}</p>
                      <ul className="project-details">
                        {project.details.map((detail) => (
                          <li key={detail}>
                            <Check aria-hidden="true" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <TechList items={project.stack} />
                      <div className="project-links">
                        <a href={project.url} target="_blank" rel="noreferrer">
                          {content.projects.visit}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                        <span>
                          <ShieldCheck aria-hidden="true" />
                          {project.codePrivacy === "source"
                            ? content.projects.privateSourceCode
                            : content.projects.privateCompanyCode}
                        </span>
                      </div>
                    </div>
                    <ProjectVisual labels={project.visual} variant={project.variant} />
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="private-work-heading">
              <div>
                <p className="eyebrow">
                  <span aria-hidden="true" />
                  {content.projects.privateTitle}
                </p>
                <h3>{content.projects.privateTitle}</h3>
              </div>
              <p>{content.projects.privateIntro}</p>
            </Reveal>

            <div className="private-project-grid">
              {content.projects.privateItems.map((project, index) => (
                <Reveal key={project.name} delay={Math.min(index * 0.05, 0.1)}>
                  <article className="private-project-card">
                    <div className="private-project-icon" aria-hidden="true">
                      {index === 0 ? <Layers3 /> : index === 1 ? <Blocks /> : <Globe2 />}
                    </div>
                    <p className="confidential-label">
                      <ShieldCheck aria-hidden="true" />
                      {content.projects.privateCompanyCode}
                    </p>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <TechList items={project.stack} />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="section stack-section" aria-labelledby="stack-title">
          <div className="section-inner">
            <Reveal>
              <SectionHeading
                eyebrow={content.stack.eyebrow}
                title={content.stack.title}
                intro={content.stack.intro}
              />
            </Reveal>

            <Reveal className="core-stack-panel">
              <div>
                <span className="core-label">{content.stack.core}</span>
                <TechList items={primaryStack} core />
              </div>
              <Code2 aria-hidden="true" />
            </Reveal>

            <div className="stack-grid">
              {stackGroups.map((group, index) => {
                const Icon = groupIcons[group.id];
                return (
                  <Reveal key={group.id} delay={Math.min(index * 0.04, 0.12)}>
                    <article className="stack-card">
                      <div className="stack-card-title">
                        <Icon aria-hidden="true" />
                        <h3>{group.title}</h3>
                      </div>
                      <TechList items={group.items} />
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <Image
            className="about-background"
            src={aboutBackground}
            alt=""
            fill
            sizes="100vw"
            aria-hidden="true"
          />
          <SectionModel type="mask" />
          <div className="section-inner about-inner">
            <Reveal className="about-copy" variant="left">
              <SectionHeading eyebrow={content.about.eyebrow} title={content.about.title} />
              <div className="about-paragraphs">
                {content.about.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="ai-note">
                <Bot aria-hidden="true" />
                <span>{content.about.aiNote}</span>
              </div>
            </Reveal>

            <Reveal className="ownership-card" delay={0.1}>
              <div className="ownership-card-header">
                <span>{content.about.ownership}</span>
                <ArrowUpRight aria-hidden="true" />
              </div>
              <ol>
                {content.about.cycle.map((step, index) => (
                  <li key={step}>
                    <span>0{index + 1}</span>
                    <p>{step}</p>
                    {index < content.about.cycle.length - 1 ? <i aria-hidden="true" /> : null}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <div className="section-inner">
            <Reveal className="contact-heading">
              <SectionHeading eyebrow={content.contact.eyebrow} title={content.contact.title} />
              <p>{content.contact.text}</p>
            </Reveal>

            <div className="contact-grid">
              <Reveal>
                <a className="contact-card contact-card-primary" href={`mailto:${siteLinks.email}`}>
                  <Mail aria-hidden="true" />
                  <span>
                    <small>{content.contact.email}</small>
                    {siteLinks.email}
                  </span>
                  <strong>
                    {content.contact.sendEmail}
                    <ArrowUpRight aria-hidden="true" />
                  </strong>
                </a>
              </Reveal>
              <Reveal delay={0.05}>
                <a className="contact-card" href={siteLinks.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin aria-hidden="true" />
                  <span>
                    <small>{content.contact.linkedin}</small>
                    Ignacio Emiliano Juarez
                  </span>
                  <strong>
                    {content.contact.connect}
                    <ArrowUpRight aria-hidden="true" />
                  </strong>
                </a>
              </Reveal>
              <Reveal delay={0.1}>
                <a className="contact-card" href={siteLinks.github} target="_blank" rel="noreferrer">
                  <Github aria-hidden="true" />
                  <span>
                    <small>{content.contact.github}</small>
                    @emij7
                  </span>
                  <strong>
                    {content.contact.viewCode}
                    <ArrowUpRight aria-hidden="true" />
                  </strong>
                </a>
              </Reveal>
            </div>

            <footer className="site-footer">
              <p>{content.footer}</p>
              <a href="#home">
                {locale === "es" ? "Volver arriba" : "Back to top"}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
