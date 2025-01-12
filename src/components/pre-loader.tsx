"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import Logo from "./logo";

type PreLoaderProps = {
  enableBlur?: boolean;
  animationSpeed?: number;
};

export default function PreLoader({
  enableBlur = true,
  animationSpeed = 1,
}: PreLoaderProps) {
  useEffect(() => {
    // Reset any existing GSAP animations
    gsap.set(".texts-container", { clearProps: "all" });
    gsap.set(".texts-container span", { clearProps: "all" });
    gsap.set(".preloader", { clearProps: "all", display: "flex" });
    gsap.set(".moving-background", { 
      clearProps: "all",
      backgroundPosition: "0px 0px"
    });
    
    const tl = gsap.timeline();
    const baseSpeed = animationSpeed;

    // Background Animation
    gsap.to(".moving-background", {
      backgroundPosition: "40px 40px",
      duration: 3,
      repeat: -1,
      ease: "none"
    });

    // Preloader Animation
    const preLoaderAnim = () => {
      tl.to(".texts-container", {
        duration: 0,
        opacity: 1,
        ease: "Power3.easeOut",
      });

      tl.from(".texts-container span", {
        duration: 1.5 / baseSpeed,
        y: 70,
        skewY: 10,
        ...(enableBlur && { filter: "blur(15px)" }),
        stagger: 0.4 / baseSpeed,
        ease: "Power3.easeOut",
      }).to(".texts-container span", {
        duration: 1 / baseSpeed,
        y: 70,
        skewY: -20,
        ...(enableBlur && { filter: "blur(20px)" }),
        stagger: 0.2 / baseSpeed,
        ease: "Power3.easeOut",
      });

      tl.to("body", {
        duration: 0.01,
        css: { overflowY: "scroll" },
        ease: "power3.inOut",
      }).to(
        ".preloader",
        {
          duration: 1.5 / baseSpeed,
          height: "0vh",
          ease: "Power3.easeOut",
          onComplete: () => {
            gsap.set(".preloader", { display: "none" });
          },
        },
        "-=1",
      );
    };

    preLoaderAnim();

    // Cleanup function
    return () => {
      tl.kill();
      gsap.killTweensOf(".preloader");
      gsap.killTweensOf(".texts-container");
      gsap.killTweensOf(".texts-container span");
      gsap.killTweensOf(".moving-background");
    };
  }, [enableBlur, animationSpeed]);

  return (
    <div
      className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
      style={{
        height: "100vh",
        width: "100%",
        background: "rgb(25, 25, 25)",
        color: "#e5ebf2",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 55,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden !important",
      }}
    >
      <div
        className="moving-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />
      <div
        className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px] relative z-10"
        style={{
          height: "60px",
        }}
      >
        <span>remco</span>
        <span>stoeten</span>
        <span>
          <Logo />
        </span>
        <span>project</span>
        <span>name</span>
      </div>
    </div>
  );
}
