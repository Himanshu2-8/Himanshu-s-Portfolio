import { Github, Linkedin, Code2, Mail, Twitter } from "lucide-react";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "GitHub", icon: Github, url: "https://github.com/Himanshu2-8" },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com/in/himanshu-pragyan",
        },
        {
            name: "CodingProfile",
            icon: Code2,
            url: "https://leetcode.com/u/Architect_04/",
        },
        { name: "Twitter", icon: Twitter, url: "https://twitter.com/Himanshu_348" },
        {
            name: "Contact",
            icon: Mail,
            url: "mailto:pragyan.himanshu2004@gmail.com",
        },
    ];

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav
                    initial={{ y: -100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: -100, x: "-50%", opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-6 left-1/2 w-[70%] max-w-5xl z-50"
                >
                    <div className="relative group rounded-full p-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent">
                        <div className="bg-background/70 backdrop-blur-xl border border-white/10 shadow-lg rounded-full px-8 py-4 flex items-center justify-between transition-all duration-300 hover:shadow-primary/5 hover:border-primary/20">
                            <div className="flex w-full justify-around items-center">
                                {links.map((link) => (
                                    <Tooltip key={link.name} delayDuration={0}>
                                        <TooltipTrigger asChild>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:-translate-y-1 hover:scale-110 p-2"
                                                aria-label={link.name}
                                            >
                                                <link.icon className="w-6 h-6" strokeWidth={1.5} />
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent side="bottom" className="text-xs">
                                            <p>{link.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
