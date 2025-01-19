import { ExternalLink } from "lucide-react";
import * as motion from "motion/react-client";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  status?: string;
  points: string[];
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "KoinX",
    period: "June 2024 - Ongoing",
    status: "Current",
    points: [
      "Managed and led the frontend team at KoinX, overseeing task assignments, code reviews, and providing guidance to team members, resulting in the successful delivery of 30+ product features and more than 3 major projects.",
      "Devised optimal approaches, achieving 99.8% crash-free user sessions and a highly scalable & available system.",
      "Researched on frontend optimization techniques to achieve a remarkable 67% reduction in the application bundle size.",
      "Engaged in product/design discussions, offering valuable insights to impact product development & user satisfaction.",
    ],
    link: "https://koinx.com",
  },
  {
    title: "Software Engineering Intern",
    company: "Swiggy",
    period: "June 2024 - Ongoing",
    points: [
      "Worked on the migration of MWeb to UX4 which improved SEO significantly and increased the OPD (Orders Per Day) value by close to 10%.",
      "Spearheaded Campus Swiggy'd Campaign to create a JSON page layout that was re-used to make the campaign accessible across 25+ colleges.",
      "Wrote E2E tests for restaurant menu pages to improve the coverage from 0% to ~65%.",
      "Lead the migration of DWeb restaurant menu page UI from UX3 to UX4.",
    ],
    link: "https://swiggy.com",
  },
  {
    title: "Backend Engineering Intern",
    company: "FamPay",
    period: "June 2023 - Ongoing",
    points: [
      "Designed the system architecture for UPI Mandates, empowering the platform as users' Payment Service Provider.",
      "Developed 6+ endpoints across 2 microservices, integrating with JusPay Mandate Payer APIs for UPI AutoPay.",
    ],
    link: "https://fampay.in",
  },
  {
    title: "Software Engineer Intern",
    company: "Trell",
    period: "June 2024 - Ongoing",
    points: [
      "Worked on the migration of MWeb to UX4 which improved SEO significantly and increased the OPD value by close to 10%.",
      "Spearheaded Campus Swiggy'd Campaign to create a JSON page layout that was re-used to make the campaign accessible across 25+ colleges.",
      "Wrote E2E tests for restaurant menu pages to improve the coverage from 0% to ~65%.",
      "Lead the migration of DWeb restaurant menu page UI from UX3 to UX4.",
    ],
    link: "https://trell.com",
  },
];

export default function Experience() {
  return (
    <section className="py-12">
      <h2 className="text-lg text-muted-foreground mb-8">Experiences</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 border-l border-border"
          >
            <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-green-500" />
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-medium flex items-center gap-2">
                  {exp.company}, {exp.title}
                  {exp.status === "Current" && (
                    <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded-full">
                      {exp.status}
                    </span>
                  )}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </h3>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm">
              {exp.points.map((point, idx) => (
                <li key={idx} className="text-foreground">
                  • {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
