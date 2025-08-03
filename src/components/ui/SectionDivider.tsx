import { Section } from "@/components/ui/section";

export function SectionDivider() {
  return (
    <Section className="py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-1 rounded-full section-divider-gradient" />
      </div>
    </Section>
  );
}