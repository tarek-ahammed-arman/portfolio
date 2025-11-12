import {
  GraduationCap,
  Calendar,
  FileText,
  ExternalLink,
  Award,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EducationAndResearch = () => {
  const educationList = [
    {
      degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
      institution: "University of Liberal Arts Bangladesh",
      graduation: "2022",
      highlights: [
        "Built a comprehensive foundation in computer science, covering data structures and algorithms, operating systems (Linux), computer networks, software engineering, databases, computer architecture, microprocessors, artificial intelligence, theory of computation, and information security principles.",
        "Conducted academic research on blockchain-based identity verification focusing on privacy and secure authentication",
        "Built and deployed secure full-stack web applications integrating modern technologies like React, Node.js, and cloud platforms",
        "Applied secure coding and system design practices in academic and personal projects",
        "Engaged in technical clubs, cybersecurity events, and coding challenges to sharpen analytical and problem-solving skills",
      ],
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Chatkhil P.G Mahbub Govt. College",
      graduation: "2018",
      highlights: [
        "Science stream with a focus on Physics, Mathematics, Chemistry, and Computer Studies",
      ],
    },
  ];

  const researchPapers = [
    {
      title: "A Review of Blockchain Approaches for KYC",
      publisher: "IEEE",
      description:
        "This study explores how blockchain can transform digital identity verification systems by enabling secure, privacy-preserving Know Your Customer (KYC) processes. It evaluates different blockchain models, identifies key security and scalability challenges, and suggests directions for building trustworthy decentralized identity frameworks.",
      highlights: [
        "Compared multiple blockchain models for digital identity and KYC applications",
        "Assessed privacy and data integrity mechanisms in distributed systems",
        "Outlined potential directions for scalable, privacy-first KYC solutions",
      ],
      tags: ["Blockchain", "Digital Identity", "KYC", "Cybersecurity"],
      url: "https://doi.org/10.1109/ACCESS.2023.3328536",
    },
  ];

  return (
    <section
      id="education-research"
      className="py-24 px-4 sm:px-6 lg:px-12 bg-background w-full"
    >
      <div className="max-w-8xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Education & Research
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            Academic foundation and research experience shaping my technical
            expertise in computer science, cybersecurity, and emerging
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Education Card */}
          <Card className="border-border bg-card hover:shadow-hover transition-all p-6 sm:p-8 rounded-2xl animate-fade-up">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-accent rounded-xl inline-flex items-center justify-center">
                  <GraduationCap className="h-6 sm:h-7 w-6 sm:w-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl sm:text-2xl md:text-2xl font-semibold text-foreground">
                  Education
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-6">
              {educationList.map((edu, idx) => (
                <div key={idx} className="pl-4 border-l-2 border-accent/50">
                  <h3 className="text-lg sm:text-l md:text-l font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-accent text-sm sm:text-base md:text-base font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground mb-3 text-sm sm:text-base md:text-base">
                    <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
                    <span>Graduated {edu.graduation}</span>
                  </div>

                  <div className="space-y-2 mb-2">
                    {edu.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed"
                      >
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Research Publication Cards */}
          <Card className="border-border bg-card hover:shadow-hover transition-all p-6 sm:p-8 rounded-2xl animate-fade-up">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-accent rounded-xl inline-flex items-center justify-center">
                  <FileText className="h-6 sm:h-7 w-6 sm:w-7 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl sm:text-2xl md:text-2xl font-semibold text-foreground">
                  Research Publication
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0 space-y-6">
              {researchPapers.map((paper, idx) => (
                <div
                  key={idx}
                  className="bg-card/30 rounded-2xl border border-border p-6 sm:p-8 flex flex-col justify-between animate-fade-up"
                >
                  <div className="flex flex-col flex-1">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="flex-shrink-0 mt-1 sm:mt-0">
                        <BookOpen className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-lg font-semibold text-foreground mb-1">
                        {paper.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-accent font-semibold mb-3 sm:mb-4 text-xs sm:text-sm md:text-sm">
                      <Award className="h-3 sm:h-4 w-3 sm:w-4" />
                      <span>Published in {paper.publisher}</span>
                    </div>

                    <p className="text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
                      {paper.description}
                    </p>

                    <div className="space-y-2 mb-3 sm:mb-4">
                      {paper.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm sm:text-sm md:text-sm lg:text-base text-muted-foreground leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {paper.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-accent text-sm sm:text-sm md:text-sm lg:text-base font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <a
                      href={paper.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-xs flex items-center gap-1"
                      >
                        <ExternalLink className="mr-1.5 h-2 w-2" />
                        View Publication
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationAndResearch;
