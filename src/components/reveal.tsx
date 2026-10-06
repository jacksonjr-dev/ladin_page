import { motion, useMotionValue, useReducedMotion, useScroll, useSpring } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

const ease = [0.2, 0.7, 0.2, 1] as const;

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

/** Fades a block up when it scrolls into view, once. */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </motion.div>
  );
}

/** A list whose items rise in one after the other when it scrolls into view. */
export function RevealList({ className, children }: { className?: string; children: ReactNode }) {
  const Tag = motion.ul;
  return (
    <Tag
      className={className}
      variants={listVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({
  className,
  children,
  lift = true,
}: {
  className?: string;
  children: ReactNode;
  lift?: boolean;
}) {
  return (
    <motion.li
      className={className}
      variants={itemVariants}
      {...(lift
        ? { whileHover: { y: -4 }, transition: { type: "spring", stiffness: 300, damping: 22 } }
        : {})}
    >
      {children}
    </motion.li>
  );
}

/** Thin progress bar showing how far down the page the reader is. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

/** Nudges its content slightly toward the pointer, then springs back. */
export function Magnetic({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove: ComponentProps<typeof motion.span>["onPointerMove"] = (event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.2);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      className="magnetic"
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.span>
  );
}
