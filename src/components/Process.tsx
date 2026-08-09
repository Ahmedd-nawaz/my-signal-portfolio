import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const logEntries = [
  {
    timestamp: "2024.11.20 14:32:01",
    message: "Refining the Signal node physics engine for better cursor reactivity.",
    active: true,
  },
  {
    timestamp: "2024.11.18 09:15:22",
    message: "Integrated Gemini Pro for advanced receipt parsing logic.",
  },
  {
    timestamp: "2024.11.12 18:40:05",
    message: "Shipped v0.8 of the WhatsApp Receptionist dashboard.",
  },
  {
    timestamp: "2024.11.05 11:22:45",
    message: "Migrating family expense tracking schemas to Supabase.",
  },
];

export default function Process() {
  return (
    <section id="signal" className="bg-dark-bg py-4xl px-md">
      <div className="container-app flex flex-col gap-lg font-mono">
        <div className="flex items-center justify-between border-b border-dark-border pb-md">
          <h2 className="text-h2-mobile lg:text-h2 font-bold text-dark-text tracking-tight">
            PROCESS_LOG
          </h2>
          <div className="flex items-center gap-xs text-small uppercase tracking-wide text-amber">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" />
            Status: Active_Stream
          </div>
        </div>

        <StaggerGroup className="flex flex-col gap-lg pl-lg border-l border-dark-border">
          {logEntries.map((entry) => (
            <StaggerItem key={entry.timestamp} className="flex flex-col gap-xs">
              <span className="text-small">
                <span className="text-dark-text-muted">
                  {entry.active ? "▸" : "+"}
                </span>{" "}
                <span className="text-amber">[{entry.timestamp}]</span>{" "}
                <span className="text-dark-text-muted">&gt;</span>
              </span>

              {entry.active ? (
                <div className="rounded-md border border-dark-border bg-dark-surface p-md">
                  <p className="text-body text-dark-text">{entry.message}</p>
                </div>
              ) : (
                <p className="pl-md text-body text-dark-text-muted">
                  {entry.message}
                </p>
              )}
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}