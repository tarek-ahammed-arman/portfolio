"use client";
import { useState } from "react";
import {
  Code2,
  Shield,
  Terminal,
  Award,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Expertise & Credentials section – showcases skills and verified certifications
const ExpertiseAndCredentials = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const toggleExpand = (index: number) =>
    setExpanded(expanded === index ? null : index);

  const handleViewMore = () => setVisibleCount((prev) => prev + 4);
  const handleViewLess = () => {
    setVisibleCount(4);
    const section = document.getElementById("expertise");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const skillCategories = [
    {
      title: "Cybersecurity & Offensive Security",
      icon: Shield,
      skills: [
        "Penetration Testing & Ethical Hacking",
        "Web Vulnerability Testing (XSS, SQL Injection)",
        "Incident Response & SIEM Tools",
        "Cybersecurity Automation with Python",
        "Kali Linux & Linux Security",
        "Cryptography",
      ],
    },
    {
      title: "Programming & Development",
      icon: Code2,
      skills: [
        "Python (for Cybersecurity & Automation)",
        "JavaScript / TypeScript",
        "React & Node.js / Express.js / REST APIs",
        "Secure Coding Practices",
      ],
    },
    {
      title: "Databases, Cloud & Tools",
      icon: Terminal,
      skills: [
        "SQL / MySQL / MongoDB",
        "Linux System Administration",
        "Virtualization & Cloud Computing",
      ],
    },
  ];

  const certifications = [
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Coursera",
      provider: "Google",
      description:
        "Comprehensive specialization covering foundational to intermediate cybersecurity concepts, including networking, risk management, incident response, and automation with Python.",
      subCourses: [
        "Foundations of Cybersecurity",
        "Play It Safe: Manage Security Risks",
        "Connect and Protect: Networks and Network Security",
        "Tools of the Trade: Linux and SQL",
        "Assets, Threats, and Vulnerabilities",
        "Sound the Alarm: Detection and Response",
        "Automate Cybersecurity Tasks with Python",
        "Prepare for Cybersecurity Jobs",
        "Accelerate Your Job Search with AI",
      ],
      url: "https://coursera.org/share/396c135c126dec1d7101000f7229a7a6",
    },
    {
      title: "Python for Cybersecurity Specialization",
      issuer: "Coursera",
      provider: "Infosec",
      description:
        "Hands-on Python specialization focused on offensive and defensive cybersecurity automation.",
      subCourses: [
        "Introduction to Python for Cybersecurity",
        "Execution, Persistence, and Evasion",
        "Credential Access and Lateral Movement",
        "Command-and-Control and Exfiltration",
        "Python for Active Defense",
      ],
      url: "https://coursera.org/share/1481a98727e6b6e0bc8eab39a56b291f",
    },
    {
      title: "Building the Ultimate Cybersecurity Lab and Cyber Range",
      issuer: "Coursera",
      provider: "Pearson",
      description:
        "Practical guide to designing and building a home cybersecurity lab for penetration testing and ethical hacking.",
      url: "https://coursera.org/share/26103f84b799723c5ec7f41c31b04454",
    },
    {
      title: "Cyber Security Career Launchpad 2026",
      issuer: "Ostad",
      provider: "Ostad",
      description:
        "Hands-on workshop covering cybersecurity fundamentals, penetration testing techniques, network and web attack simulations, and defensive strategies.",
      subCourses: [
        "Cybersecurity & Pentesting Fundamentals – Theory, Career & Roadmap",
        "Hands-On Pentesting – Network & Web Attack Simulation",
      ],
      url: "https://ostad.app/share/certificate/c34146-tarek-ahammed-arman",
    },
  ];

  return (
<section
  id="expertise"
  className="py-24 px-4 sm:px-6 lg:px-12 bg-background"
>
  <div className="max-w-8xl mx-auto">
    {/* Section header */}
    <div className="text-center mb-20 animate-fade-up">
      <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
        Expertise & Credentials
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
      <p className="text-sm sm:text-base md:text-sm lg:text-base text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
        A curated view of technical skills, hands-on experience, and
        verified certifications across cybersecurity, development, and
        applied research.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
      {/* Certifications list */}
      <div className="lg:col-span-2 animate-fade-up">
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
          Certifications
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.slice(0, visibleCount).map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all border border-border p-6 sm:p-8 flex flex-col justify-between animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="p-2 sm:p-2 bg-gradient-accent rounded-xl inline-flex items-center justify-center">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg sm:text-lg md:text-lg font-semibold text-foreground">
                    {cert.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <span className="text-accent font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
                    {cert.issuer}
                  </span>
                  {cert.provider && (
                    <span className="bg-muted text-muted-foreground text-xs sm:text-sm md:text-sm lg:text-base px-2 py-0.5 rounded-full">
                      Offered by {cert.provider}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>

                {cert.subCourses && (
                  <div className="mb-4">
                    {expanded === index && (
                      <div>
                        <h4 className="text-xs sm:text-sm md:text-sm lg:text-base font-semibold text-foreground mb-2">
                          Courses:
                        </h4>
                        <ol className="list-decimal list-inside text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground space-y-1 mb-3">
                          {cert.subCourses.map((course, i) => (
                            <li key={i}>{course}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpand(index)}
                      className="flex items-center gap-1 text-xs sm:text-sm"
                    >
                      <ChevronDown
                        className={`h-3 w-3 transition-transform ${
                          expanded === index ? "rotate-180" : ""
                        }`}
                      />
                      {expanded === index ? "Show Less" : "View Courses"}
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-4 text-center">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1 text-xs sm:text-sm"
                  >
                    <ExternalLink className="mr-1.5 h-3 w-3" />
                    View Certificate
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-4">
          {visibleCount < certifications.length && (
            <Button size="sm" className="text-xs sm:text-xs" onClick={handleViewMore}>
              View More
            </Button>
          )}
          {visibleCount > 4 && (
            <Button size="sm" variant="outline" className="text-xs sm:text-xs" onClick={handleViewLess}>
              View Less
            </Button>
          )}
        </div>
      </div>

      {/* Technical skills panel */}
      <div className="animate-fade-up">
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-6">
          Technical Skills
        </h3>
        <div className="bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8 space-y-6 w-full">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <div className="flex items-center gap-2 sm:gap-3 mb-3">
                  <div className="p-2 sm:p-2 bg-gradient-accent rounded-full inline-flex items-center justify-center">
                    <Icon className="h-3 sm:h-4 w-3 sm:w-4 text-accent-foreground" />
                  </div>
                  <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground">
                    {category.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed"
                    >
                      <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                      <p className="m-0">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default ExpertiseAndCredentials;
