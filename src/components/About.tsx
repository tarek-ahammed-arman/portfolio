import { Shield, Code, BookOpen } from "lucide-react";

// About section component displaying bio and feature highlights
const About = () => {
  // Key professional highlights displayed as feature cards
  const features = [
    {
      icon: <Shield className="h-4 sm:h-5 w-4 sm:w-5 text-accent-foreground" />,
      title: "Cybersecurity Focus",
      description:
        "Building practical expertise in ethical hacking, network defense, and incident response through hands-on labs and continuous learning across diverse platforms and tools.",
    },
    {
      icon: <Code className="h-4 sm:h-5 w-4 sm:w-5 text-accent-foreground" />,
      title: "Technical Foundation",
      description:
        "Experienced in developing web applications with modern technologies. This foundation helps me analyze security flaws from both an attacker’s and developer’s perspective, strengthening my overall cybersecurity skill set.",
    },
    {
      icon: (
        <BookOpen className="h-4 sm:h-5 w-4 sm:w-5 text-accent-foreground" />
      ),
      title: "Research and Innovation",
      description:
        "Contributed to academic research on blockchain-based identity verification, focusing on privacy, trust, and secure digital identity systems for the future.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-8xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-up">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            A cybersecurity-driven technologist passionate about digital
            defense, applied learning, and secure innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Personal background and philosophy */}
          <div className="space-y-6 sm:space-y-8 animate-fade-up">
            <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              I'm a Computer Science and Engineering graduate from the
              University of Liberal Arts Bangladesh, with a strong interest in
              cybersecurity, digital forensics, and emerging security
              technologies.
            </p>
            <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              I actively engage in hands-on cybersecurity labs and simulations
              that sharpen my technical skills across both offensive and
              defensive domains. My technical background in programming and web
              development helps me understand systems from the inside out — an
              essential advantage in identifying and mitigating security
              threats.
            </p>
            <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed">
              I’m continuously expanding my expertise, exploring areas like
              threat analysis, automation, and secure system design — aiming to
              contribute to safer and more resilient digital infrastructures.
            </p>
          </div>

          {/* Highlighted feature cards */}
          <div className="grid gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all border border-border p-6 sm:p-8 group flex flex-col animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card header: icon + title */}
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-2 bg-gradient-accent rounded-xl inline-flex items-center justify-center group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>

                {/* Card description */}
                <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
