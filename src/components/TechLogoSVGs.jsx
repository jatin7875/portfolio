// Brand SVG logos as React components
export const logos = {
  React: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="-11.5 -10.23 23 20.46" fill="none">
      <circle r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  'Next.js': ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 180 180" fill="currentColor">
      <mask id="nxt"><circle r="90" cx="90" cy="90" fill="white"/></mask>
      <circle r="90" cx="90" cy="90" fill="#000"/>
      <path d="M149 89.2L81.6 180H66L120.6 89.2H149z" fill="white"/>
      <path d="M149.5 90L89 0h-18l57.2 90h21.3z" fill="white"/>
    </svg>
  ),
  TypeScript: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <rect width="400" height="400" fill="#3178C6" rx="50"/>
      <path d="M87 210v20h48v140h36V230h48v-20H87z" fill="white"/>
      <path d="M258 202c-9 0-17 2-23 5-6 4-9 9-9 16 0 5 2 10 5 14 4 4 11 8 22 12 10 4 16 7 18 9 3 3 4 6 4 9 0 4-2 7-5 9-3 3-7 4-13 4-11 0-21-5-30-15v24c10 8 22 11 34 11 11 0 20-3 27-8 7-5 11-12 11-21 0-6-2-11-5-15-4-5-12-9-24-14-11-4-17-7-19-9-2-3-3-6-3-9 0-3 1-6 4-8 2-2 6-3 11-3 9 0 18 4 27 11v-22c-8-6-18-9-32-9z" fill="white"/>
    </svg>
  ),
  'Node.js': ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 289">
      <path d="M128 0L0 74v141l128 74 128-74V74L128 0z" fill="#83CD29"/>
      <path d="M128 0L0 74l128 74 128-74L128 0z" fill="#83CD29"/>
      <path d="M128 289L0 215V74l128 73v142z" fill="#3C873A"/>
      <path d="M128 289l128-74V74L128 147v142z" fill="#3C873A"/>
      <path d="M128 0L0 74l128 73 128-73L128 0z" fill="#6BBF4E" opacity=".5"/>
      <path d="M110 186c0 4 3 8 8 10l9 5c1 0 1 0 1 1v7c0 1 0 1-1 1h-1l-7-4c-3-2-5-5-5-9v-11h-4zm36 0v11c0 4-2 7-5 9l-7 4h-1c-1 0-1 0-1-1v-7c0-1 0-1 1-1l9-5c5-2 8-6 8-10h-4z" fill="white" opacity=".3"/>
    </svg>
  ),
  Python: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 255">
      <defs>
        <linearGradient id="py1" x1="12%" y1="12%" x2="75%" y2="88%">
          <stop offset="0" stopColor="#387EB8"/>
          <stop offset="1" stopColor="#366994"/>
        </linearGradient>
        <linearGradient id="py2" x1="31%" y1="12%" x2="71%" y2="74%">
          <stop offset="0" stopColor="#FFE052"/>
          <stop offset="1" stopColor="#FFC331"/>
        </linearGradient>
      </defs>
      <path d="M126.9 0C62.4 0 66 28.2 66 28.2v29.2h62v8.8H41S0 61.2 0 126.3s37.5 62.8 37.5 62.8H59v-30s-1.3-37.5 36.9-37.5h63.7s35.7.6 35.7-34.5V36.5S200.5 0 126.9 0zm-35 20.3c6.4 0 11.6 5.2 11.6 11.6s-5.2 11.6-11.6 11.6-11.6-5.2-11.6-11.6 5.2-11.6 11.6-11.6z" fill="url(#py1)"/>
      <path d="M129.1 254.7c64.4 0 60.9-28.2 60.9-28.2v-29.2H128v-8.8H215s41 4.9 41-60.2-37.5-62.8-37.5-62.8H197v30s1.3 37.5-36.9 37.5H96.4S60.7 122.4 60.7 157.5v55.8s-5.5 41.4 68.4 41.4zm35-20.3c-6.4 0-11.6-5.2-11.6-11.6s5.2-11.6 11.6-11.6 11.6 5.2 11.6 11.6-5.2 11.6-11.6 11.6z" fill="url(#py2)"/>
    </svg>
  ),
  PostgreSQL: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 432 432" fill="#4169E1">
      <ellipse cx="216" cy="108" rx="138" ry="108"/>
      <path d="M78 108v216c0 60 62 108 138 108s138-48 138-108V108"/>
      <ellipse cx="216" cy="108" rx="138" ry="108" fill="#4169E1" stroke="#fff" strokeWidth="8"/>
      <text x="216" y="230" textAnchor="middle" fill="white" fontSize="180" fontWeight="bold" fontFamily="serif">P</text>
    </svg>
  ),
  MongoDB: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 549">
      <path d="M175.6 0C175.6 0 128.5 55.6 128 232.5c0 0-2 40 6 78 8 38 17.3 57.2 17.3 57.2l-1.3 8.3S128 432 128.5 549C191 525 220 459 226 390s-14-91-14-91L212 285C220 184 196 98 175.6 0z" fill="#47A248"/>
      <path d="M128.5 549c0-117-21-172.3-21-172.3l-1.3-8.3s9.3-19.2 17.3-57.2c8-38 6-78 6-78C129 55.6 82 0 82 0 61.5 98 38.5 184 46.5 285l-1 14s-20 22-14 91 35 135 97 159z" fill="#47A248" opacity=".85"/>
    </svg>
  ),
  Docker: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 190">
      <path d="M250 83c-2-2-8-4-17-3l-4 1-2-4c-5-10-14-15-15-16l-3-2-2 3c-3 4-4 10-4 15 1 4 2 8 4 11-3 2-6 3-9 3H2l-1 5c-1 15 2 30 9 43 8 15 20 22 35 26 21 5 42 3 59-7 11-7 19-17 24-29 12 1 26-2 32-14 1-3 2-6 2-10h-1c-7 0-11-2-11-2v-1l1-3 1-4c0-5-1-9-3-13z" fill="#2496ED"/>
      <rect x="20" y="51" width="27" height="23" rx="2" fill="white"/>
      <rect x="52" y="51" width="27" height="23" rx="2" fill="white"/>
      <rect x="84" y="51" width="27" height="23" rx="2" fill="white"/>
      <rect x="116" y="51" width="27" height="23" rx="2" fill="white"/>
      <rect x="52" y="22" width="27" height="23" rx="2" fill="white"/>
      <rect x="84" y="22" width="27" height="23" rx="2" fill="white"/>
      <rect x="84" y="0" width="27" height="18" rx="2" fill="white"/>
    </svg>
  ),
  AWS: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 304 182">
      <path d="M86 66c0 5 1 9 2 11 2 3 4 4 7 4 3 0 6-1 8-4 3-2 4-6 4-12V49h9v63h-9v-9c-3 4-6 7-9 9-3 1-6 2-10 2-7 0-12-2-15-7-4-5-5-12-5-21V49h9v17h9zM155 112V49h9v9c2-4 5-7 8-8 3-2 6-3 10-3v10h-3c-4 0-8 1-10 4-3 2-4 7-4 14v37h-10z" fill="#FF9900"/>
      <path d="M263 143c-15 11-37 17-56 17-27 0-51-10-69-26-1-2 0-3 2-2 20 11 44 18 69 18 17 0 36-4 53-11 3-1 5 2 1 4z" fill="#FF9900"/>
      <path d="M270 135c-2-3-13-1-18-1-2 0-2-1-1-2 9-6 23-4 25-2 2 3-1 17-8 24-1 1-3 1-2-1 2-4 5-14 4-18z" fill="#FF9900"/>
    </svg>
  ),
  Git: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 92 92">
      <path d="M90 42L50 2a6 6 0 00-8 0l-8 8 10 10a7 7 0 019 9l9 9a7 7 0 11-4 4l-8-8v21a7 7 0 11-6 0V33a7 7 0 01-4-9L30 14 2 42a6 6 0 000 8l40 40a6 6 0 008 0l40-40a6 6 0 000-8z" fill="#F05032"/>
    </svg>
  ),
  Figma: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 38 57">
      <path d="M19 28.5A9.5 9.5 0 1028.5 19 9.5 9.5 0 0019 28.5z" fill="#1ABCFE"/>
      <path d="M9.5 47.5A9.5 9.5 0 0019 57V38H9.5a9.5 9.5 0 000 9.5z" fill="#0ACF83"/>
      <path d="M19 0H9.5a9.5 9.5 0 100 19H19V0z" fill="#FF7262"/>
      <path d="M19 0h9.5a9.5 9.5 0 110 19H19V0z" fill="#F24E1E"/>
      <path d="M19 19h9.5a9.5 9.5 0 110 19H19V19z" fill="#A259FF"/>
    </svg>
  ),
  Tailwind: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 54 33">
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 12.672 33.808 16 40.5 16c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.328 33.692 0 27 0zM13.5 16C6.3 16 1.8 19.6 0 26.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 28.672 20.308 32 27 32c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.328 20.192 16 13.5 16z" fill="#06B6D4"/>
    </svg>
  ),
  Redis: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 220">
      <path d="M245 133c-6 3-38 16-44 20-7 3-11 3-17 0l-57-24c-6-3-7-5-7-9V103c0-4 2-6 6-4l59 24c3 1 5 1 8 0l51-21c4-2 6-1 6 3v18c0 4-2 7-5 10zm-134-56c-6-3-7-6-7-10V50c0-5 2-7 6-5l59 24c3 1 5 1 8 0l51-21c4-2 5-1 5 3v18c0 4-2 7-5 10-6 3-38 16-44 20-7 3-11 3-17 0L111 77z" fill="#DC382D"/>
    </svg>
  ),
  GraphQL: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 400 400">
      <path d="M57 170l14-8 130 225-14 8zM199 29l130 225-14 8L185 37zM29 243h342v16H29zM57 230l14 8-130 225-14-8z" fill="#E10098" transform="scale(1) translate(0,0)"/>
      <circle cx="200" cy="370" r="28" fill="#E10098"/>
      <circle cx="200" cy="30" r="28" fill="#E10098"/>
      <circle cx="370" cy="270" r="28" fill="#E10098"/>
      <circle cx="30" cy="270" r="28" fill="#E10098"/>
      <circle cx="370" cy="130" r="28" fill="#E10098"/>
      <circle cx="30" cy="130" r="28" fill="#E10098"/>
      <circle cx="200" cy="200" r="50" fill="none" stroke="#E10098" strokeWidth="28"/>
    </svg>
  ),
  Linux: ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256" fill="#FCC624">
      <ellipse cx="128" cy="100" rx="60" ry="80"/>
      <circle cx="108" cy="90" r="8" fill="#333"/>
      <circle cx="148" cy="90" r="8" fill="#333"/>
      <path d="M108 115 q20 20 40 0" stroke="#333" strokeWidth="4" fill="none"/>
      <path d="M68 160 Q50 200 70 220 Q128 240 186 220 Q206 200 188 160" fill="#FCC624"/>
      <line x1="90" y1="190" x2="70" y2="230" stroke="#FCC624" strokeWidth="8"/>
      <line x1="166" y1="190" x2="186" y2="230" stroke="#FCC624" strokeWidth="8"/>
    </svg>
  ),
  'C/C++': ({ size=18 }) => (
    <svg width={size} height={size} viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="120" fill="#00599C"/>
      <text x="128" y="165" textAnchor="middle" fill="white" fontSize="100" fontWeight="bold" fontFamily="monospace">C</text>
    </svg>
  ),
}
