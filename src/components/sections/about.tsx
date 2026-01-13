import React from "react";
import { MotionDiv } from "@/components/motion-div";
import { config } from "@/data/config";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="container relative py-24 sm:py-32 w-full max-w-4xl mx-auto"
        >
            <div className="space-y-6">
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-left">
                        About Me
                    </h2>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg text-muted-foreground leading-relaxed text-left"
                >
                    <p>{config.description.long}</p>
                    <br />
                    <p>
                        My journey into tech started with a curiosity for how things work, which led me to dive deep into coding.
                        I enjoy solving complex problems and turning ideas into reality through code.
                        When I'm not coding, I'm probably exploring new tech trends, participating in hackathons, or gaming.
                    </p>
                </MotionDiv>
            </div>
        </section>
    );
};

export default AboutSection;
