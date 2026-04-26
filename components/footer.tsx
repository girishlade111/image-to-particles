"use client"

import Link from "next/link"
import { Mail, Globe, Github, Linkedin, Instagram, Code2 } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/girish_lade_/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/girish-lade-075bba201/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/girishlade111",
    icon: Github,
  },
  {
    name: "CodePen",
    url: "https://codepen.io/Girish-Lade-the-looper",
    icon: Code2,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm text-muted-foreground">
              Made with <span className="text-[#00d9ff]">❤</span> by{" "}
              <a
                href="https://ladestack.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] hover:underline"
              >
                Girish Lade
              </a>
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <a
                href="https://ladestack.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#00d9ff] transition-colors"
              >
                ladestack.in
              </a>
              <span className="text-border">•</span>
              <Mail className="w-4 h-4" />
              <a
                href="mailto:admin@ladestack.in"
                className="hover:text-[#00d9ff] transition-colors"
              >
                admin@ladestack.in
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-foreground/5 hover:bg-[#00d9ff]/20 hover:text-[#00d9ff] transition-all duration-300 group"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Retro Shader Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00d9ff] animate-pulse"></span>
              Built with Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}