import darkagePreview from '../assets/darkage-preview.png';
import lostincamerasPreview from '../assets/lostincameras-preview.png';
import deservedrevengePreview from '../assets/deservedrevenge-preview.png';

export const studentsProjects = [
  {
    id: 'dark-age',
    title: 'Dark Age',
    description: 'A dark 2D platformer where you guide a ghost through shadows to defeat the final boss.',
    fullDescription: 'In this thrilling 2D adventure, player take on the role of a ghost navigating through a dark and eerie world. Your mission is to reach the generator and defeat the final boss. Along the way, you\'ll encounter various obstacles and challenges that will test your skills and wits. With darkness enveloping the environment, you\'ll need to rely on your senses and quick reflexes to survive and complete your quest. Can you conquer the shadows and emerge victorious?',
    platforms: { pc: true },
    image: darkagePreview,
    technologies: 'PC, Unity, C#',
    date: 'Jul 2024',
    platformsTile: {
      pc: 'https://devstim.itch.io/dark-age',
    },
    platformsCard: {
      itchio: 'https://devstim.itch.io/dark-age',
    },
  },
  {
    id: 'lostincameras',
    title: 'Lost In Cameras',
    description: 'A horror puzzle 3D adventure where you must uncover four hidden numbers while escaping a deadly monster.',
    fullDescription: 'Lost In Cameras is a horror puzzle game where your wits are your only weapon. Explore a mysterious map and solve four hidden puzzles, each revealing a number needed to crack the final code. But you\'re not alone—Krakko, a terrifying monster, is always lurking, trying to stop you before you succeed. Can you stay calm under pressure, decode the mystery, and escape alive?',
    platforms: { pc: true },
    image: lostincamerasPreview,
    technologies: 'PC, C#, Unity',
    date: 'May 2024',
    platformsTile: {
      pc: 'https://ishakgames.itch.io/lostincameras',
    },
    platformsCard: {
      itchio: 'https://ishakgames.itch.io/lostincameras',
    },
  },
  {
    id: 'deservedrevenge',
    title: 'Deserved Revenge',
    description: 'A pixel-art 2D platformer where you travel to the future to rescue a kidnapped time machine inventor.',
    fullDescription: 'Deserved Revenge is a retro-style 2D platformer set in a dystopian future. The brilliant inventor of a time machine has been kidnapped by dangerous criminals, and only you can save him. Jump, dodge, and fight your way through futuristic cityscapes and high-tech facilities. Use your reflexes and determination to uncover the truth, face your enemies, and change the course of time.',
    platforms: { mobile: true },
    image: deservedrevengePreview,
    technologies: 'Unity, C#, Google Play Services',
    date: 'Feb 2022',
    platformsTile: {
      android: 'https://ishakgames.itch.io/deserved-revenge',
    },
    platformsCard: {
      itchio: 'https://ishakgames.itch.io/deserved-revenge',
    },
  },
];
