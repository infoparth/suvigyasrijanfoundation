import PhaseChip from "./PhaseChip";

interface HeroProps {
  phase: number;
  phaseLabel?: string;
  examDate: string;
}

const Hero = ({ phase, phaseLabel, examDate }: HeroProps) => {
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "Date TBA";
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img
              src="/Logo.png"
              alt="Suvigya Srijan Foundation"
              className="h-25 w-25"
            />
          </div>

          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Suvigya Srijan Foundation
          </h1> */}

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering women & children through education, safety, health,
            values & rights, fostering dignity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <PhaseChip phase={phase} label={phaseLabel} className="text-base" />
            <div className="flex items-center gap-2 text-foreground">
              <span className="font-semibold">Exam Date:</span>
              <span className="text-muted-foreground">
                {formatDate(examDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
