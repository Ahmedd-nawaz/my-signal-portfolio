import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const skillGroups = [
  {
    label: "Product & Design",
    skills: ["Product Design", "UI/UX Design", "Material Design 3", "Solo Product Development"],
  },
  {
    label: "AI & Conversation",
    skills: ["Conversational AI", "Prompt Engineering", "WhatsApp Business API", "Generative AI"],
  },
  {
    label: "Mobile & Backend",
    skills: ["Flutter & Dart", "Riverpod", "Supabase", "Postgres", "Auth", "RLS"],
  },
];

export default function Skills() {
  return (
    <section id="experiments" className="bg-dark-bg py-4xl px-md">
      <div className="container-app flex flex-col gap-2xl">
        <div className="flex flex-col gap-md">
          <div className="flex items-center gap-sm font-mono text-mono-label uppercase tracking-wide text-dark-text-muted">
            <span className="text-amber">|</span> Skills
          </div>
          <h2 className="text-h2-mobile lg:text-h2 font-semibold text-dark-text">
            Building the stack for end-to-end products.
          </h2>
        </div>

        <StaggerGroup className="flex flex-col gap-xl">
          {skillGroups.map((group) => (
            <StaggerItem key={group.label} className="flex flex-col gap-md">
              <span className="font-mono text-small uppercase tracking-wide text-dark-text-muted">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-sm">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-dark-border bg-dark-surface px-lg py-sm text-body text-dark-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}