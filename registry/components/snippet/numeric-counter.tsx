"use client";

import { motion, useSpring, useTransform, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

interface CounterProps {
  value: number;
  className?: string;
}

export default function NumericCounter({ value, className }: CounterProps): React.JSX.Element {
  const [previousValue, setPreviousValue] = useState(value);
  const [change, setChange] = useState(0); 
  const [isIncrease, setIsIncrease] = useState(true); 

  const spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current as number).toLocaleString(),
  );

  useEffect(() => {
    const difference = value - previousValue;
    if (difference !== 0) {
      setChange(Math.abs(difference)); 
      setIsIncrease(difference > 0); 
      setTimeout(() => setChange(0), 1000); 
    }
    setPreviousValue(value);
    spring.set(value);
  }, [spring, value, previousValue]);

  return (
    <div className={className}>
      <motion.span>{display}</motion.span>
      <AnimatePresence>
        {change > 0 && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-sm absolute -top-10 translate-x-1/2 ${isIncrease ? "text-gray-500" : "text-gray-500"
              }`}
          >
            {isIncrease ? "+" : "-"}{change.toLocaleString()}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}