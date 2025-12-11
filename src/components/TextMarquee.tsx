interface TextMarqueeProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  highlighted?: boolean;
}

const TextMarquee = ({
  text,
  speed = 20,
  direction = "left",
  pauseOnHover = true,
  className = "",
  highlighted = true,
}: TextMarqueeProps) => {
  return (
    <div
      className={`overflow-hidden ${
        highlighted
          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
          : "bg-secondary"
      } border-y shadow-sm ${className}`}
    >
      <div
        className={`flex items-center py-4 animate-marquee whitespace-nowrap ${
          pauseOnHover ? "hover:pause" : ""
        }`}
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {/* First instance of text */}
        <span
          className={`text-lg md:text-xl font-semibold px-8 ${
            highlighted ? "text-white" : "text-foreground"
          }`}
        >
          {text}
        </span>

        {/* Separator */}
        <span
          className={`mx-4 ${
            highlighted ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          •
        </span>

        {/* Second instance for seamless loop */}
        <span
          className={`text-lg md:text-xl font-semibold px-8 ${
            highlighted ? "text-white" : "text-foreground"
          }`}
        >
          {text}
        </span>

        {/* Separator */}
        <span
          className={`mx-4 ${
            highlighted ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          •
        </span>

        {/* Third instance for extra smooth loop */}
        <span
          className={`text-lg md:text-xl font-semibold px-8 ${
            highlighted ? "text-white" : "text-foreground"
          }`}
        >
          {text}
        </span>

        {/* Separator */}
        <span
          className={`mx-4 ${
            highlighted ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          •
        </span>

        {/* Fourth instance for extra smooth loop */}
        <span
          className={`text-lg md:text-xl font-semibold px-8 ${
            highlighted ? "text-white" : "text-foreground"
          }`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default TextMarquee;
