"use client";

import { ReactNode } from "react";

type UnderlineProps = {
  children: ReactNode;
};

export default function Underline({ children }: UnderlineProps) {
  return (
    <span className="relative inline-block">
      <span className="relative z-0">{children}</span>
   <img src="/underline.png" className="mt-[-18px]" />
    </span>
  );
}
