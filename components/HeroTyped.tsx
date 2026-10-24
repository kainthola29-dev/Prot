"use client";

import React, { useState, useEffect } from "react";
import { profileData } from "@/data/portfolioData";

export function HeroTyped() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = profileData.typedRoles[wordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        // Pause at full word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        // Move to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % profileData.typedRoles.length);
      } else {
        setText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="text-gray-700 dark:text-gray-300 font-semibold tracking-tight">
      {text}
      <span className="inline-block w-0.5 h-6 ml-1 bg-primary-500 animate-pulse align-middle" />
    </span>
  );
}
