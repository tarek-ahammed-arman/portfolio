"use client";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/profile.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center px-6 pt-28 sm:pt-32 pb-12 bg-gradient-hero relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          {/* Profile Image */}
          <div className="relative animate-fade-in flex justify-center lg:justify-start lg:pl-16 mb-10 lg:mb-0">
            <div className="relative w-52 sm:w-64 md:w-72 lg:w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="relative aspect-square rounded-full overflow-hidden shadow-elegant border-4 border-primary-foreground/10">
                <img
                  src={heroImage}
                  alt="Cybersecurity Enthusiast"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
              </div>
              <div className="absolute -z-10 inset-0 bg-accent/30 rounded-full blur-3xl scale-85 sm:scale-90 md:scale-95"></div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl scale-90 sm:scale-95 md:scale-100"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-xs sm:text-sm font-semibold mb-2 backdrop-blur-sm border border-accent/20">
              Cybersecurity | Research | Innovation
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-2 leading-tight tracking-tight">
              Tarek Ahammed <span className="text-accent">Arman</span>
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-primary-foreground/90 font-medium mb-2">
              Aspiring Cybersecurity Professional | CSE Graduate | Research Contributor
            </p>

            <p className="text-sm sm:text-base md:text-base text-primary-foreground/70 leading-relaxed max-w-full lg:max-w-none mb-6">
              Exploring cybersecurity through hands-on labs, research, and practical security solutions. Actively learning offensive and defensive techniques to build real-world expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              <Button
                size="default"
                variant="secondary"
                onClick={() => scrollToSection("contact")}
                className="group shadow-lg hover:shadow-xl transition-all text-xs sm:text-sm"
              >
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                Get in Touch
              </Button>
              <Button
                size="default"
                variant="outline"
                onClick={() => scrollToSection("labs-projects")}
                className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-accent transition-all text-xs sm:text-sm"
              >
                Explore Labs
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 sm:gap-7 justify-center lg:justify-start pb-6">
              <a
                href="https://github.com/tarek-ahammed-arman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-all hover:scale-110 transform"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tarek-ahammed-arman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-all hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a
                href="mailto:tarek.ahammed.arman@gmail.com"
                className="text-primary-foreground/70 hover:text-accent transition-all hover:scale-110 transform"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
