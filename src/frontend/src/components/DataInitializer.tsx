import { useEffect, useState } from 'react';
import { useActor } from '@/hooks/useActor';
import { ExternalBlob } from '@/backend';
import { useQueryClient } from '@tanstack/react-query';

export default function DataInitializer() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const initializeData = async () => {
      if (!actor || initialized) return;

      try {
        // Fetch current portfolio content
        const content = await actor.getPortfolioContent();

        // Upload profile image if not present
        if (!content.about.profileImage) {
          const profileImageBlob = ExternalBlob.fromURL('/assets/generated/designer-headshot.dim_400x400.jpg');
          await actor.uploadProfileImage(profileImageBlob);
        }

        // Define the 5 required projects
        const requiredProjects = [
          {
            title: 'Hybrid Casual Game (Personal Project)',
            description: 'Designed the core gameplay loop, system design, and monetization strategies for a hybrid casual mobile title. Developed mechanics tailored for short session depth, retention hooks, and ad-based monetization. Focused on scalable systems and in-game economy to support long-term engagement.',
            roleDetails: 'Game Designer (GDD, Systems, Monetization)',
          },
          {
            title: 'Puzzle Game (Personal Project)',
            description: 'Crafted puzzle mechanics and level progression systems with increasing complexity and player skill expression. Created wireframes and UI mockups for gameplay screens and menus, aligned with casual player expectations. Focused on intuitive tutorials and satisfying feedback loops for onboarding and retention.',
            roleDetails: 'Game Designer (GDD, Wireframes)',
          },
          {
            title: '2D Mobile Hypercasual (Personal Project)',
            description: 'Worked on the core mechanics (tap interaction), game progression structure, reward systems, and difficulty curve tuning. Designed gameplay for short, addictive sessions targeting high retention and virality. Balanced rewards and challenges to keep engagement high.',
            roleDetails: 'Developer (Core Mechanics & Progression Only)',
          },
          {
            title: '3D Souls game System Design UE5 (Personal Project)',
            description: 'Lock-on-based melee combat system. Light & heavy attacks with combo logic. Stamina management affects attacks, dodge, and defense. Dodge/roll with invincibility frames. Enemy AI with attack patterns and telegraphs. Camera and movement tuned for close-quarters combat. Assets used from Quixel Bridge/Fab include swords, bosses, characters, and environments.',
            roleDetails: 'Game Designer/Technical Designer (Unreal Blueprint)',
          },
          {
            title: '3D Shooting System Design in UE5 (Personal Project)',
            description: 'Fast and responsive shooting logic. Aiming system with camera zoom. Reload system with animations. Semi-auto & full-auto firing modes. Weapon switching between multiple firearms. Muzzle flash, bullet impact VFX, and sound FX. Ammo system fully integrated with UI. Organized weapon base class for scalability. Recoil and aim offset will be implemented next to make the weapons feel more complete.',
            roleDetails: 'Game Designer/Technical Designer (Unreal Blueprint)',
          },
        ];

        // Build a set of existing project titles for exact match comparison
        const existingTitles = new Set(content.projects.map(p => p.title));

        // Add only missing projects
        let projectsAdded = false;
        for (const project of requiredProjects) {
          if (!existingTitles.has(project.title)) {
            await actor.addProject(
              project.title,
              project.description,
              project.roleDetails,
              null
            );
            projectsAdded = true;
          }
        }

        // Invalidate portfolio query if we added any projects
        if (projectsAdded) {
          await queryClient.invalidateQueries({ queryKey: ['portfolioContent'] });
        }

        setInitialized(true);
      } catch (error) {
        console.error('Failed to initialize data:', error);
      }
    };

    initializeData();
  }, [actor, initialized, queryClient]);

  return null;
}
