import type { Portfolio } from '@/types/portfolio';

// Static portfolio data
export const portfolioData: Portfolio = {
  about: {
    name: 'Vikalp Singh',
    summary: 'Immersive and adaptable Game Designer with 3.5+ years of experience designing gameplay systems across hybrid-casual, puzzle, and action games. Hands-on experience in Unreal Engine and Unity, including shooting, combat, and 2D platformer mechanics. Strong in system iteration, live-ops support, and collaborating with engineering, art, and production to ship polished player experiences.',
    profileImage: '/assets/generated/profile-headshot.dim_400x400.png',
  },
  experiences: [
    {
      id: 1,
      company: 'YSecIT',
      title: 'Game Designer',
      period: 'March 23rd 2022–Jan 31st 2025',
      description: 'Authored game design documents covering core mechanics, story, progression, and UX flows.Collaborated cross-functionally with artists, programmers, and producers to ship features.Designed and iterated on core gameplay systems using player feedback and playtests.Supported live ops with content updates, balancing tweaks, and feature releases.',
    },
    {
      id: 2,
      company: 'Beyondoo Games',
      title: 'Game Developer',
      period: 'Internship-2 months',
      description: 'Built core gameplay systems and interactions in Unity (C#).Designed game concepts, characters, and level layouts from prototype to polish.Implemented new mechanics and features based on testing and user feedback.Optimized gameplay flow and usability for a smoother player experience.',
    },
    {
      id: 3,
      company: 'Liquid Nitro Games',
      title: 'Game Designer / Level Designer',
      period: 'Contract, 6 months, May 15th 2025- Nov 17th 2025',
      description: 'Designed and balanced multiple mobile levels for a high-performance live game.Created detailed level layouts, pacing, and environmental storytelling.Worked closely with design, art, and QA teams to polish gameplay feel.Analyzed player flow and difficulty curves to improve retention.',
    },
    {
      id: 4,
      company: 'Freelancer',
      title: 'Content Writer',
      period: '3 months-2021',
      description: 'Wrote narrative content for sci-fi and RPG concepts, including characters and dialogue—balanced storytelling with usability and technical constraints.Delivered end-to-end solutions independently for multiple clients.',
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Hybrid Casual Game (Personal Project)',
      description: 'Designed the core gameplay loop, system design, and monetization strategies for a hybrid casual mobile title. Developed mechanics tailored for short session depth, retention hooks, and ad-based monetization. Focused on scalable systems and in-game economy to support long-term engagement.',
      roleDetails: 'Game Designer (GDD, Systems, Monetization)',
    },
    {
      id: 2,
      title: 'Puzzle Game (Personal Project)',
      description: 'Crafted puzzle mechanics and level progression systems with increasing complexity and player skill expression. Created wireframes and UI mockups for gameplay screens and menus, aligned with casual player expectations. Focused on intuitive tutorials and satisfying feedback loops for onboarding and retention.',
      roleDetails: 'Game Designer (GDD, Wireframes)',
    },
    {
      id: 3,
      title: '2D Mobile Hypercasual (Personal Project)',
      description: 'Worked on the core mechanics (tap interaction), game progression structure, reward systems, and difficulty curve tuning. Designed gameplay for short, addictive sessions targeting high retention and virality. Balanced rewards and challenges to keep engagement high.',
      roleDetails: 'Developer (Core Mechanics & Progression Only)',
    },
    {
      id: 4,
      title: '3D Souls game System Design UE5 (Personal Project)',
      description: 'Lock-on-based melee combat system. Light & heavy attacks with combo logic. Stamina management affects attacks, dodge, and defense. Dodge/roll with invincibility frames. Enemy AI with attack patterns and telegraphs. Camera and movement tuned for close-quarters combat. Assets used from Quixel Bridge/Fab include swords, bosses, characters, and environments.',
      roleDetails: 'Game Designer/Technical Designer (Unreal Blueprint)',
    },
    {
      id: 5,
      title: '3D Shooting System Design in UE5 (Personal Project)',
      description: 'Fast and responsive shooting logic. Aiming system with camera zoom. Reload system with animations. Semi-auto & full-auto firing modes. Weapon switching between multiple firearms. Muzzle flash, bullet impact VFX, and sound FX. Ammo system fully integrated with UI. Organized weapon base class for scalability. Recoil and aim offset will be implemented next to make the weapons feel more complete.',
      roleDetails: 'Game Designer/Technical Designer (Unreal Blueprint)',
    },
    {
      id: 6,
      title: '2D/3D Hybrid Platformer Gameplay Prototype in UE5 (Personal Project)',
      description: 'Advanced movement system featuring jump variants, wall slide, wall jump, and slide mechanics. Shooting system with regular and charged projectiles. Respawn and checkpoint system for player progression. Player health counter system with UI integration. Chase enemy AI triggered by player range detection. Vertical moving enemy used for soft gating mechanics. Horizontal patrolling enemy with behavior patterns. Ranged enemy that fires projectiles at the player.',
      roleDetails: 'Game Designer/Technical Designer (Unreal Blueprint)',
    },
  ],
  contact: {
    email: 'singhvikalp2010@gmail.com',
    phone: '7838292047',
    location: 'Remote / Available Worldwide',
  },
  socialLinks: [],
  portfolioLinks: [
    {
      title: 'Google Drive',
      url: 'https://drive.google.com/drive/folders/1SNU2ZzfHliIIwHnfviGt13hE8XqKIr6f?usp=sharing',
    },
    {
      title: 'Gameplay Videos',
      url: 'https://www.youtube.com/playlist?list=PL2U0vMdz6PkBv_8CqXw8bl1gAXFdo4WaW',
    },
    {
      title: 'Art',
      url: 'https://vikgau10.artstation.com/',
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: 'Deep Analysis of Behavioral Patterns',
      description: 'An in-depth exploration of player behavioral patterns in game design, examining how players interact with game systems and how designers can leverage these insights to create more engaging experiences.',
      date: 'February 2026',
      externalUrl: 'https://gamedesignmastery.blogspot.com/2026/02/deep-analysis-of-behavioral-patterns.html',
    },
  ],
};
