"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const MotionDiv = (props: HTMLMotionProps<"div">) => {
    return <motion.div {...props} />;
};
