'use client'

import React, { useEffect } from "react";
import gsap from "gsap";
import Logo from "./logo";

type PreLoaderProps = {
    enableBlur?: boolean;
    animationSpeed?: number;
}

export default function PreLoader({ 
    enableBlur = true,
    animationSpeed = 1,
}: PreLoaderProps) {
    useEffect(() => {
        const tl = gsap.timeline();
        const baseSpeed = animationSpeed;

        // Preloader Animation
        const preLoaderAnim = () => {
            tl.to(".texts-container", {
                duration: 0,
                opacity: 1,
                ease: "Power3.easeOut",
            })
                .from(".texts-container span", {
                    duration: 1.5 / baseSpeed,
                    delay: 1 / baseSpeed,
                    y: 70,
                    skewY: 10,
                    ...(enableBlur && { filter: "blur(15px)" }),
                    stagger: 0.4 / baseSpeed,
                    ease: "Power3.easeOut",
                })
                .to(".texts-container span", {
                    duration: 1 / baseSpeed,
                    y: 70,
                    skewY: -20,
                    ...(enableBlur && { filter: "blur(20px)" }),
                    stagger: 0.2 / baseSpeed,
                    ease: "Power3.easeOut",
                })
                .to("body", {
                    duration: 0.01,
                    css: { overflowY: "scroll" },
                    ease: "power3.inOut",
                })
                .from(".sub", {
                    duration: 1 / baseSpeed,
                    opacity: 0,
                    y: 80,
                    ease: "expo.easeOut",
                })
                .to(
                    ".preloader",
                    {
                        duration: 1.5 / baseSpeed,
                        height: "0vh",
                        ease: "Power3.easeOut",
                        onComplete: mobileLanding,
                    },
                    "-=2"
                )
                .to(".preloader", {
                    duration: 0,
                    css: { display: "none" },
                });
        };

        const mobileLanding = () => {
            if (window.innerWidth < 763) {
                tl.from(".landing__main2", {
                    duration: 1 / baseSpeed,
                    delay: 0,
                    opacity: 0,
                    y: 80,
                    ease: "expo.easeOut",
                });
            }
        };

        preLoaderAnim();
    }, [enableBlur, animationSpeed]); // Added dependencies

    return (
        <div
            className="preloader gap-[5px] overflow-hidden text-[14px] sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
            style={{
                height: "100vh",
                width: "100%",
                background: "#000000",
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
                className="texts-container w-500 flex h-60 items-center justify-center gap-[5px] overflow-hidden text-[14px] font-bold text-[#e4ded7] opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]"
                style={{
                    height: "60px",
                }}
            >
                <span>remco</span>
                <span>stoeten</span>
                <span><Logo/></span>
                <span>project</span> 
                <span>name</span>
            </div>
        </div>
    );
}
