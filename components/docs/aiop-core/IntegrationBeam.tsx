"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/magicui/animated-beam";
import { forwardRef, useRef, type ReactNode } from "react";
import { Code } from "lucide-react";
import { SiPython } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import ArtifactoryLogo from "components/home/img/artifactory.png";
import NexusLogo from "components/home/img/nexus.webp";
import AiopLogo from "public/logo_180.png";

const Circle = forwardRef<
  HTMLDivElement,
  {
    className?: string;
    title?: string;
    children?: ReactNode;
  }
>(({ className, children, title }, ref) => {
  return (
    <div className={cn("z-10 flex flex-row items-center gap-4", className)}>
      {title && (
        <span className="w-[4.4rem] md:w-20 text-right text-sm md:text-base">
          {title}
        </span>
      )}
      <div
        ref={ref}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 bg-white dark:bg-slate-200 p-3 text-black"
      >
        {children}
      </div>
    </div>
  );
});

export function IntegrationBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inPythonRef = useRef<HTMLDivElement>(null);
  const inTypescriptRef = useRef<HTMLDivElement>(null);
  const inOpenAiRef = useRef<HTMLDivElement>(null);
  const inLangchainRef = useRef<HTMLDivElement>(null);
  const inApiRef = useRef<HTMLDivElement>(null);
  const langfuseNodeRef = useRef<HTMLDivElement>(null);
  const out1ref = useRef<HTMLDivElement>(null);
  const out2ref = useRef<HTMLDivElement>(null);
  const out3ref = useRef<HTMLDivElement>(null);

  return (
    <div
    className="relative flex w-full mx-auto max-w-3xl items-center justify-center overflow-hidden rounded border bg-background py-4 px-2 md:p-12"
    ref={containerRef}
    >
    <div className="flex h-full w-full flex-col items-stretch justify-between gap-2 md:gap-6">
        <div className="flex flex-row items-center justify-between">
        <Circle ref={inTypescriptRef} title="Artifactory">
            <img src={ArtifactoryLogo.src} alt="Logo"/>
        </Circle>
        <Circle ref={out1ref} className="hidden">
            <Code className="h-6 w-6" />
        </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
        <Circle ref={inOpenAiRef} title="Nexus">
            <img src={NexusLogo.src} alt="Logo"/>
        </Circle>
        <Circle ref={langfuseNodeRef} className="h-16 w-16">
            <img src={AiopLogo.src} alt="Logo" className="-translate-y-1"/>
        </Circle>
        <Circle ref={out2ref} className="hidden">
            <Code className="h-6 w-6" />
        </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
        <Circle ref={inLangchainRef} title="PDF">
            <FaFilePdf className="h-6 w-6" />
        </Circle>
        <Circle ref={out3ref} className="hidden">
            <Code className="h-6 w-6" />
        </Circle>
        </div>
    </div>

    <AnimatedBeam
        containerRef={containerRef}
        fromRef={inTypescriptRef}
        toRef={langfuseNodeRef}
        duration={3}
    />
    <AnimatedBeam
        containerRef={containerRef}
        fromRef={inLangchainRef}
        toRef={langfuseNodeRef}
        duration={3}
    />
    <AnimatedBeam
        containerRef={containerRef}
        fromRef={inOpenAiRef}
        toRef={langfuseNodeRef}
        duration={3}
    />
    <AnimatedBeam
        containerRef={containerRef}
        fromRef={out1ref}
        toRef={langfuseNodeRef}
        className="hidden"
        duration={3}
    />
    <AnimatedBeam
        containerRef={containerRef}
        fromRef={out2ref}
        toRef={langfuseNodeRef}
        className="hidden"
        duration={3}
    />
    </div>
  );
}
