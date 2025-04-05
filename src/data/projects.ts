import hobbeduPreview from '../assets/hobbedu-preview.png';
import foguetinhoPreview from '../assets/foguetinho-preview.png';
import evermergePreview from '../assets/evermerge-preview.png';


export const projects = [
  {
    id: 'hobbedu',
    title: 'HobbEdu',
    description: 'An educational game to support learning through gamification.',
    fullDescription: 'HobbEdu is an educational game app designed to support learning through engaging interactions and gamification.',
    image: hobbeduPreview,
    technologies: 'Unity, C#, Google Play Services',
    date: 'Nov 2019',
    platformsTile: {
      android: 'https://play.google.com/store/apps/details?id=com.HobbEduapp',
      ios: 'https://apps.apple.com/app/id1609109019',
    },
    platformsCard: {
      playStore: 'https://play.google.com/store/apps/details?id=com.HobbEduapp',
      appStore: 'https://apps.apple.com/app/id1609109019',
    },
  },
  {
    id: 'foguetinho',
    title: 'Foguetinho',
    description: 'A fast-paced space-themed game where timing is everything.',
    fullDescription: 'Place bets on how far your rocket will fly. Jump out before it hits a meteor and win big in any cryptocurrency!',
    image: foguetinhoPreview,
    technologies: 'WebGL, Multiplayer, Crypto Integration',
    date: 'Jan 2023',
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
    image: evermergePreview,
    technologies: 'Unity, C#, Google Play Services',
    date: 'Feb 2022',
    platformsTile: {
      android: 'https://play.google.com/store/apps/details?id=com.bigfishgames.mergetalesgoog',
      ios: 'https://apps.apple.com/app/id1446344746',
    },
    platformsCard: {
      playStore: 'https://play.google.com/store/apps/details?id=com.bigfishgames.mergetalesgoog',
      appStore: 'https://apps.apple.com/app/id1446344746',
    },
  },
];
