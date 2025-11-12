import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    title: "Email",
    icon: Mail,
    value: "tarek.ahammed.arman@gmail.com",
    href: "mailto:tarek.ahammed.arman@gmail.com",
  },
  {
    title: "LinkedIn",
    icon: Linkedin,
    value: "linkedin.com/in/tarek-ahammed-arman",
    href: "https://www.linkedin.com/in/tarek-ahammed-arman/",
  },
  {
    title: "GitHub",
    icon: Github,
    value: "github.com/tarek-ahammed-arman",
    href: "https://github.com/tarek-ahammed-arman",
  },
  { title: "Location", icon: MapPin, value: "Dhaka, Bangladesh", href: null },
];

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } catch {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base md:text-base lg:text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or
            cybersecurity projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-card rounded-2xl shadow-card border border-border p-4 sm:p-6 flex items-start gap-3 sm:gap-4 group hover:shadow-hover transition-all animate-fade-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="p-2 sm:p-3 bg-gradient-accent rounded-xl group-hover:scale-110 transition-transform">
                    <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base sm:text-lg md:text-base">
                      {info.title}
                    </h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base md:text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm sm:text-base md:text-sm">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-card border border-border p-6 sm:p-8 animate-fade-up">
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-5"
            >
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <Label
                    htmlFor={field}
                    className="text-foreground text-sm sm:text-base md:text-sm"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </Label>
                  <Input
                    id={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Your ${field}`}
                    {...register(field as keyof ContactFormData)}
                    className="mt-1.5 text-sm sm:text-base md:text-sm"
                  />
                  {errors[field as keyof ContactFormData] && (
                    <p className="text-destructive text-xs sm:text-sm mt-1">
                      {errors[field as keyof ContactFormData]?.message}
                    </p>
                  )}
                </div>
              ))}
              <div>
                <Label
                  htmlFor="message"
                  className="text-foreground text-sm sm:text-base md:text-sm"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  {...register("message")}
                  className="mt-1.5 text-sm sm:text-base md:text-sm"
                />
                {errors.message && (
                  <p className="text-destructive text-xs sm:text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full flex items-center justify-center gap-2 text-sm sm:text-base md:text-sm"
                disabled={isSubmitting}
              >
                <Mail className="h-4 sm:h-5 w-4 sm:w-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
