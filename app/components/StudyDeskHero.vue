<template>
  <div class="study-desk-wrapper">
    <svg
      viewBox="0 0 800 500"
      xmlns="http://www.w3.org/2000/svg"
      class="study-desk-svg"
      aria-label="Illustration of a cozy study desk with notebook, coffee, and plant"
      role="img"
    >
      <!-- Background warm glow -->
      <defs>
        <radialGradient id="deskGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" class="glow-inner" />
          <stop offset="100%" class="glow-outer" />
        </radialGradient>
        <filter id="pencilTexture">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
        <filter id="softShadow">
          <feDropShadow dx="2" dy="3" stdDeviation="4" flood-opacity="0.15" />
        </filter>
        <!-- Steam animation filter -->
        <filter id="steamBlur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      <!-- Subtle background -->
      <rect width="800" height="500" fill="url(#deskGlow)" />

      <!-- === DESK SURFACE === -->
      <g filter="url(#pencilTexture)">
        <!-- Desk top -->
        <path
          d="M 60 320 Q 100 310 400 305 Q 700 310 740 320 L 720 340 Q 400 335 80 340 Z"
          class="desk-surface"
          stroke-width="2"
        />
        <!-- Desk front panel -->
        <path
          d="M 80 340 Q 400 335 720 340 L 710 420 Q 400 415 90 420 Z"
          class="desk-front"
          stroke-width="1.5"
        />
        <!-- Desk legs -->
        <rect x="110" y="420" width="18" height="60" rx="2" class="desk-leg" />
        <rect x="672" y="420" width="18" height="60" rx="2" class="desk-leg" />
      </g>

      <!-- === OPEN NOTEBOOK === -->
      <g transform="translate(220, 210) rotate(-5)" filter="url(#softShadow)">
        <!-- Left page -->
        <path
          d="M 0 0 L 0 120 Q 75 125 140 120 L 140 0 Q 75 -3 0 0"
          class="notebook-page"
          stroke-width="1.5"
        />
        <!-- Right page -->
        <path
          d="M 140 0 L 140 120 Q 205 125 280 120 L 280 0 Q 205 -3 140 0"
          class="notebook-page"
          stroke-width="1.5"
        />
        <!-- Spine -->
        <line x1="140" y1="-2" x2="140" y2="122" class="notebook-spine" stroke-width="2" />
        <!-- Lines on left page -->
        <line x1="18" y1="22" x2="125" y2="22" class="notebook-line" />
        <line x1="18" y1="36" x2="120" y2="36" class="notebook-line" />
        <line x1="18" y1="50" x2="110" y2="50" class="notebook-line" />
        <line x1="18" y1="64" x2="122" y2="64" class="notebook-line" />
        <line x1="18" y1="78" x2="100" y2="78" class="notebook-line" />
        <line x1="18" y1="92" x2="115" y2="92" class="notebook-line" />
        <!-- Lines on right page -->
        <line x1="158" y1="22" x2="262" y2="22" class="notebook-line" />
        <line x1="158" y1="36" x2="255" y2="36" class="notebook-line" />
        <line x1="158" y1="50" x2="248" y2="50" class="notebook-line" />
        <line x1="158" y1="64" x2="260" y2="64" class="notebook-line" />
        <line x1="158" y1="78" x2="240" y2="78" class="notebook-line" />
        <!-- Bookmark ribbon -->
        <path d="M 260 0 L 260 -12 L 268 -6 L 276 -12 L 276 0" class="bookmark-ribbon" fill="none" stroke-width="1.5" />
      </g>

      <!-- === PEN === -->
      <g transform="translate(530, 225) rotate(25)">
        <!-- Pen body -->
        <rect x="0" y="0" width="100" height="8" rx="4" class="pen-body" />
        <!-- Pen tip -->
        <polygon points="100,0 100,8 115,4" class="pen-tip" />
        <!-- Pen clip -->
        <rect x="10" y="-2" width="25" height="3" rx="1" class="pen-clip" />
        <!-- Pen ring -->
        <rect x="85" y="-1" width="4" height="10" rx="1" class="pen-ring" />
      </g>

      <!-- === COFFEE CUP === -->
      <g transform="translate(580, 220)" filter="url(#softShadow)">
        <!-- Saucer -->
        <ellipse cx="35" cy="85" rx="45" ry="10" class="saucer" />
        <!-- Cup body -->
        <path
          d="M 5 30 Q 3 80 15 82 Q 35 88 55 82 Q 67 80 65 30 Z"
          class="cup-body"
          stroke-width="1.5"
        />
        <!-- Cup handle -->
        <path
          d="M 65 40 Q 85 42 85 58 Q 85 72 65 70"
          fill="none"
          class="cup-handle"
          stroke-width="3"
        />
        <!-- Coffee surface -->
        <ellipse cx="35" cy="32" rx="28" ry="6" class="coffee-surface" />
        <!-- Cup rim -->
        <ellipse cx="35" cy="30" rx="30" ry="7" fill="none" class="cup-rim" stroke-width="2" />

        <!-- Steam wisps -->
        <g class="steam-group" filter="url(#steamBlur)">
          <path d="M 25 20 Q 22 8 28 -5 Q 32 -15 26 -25" fill="none" class="steam" stroke-width="2">
            <animate
attributeName="d"
              values="M 25 20 Q 22 8 28 -5 Q 32 -15 26 -25;M 25 20 Q 30 5 24 -8 Q 20 -18 28 -28;M 25 20 Q 22 8 28 -5 Q 32 -15 26 -25"
              dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </path>
          <path d="M 38 18 Q 35 5 40 -8 Q 44 -20 38 -30" fill="none" class="steam" stroke-width="2">
            <animate
attributeName="d"
              values="M 38 18 Q 35 5 40 -8 Q 44 -20 38 -30;M 38 18 Q 42 2 36 -10 Q 32 -22 40 -32;M 38 18 Q 35 5 40 -8 Q 44 -20 38 -30"
              dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="3.5s" repeatCount="indefinite" />
          </path>
          <path d="M 48 22 Q 52 10 46 -2 Q 42 -12 50 -22" fill="none" class="steam" stroke-width="1.5">
            <animate
attributeName="d"
              values="M 48 22 Q 52 10 46 -2 Q 42 -12 50 -22;M 48 22 Q 44 8 50 -5 Q 54 -15 46 -25;M 48 22 Q 52 10 46 -2 Q 42 -12 50 -22"
              dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.15;0.5" dur="4s" repeatCount="indefinite" />
          </path>
        </g>
      </g>

      <!-- === SMALL PLANT === -->
      <g transform="translate(130, 195)" filter="url(#softShadow)">
        <!-- Pot -->
        <path d="M 0 60 L 5 100 Q 25 108 45 100 L 50 60 Z" class="plant-pot" stroke-width="1.5" />
        <!-- Pot rim -->
        <rect x="-4" y="55" width="58" height="10" rx="3" class="plant-pot-rim" />
        <!-- Soil -->
        <ellipse cx="25" cy="62" rx="22" ry="5" class="plant-soil" />
        <!-- Stems and leaves -->
        <path d="M 25 60 Q 20 35 15 20" fill="none" class="plant-stem" stroke-width="2" />
        <path d="M 25 60 Q 30 30 35 15" fill="none" class="plant-stem" stroke-width="2" />
        <path d="M 25 60 Q 15 40 8 35" fill="none" class="plant-stem" stroke-width="1.5" />
        <!-- Leaves -->
        <path d="M 15 20 Q 5 10 8 22 Q 10 28 15 20" class="plant-leaf" />
        <path d="M 15 20 Q 20 8 22 20 Q 20 26 15 20" class="plant-leaf" />
        <path d="M 35 15 Q 42 5 40 18 Q 38 24 35 15" class="plant-leaf" />
        <path d="M 35 15 Q 28 6 30 18 Q 32 22 35 15" class="plant-leaf" />
        <path d="M 8 35 Q -2 28 2 38 Q 5 42 8 35" class="plant-leaf" />
        <path d="M 8 35 Q 10 24 14 34 Q 12 40 8 35" class="plant-leaf" />
        <!-- New growth -->
        <path d="M 25 55 Q 25 42 30 35" fill="none" class="plant-stem-new" stroke-width="1.5" />
        <path d="M 30 35 Q 35 28 33 37 Q 31 40 30 35" class="plant-leaf-new" />
      </g>

      <!-- === SMALL STACK OF BOOKS === -->
      <g transform="translate(100, 265)">
        <!-- Bottom book -->
        <rect x="0" y="0" width="70" height="14" rx="2" class="book-1" stroke-width="1" />
        <line x1="5" y1="7" x2="65" y2="7" class="book-spine-line" stroke-width="0.5" />
        <!-- Middle book -->
        <rect x="5" y="-14" width="65" height="13" rx="2" class="book-2" stroke-width="1" />
        <line x1="10" y1="-7" x2="65" y2="-7" class="book-spine-line" stroke-width="0.5" />
        <!-- Top book (slightly askew) -->
        <rect x="-2" y="-27" width="60" height="12" rx="2" class="book-3" stroke-width="1" transform="rotate(-3, 28, -21)" />
      </g>

      <!-- === SMALL GLASSES === -->
      <g transform="translate(480, 270) rotate(-8)">
        <!-- Left lens -->
        <ellipse cx="15" cy="0" rx="16" ry="12" fill="none" class="glasses-frame" stroke-width="1.5" />
        <!-- Right lens -->
        <ellipse cx="55" cy="0" rx="16" ry="12" fill="none" class="glasses-frame" stroke-width="1.5" />
        <!-- Bridge -->
        <path d="M 31 -2 Q 35 -6 39 -2" fill="none" class="glasses-frame" stroke-width="1.5" />
        <!-- Left arm -->
        <line x1="-1" y1="-4" x2="-18" y2="-8" class="glasses-frame" stroke-width="1.5" />
        <!-- Right arm -->
        <line x1="71" y1="-4" x2="88" y2="-8" class="glasses-frame" stroke-width="1.5" />
        <!-- Lens tint -->
        <ellipse cx="15" cy="0" rx="14" ry="10" class="glasses-lens" />
        <ellipse cx="55" cy="0" rx="14" ry="10" class="glasses-lens" />
      </g>

      <!-- === WARM LAMP GLOW (background accent) === -->
      <g transform="translate(680, 120)">
        <!-- Lamp stand -->
        <rect x="18" y="80" width="4" height="120" rx="2" class="lamp-stand" />
        <!-- Lamp base -->
        <ellipse cx="20" cy="200" rx="22" ry="6" class="lamp-base" />
        <!-- Lamp shade -->
        <path d="M -5 80 L 10 20 Q 20 15 30 20 L 45 80 Z" class="lamp-shade" stroke-width="1.5" />
        <!-- Light glow -->
        <ellipse cx="20" cy="85" rx="60" ry="40" class="lamp-glow" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.study-desk-wrapper {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}

.study-desk-svg {
  width: 100%;
  height: auto;
}

/* === THEME-ADAPTIVE COLORS === */

/* Background glow */
.glow-inner { stop-color: oklch(0.95 0.02 80); }
.glow-outer { stop-color: oklch(0.92 0.01 80); }

/* Desk */
.desk-surface { fill: oklch(0.65 0.08 55); stroke: oklch(0.50 0.08 50); }
.desk-front { fill: oklch(0.58 0.07 50); stroke: oklch(0.45 0.07 45); }
.desk-leg { fill: oklch(0.52 0.07 48); stroke: oklch(0.42 0.06 45); }

/* Notebook */
.notebook-page { fill: oklch(0.97 0.01 90); stroke: oklch(0.70 0.03 80); }
.notebook-spine { stroke: oklch(0.60 0.04 70); }
.notebook-line { stroke: oklch(0.85 0.02 240); stroke-width: 0.8; opacity: 0.5; }
.bookmark-ribbon { stroke: oklch(0.55 0.18 25); fill: oklch(0.60 0.20 25); }

/* Pen */
.pen-body { fill: oklch(0.35 0.05 260); stroke: oklch(0.25 0.04 260); stroke-width: 1; }
.pen-tip { fill: oklch(0.75 0.01 90); stroke: oklch(0.50 0.02 80); stroke-width: 0.8; }
.pen-clip { fill: oklch(0.78 0.02 80); stroke: oklch(0.55 0.02 80); stroke-width: 0.5; }
.pen-ring { fill: oklch(0.78 0.02 80); stroke: oklch(0.55 0.02 80); stroke-width: 0.5; }

/* Coffee */
.saucer { fill: oklch(0.92 0.02 80); stroke: oklch(0.75 0.03 75); stroke-width: 1; }
.cup-body { fill: oklch(0.95 0.02 85); stroke: oklch(0.70 0.03 75); }
.cup-handle { stroke: oklch(0.70 0.03 75); }
.coffee-surface { fill: oklch(0.42 0.10 50); }
.cup-rim { stroke: oklch(0.70 0.03 75); }
.steam { stroke: oklch(0.80 0.01 80); opacity: 0.5; }

/* Plant */
.plant-pot { fill: oklch(0.62 0.12 45); stroke: oklch(0.48 0.10 40); }
.plant-pot-rim { fill: oklch(0.58 0.11 42); stroke: oklch(0.45 0.09 38); stroke-width: 1; }
.plant-soil { fill: oklch(0.38 0.06 50); }
.plant-stem { stroke: oklch(0.52 0.12 145); }
.plant-stem-new { stroke: oklch(0.60 0.15 140); }
.plant-leaf { fill: oklch(0.55 0.14 145); stroke: oklch(0.42 0.12 140); stroke-width: 0.8; }
.plant-leaf-new { fill: oklch(0.62 0.16 140); stroke: oklch(0.48 0.14 135); stroke-width: 0.6; }

/* Books */
.book-1 { fill: oklch(0.50 0.15 25); stroke: oklch(0.40 0.12 22); }
.book-2 { fill: oklch(0.45 0.10 250); stroke: oklch(0.35 0.08 245); }
.book-3 { fill: oklch(0.55 0.12 145); stroke: oklch(0.42 0.10 140); }
.book-spine-line { stroke: oklch(0.90 0.02 90); opacity: 0.4; }

/* Glasses */
.glasses-frame { stroke: oklch(0.45 0.04 60); }
.glasses-lens { fill: oklch(0.85 0.02 230); opacity: 0.15; }

/* Lamp */
.lamp-stand { fill: oklch(0.50 0.04 60); stroke: oklch(0.40 0.03 55); stroke-width: 1; }
.lamp-base { fill: oklch(0.48 0.04 58); stroke: oklch(0.38 0.03 55); stroke-width: 1; }
.lamp-shade { fill: oklch(0.85 0.06 70); stroke: oklch(0.65 0.05 65); }
.lamp-glow { fill: oklch(0.90 0.08 80); opacity: 0.25; }

/* === DARK MODE === */
[data-theme="dark"] .glow-inner { stop-color: oklch(0.22 0.02 260); }
[data-theme="dark"] .glow-outer { stop-color: oklch(0.18 0.02 260); }

[data-theme="dark"] .desk-surface { fill: oklch(0.40 0.05 55); stroke: oklch(0.32 0.04 50); }
[data-theme="dark"] .desk-front { fill: oklch(0.35 0.04 50); stroke: oklch(0.28 0.03 45); }
[data-theme="dark"] .desk-leg { fill: oklch(0.30 0.04 48); stroke: oklch(0.24 0.03 45); }

[data-theme="dark"] .notebook-page { fill: oklch(0.88 0.01 85); stroke: oklch(0.60 0.02 75); }
[data-theme="dark"] .notebook-spine { stroke: oklch(0.50 0.03 65); }

[data-theme="dark"] .cup-body { fill: oklch(0.82 0.02 80); stroke: oklch(0.58 0.02 70); }
[data-theme="dark"] .saucer { fill: oklch(0.78 0.02 75); stroke: oklch(0.55 0.02 70); }
[data-theme="dark"] .steam { stroke: oklch(0.70 0.01 80); }

[data-theme="dark"] .lamp-glow { fill: oklch(0.75 0.12 75); opacity: 0.3; }
[data-theme="dark"] .lamp-shade { fill: oklch(0.72 0.06 68); stroke: oklch(0.52 0.04 62); }

[data-theme="dark"] .plant-leaf { fill: oklch(0.45 0.10 145); stroke: oklch(0.35 0.08 140); }
[data-theme="dark"] .plant-leaf-new { fill: oklch(0.50 0.12 140); stroke: oklch(0.40 0.10 135); }
[data-theme="dark"] .plant-stem { stroke: oklch(0.42 0.09 145); }

[data-theme="dark"] .glasses-lens { fill: oklch(0.65 0.02 230); opacity: 0.2; }
</style>
