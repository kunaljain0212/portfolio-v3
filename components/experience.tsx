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
    title: "Software Development Engineer",
    company: "KoinX",
    period: "May 2024 - Ongoing",
    status: "Current",
    points: [
      "Managed and led the B2C team, overseeing task assignments, code reviews, and providing guidance to team members, resulting in the successful delivery of 40+ product features and more than 3 major projects.",
      "Led the development of an in-house design system with more than 30 components using React, Storybook, Tailwind CSS and Radix UI.",
      "Developed a robust fallback mechanism system to handle third-party API errors and ensure job completion using scheduled cron jobs.",
      "Engaged in product/design discussions, offering valuable insights to impact product development & user satisfaction helping scale the platform to 500K users.",
    ],
    link: "https://koinx.com",
  },
  {
    title: "Software Developer Intern",
    company: "Swiggy",
    period: "October 2023 - March 2024",
    points: [
      "Revamped Swiggy’s restaurant menu page UI, improving SEO and page ranking, driving a 10% boost in orders per day.",
      "Contributed to the internal design system and added support for 15 analytic events to help gain better user insights.",
      "Wrote E2E tests for restaurant menu pages to improve the coverage from 0% to ~65%.",
      "Spearheaded Campus Swiggy’d campaign to create a static page for replication with data of more than 25 colleges.",
    ],
    link: "https://swiggy.com",
  },
  {
    title: "Software Developer Intern",
    company: "KoinX",
    period: "July 2022 - October 2023",
    points: [
      "Reduced the application bundle size by around 87% to improve load time and overall performance of the platform.",
      "Improved reliability of the platform by integrating Sentry for frontend observability, alert tracking and resolutions.",
      "Wrote more than 20 end-to-end tests using Playwright for testing crucial user flows and ensuring correctness of the platform.",
    ],
    link: "https://koinx.com",
  },
  {
    title: "Backend Engineering Intern",
    company: "FamPay",
    period: "July 2022 - October 2022",
    points: [
      "Designed the system architecture for UPI Mandates, empowering the platform as users’ Payment Service Provider.",
      "Created 6 new endpoints across 2 microservices, integrating with JusPay Mandate Payer APIs for UPI AutoPay.",
      "Wrote rigorous unit and functional tests for all API endpoints to ensure robustness of the developed feature.",
    ],
    link: "https://www.famapp.in/",
  },
  {
    title: "Software Developer Intern",
    company: "Trell",
    period: "February 2022 - May 2022",
    points: [
      "Engineered Trell Cash, a reward-based gamification platform with more than 700K DAU, driving an 8% boost in user retention.",
      "Built a B2B advertiser dashboard, optimizing ad campaigns, minimizing human effort, and enhancing efficacy by 10%.",
    ],
    link: "https://www.linkedin.com/company/trell/",
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
