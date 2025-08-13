import React from "react";
import NextImage from "next/image";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCalendar({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" {...base} />
      <path d="M16 3v4M8 3v4M3 11h18" {...base} />
    </svg>
  );
}

export function IconMessage({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M21 15a4 4 0 0 1-4 4H9l-6 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" {...base} />
    </svg>
  );
}

export function IconRocket({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M4 16s3-1 6 2 2 6 2 6" {...base} />
      <path d="M14 10l-4 4" {...base} />
      <path d="M14 2a8 8 0 0 1 8 8c0 3-2.5 6.5-5 9s-6 5-9 5a8 8 0 0 1-8-8c0-3 2.5-6.5 5-9s6-5 9-5z" {...base} />
    </svg>
  );
}

export function IconBot({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <rect x="3" y="8" width="18" height="10" rx="2" {...base} />
      <path d="M12 2v4M7 13h.01M17 13h.01" {...base} />
    </svg>
  );
}

export function IconChart({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M3 3v18h18" {...base} />
      <path d="M7 15l4-4 4 3 5-6" {...base} />
    </svg>
  );
}

export function IconBook({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M4 5a3 3 0 0 1 3-3h13v18H7a3 3 0 0 0-3 3z" {...base} />
      <path d="M7 2v18" {...base} />
    </svg>
  );
}

export function IconBriefcase({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" {...base} />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18" {...base} />
    </svg>
  );
}

export function IconExternal({ size = 18, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden {...props}>
      <path d="M14 3h7v7" {...base} />
      <path d="M21 3l-9 9" {...base} />
      <path d="M5 12v7h7" {...base} />
    </svg>
  );
}

export function IconLinkedIn({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <NextImage width={size} height={size} className={className} src="https://img.icons8.com/windows/32/ff6b00/linkedin-2.png" alt="LinkedIn" />
  );
}

export function IconYouTube({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <NextImage width={size} height={size} className={className} src="https://img.icons8.com/glyph-neue/64/ff6b00/youtube-play.png" alt="YouTube" />
  );
}

export function IconWhatsApp({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <NextImage width={size} height={size} className={className} src="https://img.icons8.com/fluency/48/whatsapp.png" alt="WhatsApp" />
  );
}

export function IconFacebook({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <NextImage width={size} height={size} className={className} src="https://img.icons8.com/ios-glyphs/30/ff6b00/facebook-f.png" alt="Facebook" />
  );
}

export function IconInstagram({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <NextImage width={size} height={size} className={className} src="https://img.icons8.com/external-regular-kawalan-studio/50/ff6b00/external-instagram-social-media-regular-kawalan-studio.png" alt="Instagram" />
  );
}

export function IconTikTok({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <NextImage width={size} height={size} className={className} src="https://img.icons8.com/ios-filled/50/ff6b00/tiktok--v1.png" alt="TikTok" />
  );
}

