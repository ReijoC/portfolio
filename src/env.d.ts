/// <reference types="astro/client" />

interface Window {
  openLightbox?: (items: { src: string; alt: string; caption: string }[], start: number, from?: HTMLElement) => void;
}
