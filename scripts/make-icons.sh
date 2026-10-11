#!/bin/sh
# Gera os PNG dos ícones da PWA a partir dos SVG (precisa de rsvg-convert).
cd "$(dirname "$0")/../docs/icons" || exit 1
rsvg-convert -w 192 -h 192 icon.svg -o icon-192.png
rsvg-convert -w 512 -h 512 icon.svg -o icon-512.png
rsvg-convert -w 512 -h 512 icon-maskable.svg -o icon-maskable-512.png
rsvg-convert -w 180 -h 180 icon-maskable.svg -o apple-touch-icon.png
