"use client";

export const RollingLabel = function ({ children }) {
  return (
    <span className="pill-roll" data-label={children}>
      <span>{children}</span>
    </span>
  );
};
