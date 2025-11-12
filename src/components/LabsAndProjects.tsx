import { useState } from "react";
import {
  Shield,
  ExternalLink,
  Code2,
  ShoppingCart,
  Layers,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ItemType = "lab" | "project";

interface Item {
  type: ItemType;
  title: string;
  description: string;
  image: string;
  platform?: string;
  keyHighlights?: string[];
  skillsLearned?: string[];
  toolsUsed?: string[];
  features?: string[];
  technologies?: string[];
  labLink?: string;
  writeUpLink?: string;
  liveDemo?: string;
  sourceCode?: string;
  icon?: JSX.Element;
}

const items: Item[] = [
  {
    type: "lab",
    title: "Cyber Security 101 Learning Path",
    description:
      "A beginner path covering networking, Linux, Windows, web security, and cryptography.",
    platform: "TryHackMe",
    keyHighlights: [
      "Linux & Windows fundamentals",
      "Web and network security",
      "Cryptography and exploitation basics",
      "SIEM, SOC & incident response",
    ],
    skillsLearned: [
      "Networking and system fundamentals",
      "Linux and Windows administration",
      "Web security and exploitation",
      "Incident response and forensics",
      "Cryptography and secure communication",
    ],
    toolsUsed: ["Nmap", "Wireshark", "Burp Suite", "Metasploit"],
    labLink: "https://tryhackme.com/path/outline/cybersecurity101",
    writeUpLink: "https://medium.com/@yourusername/cybersecurity101",
    image: "/1.png",
    icon: <Shield className="h-5 w-5 text-accent-foreground" />,
  },
  {
    type: "project",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution built with modern web technologies.",
    features: [
      "User authentication & authorization",
      "Product catalog management",
      "Shopping cart & checkout",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT",
      "REST API",
    ],
    liveDemo: "",
    sourceCode:
      "https://github.com/tarek-ahammed-arman/tarek-ahammed-arman-portfolio",
    icon: <ShoppingCart className="h-5 w-5 text-accent-foreground" />,
    image: "/1.png",
  },
  {
    type: "project",
    title: "Personal Portfolio Website",
    description:
      "Responsive personal portfolio website showcasing projects, research, and skills.",
    features: [
      "Interactive portfolio sections: About, Expertise, Education & Research, Labs & Projects, Contact",
      "Responsive design with smooth scrolling and animations",
      "Integrated contact form using email service",
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "EmailJs"],
    liveDemo: "https://tarekahammedarman.com/",
    sourceCode: "https://github.com/tarek-ahammed-arman/portfolio",
    icon: <Layers className="h-5 w-5 text-accent-foreground" />,
    image: "/1.png",
  },
];

const LabsAndProjects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const toggleExpand = (index: number) =>
    setExpandedIndex(expandedIndex === index ? null : index);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, items.length));
  };

  const handleViewLess = () => {
    setVisibleCount(6);
    const section = document.getElementById("labs-projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
  id="labs-projects"
  className="py-24 px-4 sm:px-6 lg:px-12 bg-background"
>
  <div className="max-w-8xl mx-auto">
    {/* SECTION HEADER */}
    <div className="text-center mb-16 animate-fade-up">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
        Labs & Projects
      </h2>
      <div className="w-20 sm:w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
        Browse hands-on labs and projects. Click "View More" to expand and
        explore my practical experience in cybersecurity and development.
      </p>
    </div>

    {/* GRID OF CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {items.slice(0, visibleCount).map((item, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl shadow-card hover:shadow-hover transition-all border border-border overflow-hidden group flex flex-col h-full animate-fade-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 sm:h-72 lg:h-64 object-cover"
          />

          <div className="p-6 sm:p-8 flex flex-col flex-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <div className="p-3 bg-gradient-accent rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg sm:text-lg md:text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.type === "lab" && item.platform && (
                  <span className="text-accent font-semibold text-xs sm:text-xs">
                    {item.platform}
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 leading-relaxed">
              {item.description}
            </p>

            {expandedIndex === index && (
              <div className="mb-4 space-y-4">
                {item.type === "lab" && item.keyHighlights && (
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {item.keyHighlights.map((kh, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          {kh}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.type === "lab" && item.skillsLearned && (
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-2">
                      Skills Learned:
                    </h4>
                    <ul className="space-y-1">
                      {item.skillsLearned.map((skill, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm md:text-sm lg:text-base leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.type === "lab" && item.toolsUsed && (
                  <div>
                    <h4 className=" text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-2">
                      Tools Used:
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {item.toolsUsed.map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-accent text-xs sm:text-xs md:text-sm lg:text-base leading-relaxed"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.type === "project" && item.features && (
                  <div>
                    <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {item.features.map((f, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm md:text-sm lg:text-base  leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.type === "project" && item.technologies && (
                  <div>
                    <h4 className=" text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-accent text-xs sm:text-sm md:text-sm lg:text-base  leading-relaxed"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 sm:gap-3 mt-4">
                  {item.type === "lab" && item.labLink && (
                    <a
                      href={item.labLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="flex items-center gap-2 text-xs sm:text-xs"
                      >
                        <ExternalLink className="h-2 w-2" /> View Lab
                      </Button>
                    </a>
                  )}
                  {item.type === "lab" && item.writeUpLink && (
                    <a
                      href={item.writeUpLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs sm:text-xs"
                      >
                        <Code2 className="h-2 w-2" /> Read Write-up
                      </Button>
                    </a>
                  )}
                  {item.type === "project" && item.liveDemo && (
                    <a
                      href={item.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="default"
                        size="sm"
                        className="flex items-center gap-2 text-xs sm:text-xs"
                      >
                        <ExternalLink className="h-2 w-2" /> View Live Demo
                      </Button>
                    </a>
                  )}
                  {item.type === "project" && item.sourceCode && (
                    <a
                      href={item.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 text-xs sm:text-xs"
                      >
                        <Code2 className="h-2 w-2" /> View Source Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleExpand(index)}
              className="mt-auto flex items-center gap-2 text-xs sm:text-xs"
            >
              <ChevronDown
                className={`h-2 w-2 transition-transform ${
                  expandedIndex === index ? "rotate-180" : ""
                }`}
              />
              {expandedIndex === index ? "Show Less" : "View More"}
            </Button>
          </div>
        </div>
      ))}
    </div>

    {items.length > 6 && (
      <div className="mt-8 flex justify-center gap-4 animate-fade-up">
        {visibleCount < items.length && (
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-2 text-xs sm:text-xs"
            onClick={handleViewMore}
          >
            <ChevronDown className="h-2 w-2" /> Show More
          </Button>
        )}
        {visibleCount > 6 && (
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 text-xs sm:text-xs"
            onClick={handleViewLess}
          >
            <ChevronDown className="h-2 w-2 rotate-180" /> Show Less
          </Button>
        )}
      </div>
    )}
  </div>
</section>

  );
};

export default LabsAndProjects;
