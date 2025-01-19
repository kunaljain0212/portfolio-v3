import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedSection({
  children,
  className = "",
}: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
