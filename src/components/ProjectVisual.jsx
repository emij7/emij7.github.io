import { Check, Database, FileText, Globe2, Server, Smartphone } from "lucide-react";

const ecosystemIcons = [Globe2, FileText, Server, Smartphone];

export default function ProjectVisual({ labels, variant }) {
  if (variant === "ecosystem") {
    return (
      <div className="project-visual ecosystem-visual" aria-hidden="true">
        <div className="system-orbit" />
        <div className="system-core">
          <Globe2 />
          <small>DIGITAL PLATFORM</small>
        </div>
        {labels.map((label, index) => {
          const Icon = ecosystemIcons[index];
          return (
            <div className={`system-node system-node-${index + 1}`} key={label}>
              <Icon />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === "workflow") {
    return (
      <div className="project-visual workflow-visual" aria-hidden="true">
        <div className="form-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
          </div>
          <div className="flow-line" />
          <div className="flow-steps">
            {labels.map((label, index) => (
              <div className="flow-step" key={label}>
                <span>{index < labels.length - 1 ? index + 1 : <Check />}</span>
                <small>{label}</small>
              </div>
            ))}
          </div>
          <div className="form-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual website-visual" aria-hidden="true">
      <div className="browser-window">
        <div className="window-bar">
          <i />
          <i />
          <i />
        </div>
        <div className="website-layout">
          <div className="website-hero">
            <Globe2 />
          </div>
          <div className="website-cards">
            <span><FileText /></span>
            <span><Database /></span>
            <span><Server /></span>
          </div>
        </div>
      </div>
      <div className="visual-labels">
        {labels.map((label) => <span key={label}>{label}</span>)}
      </div>
    </div>
  );
}
