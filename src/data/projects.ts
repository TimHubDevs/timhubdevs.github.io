import hobbeduPreview from '../assets/hobbedu-preview.png';
import foguetinhoPreview from '../assets/foguetinho-preview.png';
import evermergePreview from '../assets/evermerge-preview.png';
import footballManagerPreview from '../assets/footballManager-preview.png';
import flaim from '../assets/flaim.png';
import flaim1 from '../assets/flaim1.png';
import acrossTheObelisk from '../assets/acrosstheobelisk.jpg';
import acrossTheObelisk1 from '../assets/acrosstheobelisk1.png';


export const projects = [
  {
    id: 'acrossTheObelisk',
    title: 'Across The Obelisk: The Shattered Remnant',
    description: 'Story Pack DLC for the co-op roguelite deckbuilder — a fractured memory realm where enemies adapt to your deck.',
    fullDescription: 'Developed The Shattered Remnant, the latest story pack for Across the Obelisk — Paradox Interactive\'s co-op roguelite deckbuilder from Dreamsite Games. Cross into a fractured memory realm where echoes linger and nothing stays buried. Explore the Withered Vale, a new Act 4 path through a broken land of tombs, reflections, and regret — a region that reacts to your strategy, resists your strengths, and turns your tactics against you. Built an adaptive enemy system where foes analyze player decks, mirror abilities, and reshape the battlefield. Shipped new hero Althea (Echo Spell discard-chain spellcaster), companion Ashy, Echo Spell / Resurge / Resonance mechanics, narrative events such as the Necropolis of Knowledge and Mirror of Regret, and the Withered Soul boss fight. Released June 2026 on Steam.',
    platforms: { pc: true },
    image: acrossTheObelisk,
    detailImage: acrossTheObelisk1,
    technologies: 'Unity, C#, AI Agents',
    date: 'Jun 2026',
    platformsTile: {
      steam: 'https://store.steampowered.com/app/3930240/Across_the_Obelisk_The_Shattered_Remnant/',
    },
    platformsCard: {
      steam: 'https://store.steampowered.com/app/3930240/Across_the_Obelisk_The_Shattered_Remnant/',
    },
  },
  {
    id: 'flaim',
    title: 'FLAIM firefighter VR',
    description: 'Mixed-reality VR training for firefighters — practice high-risk scenarios safely, without live fire.',
    fullDescription: 'FLAIM FTS is a fully immersive mixed-reality firefighter training system that pairs high-fidelity virtual fire environments with industry-standard equipment. Built for emergency services, it lets firefighters, teams, and incident commanders rehearse structural fires, hazmat incidents, and other high-risk, low-frequency emergencies in a safe, on-demand setting — complementing live fire training while reducing exposure to carcinogens and logistical overhead. Trainees run realistic scenarios with clear objectives, then review performance through Capture, FLAIM\'s cloud-based analytics platform that supports After-Action Reviews and evidence-based training needs analysis.',
    platforms: { vr: true },
    image: flaim,
    detailImage: flaim1,
    technologies: 'Unity, C#, VR',
    date: '2025',
    platformsTile: {
      web: 'https://flaimsystems.com/emergency-services',
    },
    platformsCard: {
      web: 'https://flaimsystems.com/emergency-services',
    },
  },
  {
    id: 'footballManager',
    title: 'Football Manager 25',
    description: 'A deep and strategic football management simulation for true fans.',
    fullDescription: 'Football Manager 25 puts you in the shoes of a football club manager where every decision matters. Scout real players, develop your team, devise winning tactics, and lead your club to glory across multiple leagues and competitions. With advanced analytics, immersive matchday experiences, and seamless cross-platform gameplay, it\'s the ultimate test of your football knowledge and leadership skills.',
    platforms: { pc: true },
    image: footballManagerPreview,
    technologies: 'Unity, C#, UI Toolkit, C++',
    date: '2024',
    platformsTile: {
      steam: 'https://store.steampowered.com/app/2252570/Football_Manager_2024/',
    },
    platformsCard: {
      steam: 'https://store.steampowered.com/app/2252570/Football_Manager_2024/',
    },
  },
  {
    id: 'foguetinho',
    title: 'Foguetinho',
    description: 'A fast-paced space-themed game where timing is everything.',
    fullDescription: 'Place bets on how far your rocket will fly. Jump out before it hits a meteor and win big in any cryptocurrency!',
    platforms: { web: true },
    image: foguetinhoPreview,
    technologies: 'WebGL, Multiplayer, Crypto Integration',
    date: '2023',
    platformsTile: {
      web: 'https://vertbet.com/en-US/casinos/casino/grid?provider_ids=0&sorting_preset=1&game-id=101723426921656376',
    },
    platformsCard: {
      web: 'https://vertbet.com/en-US/casinos/casino/grid?provider_ids=0&sorting_preset=1&game-id=101723426921656376',
    },
  },
  {
    id: 'evermerge',
    title: 'EverMerge',
    description: 'The sandbox-style game. Find new items to merge and discover new lands.',
    fullDescription: 'The sandbox-style game EverMerge offers endless possibilities and combinations! Find new items to merge and meet classic characters and discover new lands.',
    platforms: { mobile: true },
    image: evermergePreview,
    technologies: 'Unity, C#, Google Play Services',
    date: '2022',
    platformsTile: {
      android: 'https://play.google.com/store/apps/details?id=com.bigfishgames.mergetalesgoog',
      ios: 'https://apps.apple.com/app/id1446344746',
    },
    platformsCard: {
      playStore: 'https://play.google.com/store/apps/details?id=com.bigfishgames.mergetalesgoog',
      appStore: 'https://apps.apple.com/app/id1446344746',
    },
  },
  {
    id: 'hobbedu',
    title: 'HobbEdu',
    description: 'An educational game to support learning through gamification.',
    fullDescription: 'HobbEdu is an educational game app designed to support learning through engaging interactions and gamification.',
    platforms: { mobile: true },
    image: hobbeduPreview,
    technologies: 'Unity, C#, Google Play Services',
    date: '2019',
    platformsTile: {
      android: 'https://play.google.com/store/apps/details?id=com.HobbEduapp',
      ios: 'https://apps.apple.com/app/id1609109019',
    },
    platformsCard: {
      playStore: 'https://play.google.com/store/apps/details?id=com.HobbEduapp',
      appStore: 'https://apps.apple.com/app/id1609109019',
    },
  },
];
