import taskflowPreview from '../assets/taskflow-preview.png';
import mathTestPreview from '../assets/math-test-preview.png';

export const sitesProjects = [
  {
    id: 'taskflow',
    title: 'TaskFlow',
    description: 'TaskFlow is a dark, minimalist task planner in the form of a single HTML file that can be hosted on GitHub Pages. It supports tags, progress tracking, statuses, an archive, and cross-device synchronization via Firebase.',
    fullDescription: 'TaskFlow is a personal task planner with a dark interface, built as a single, self-contained index.html file without any frameworks or builds. Each task has a title, description, status (Not Started / In Progress / Completed), progress from 0 to 100%, and custom color tags. Active tasks are sorted automatically—first those closest to completion, then the oldest unstarted ones, and completed tasks are moved to a separate Archive. Filtering works by both status and tags simultaneously, and there is a quick search feature. Tags are managed centrally—you can change the color or delete a tag from all tasks at once. Data is stored locally in the browser, and Firebase Realtime Database can be enabled optionally for synchronization between your phone and laptop, with automatic migration of existing data.',
    platforms: { web: true },
    image: taskflowPreview,
    technologies: 'React, TypeScript, Tailwind CSS, Firebase',
    date: '2026',
    platformsTile: {
      web: 'https://timhubdevs.github.io/TaskFlow/',
    },
    platformsCard: {
      web: 'https://timhubdevs.github.io/TaskFlow/',
      github: 'https://github.com/TimHubDevs/TaskFlow',
    },
  },
  {
    id: 'school',
    title: 'School Math Test',
    description: 'An online platform for administering tests in mathematics (7th grade), geometry, and algebra (9th grade), featuring automatic answer checking and the compilation of results in Google Sheets.',
    fullDescription: 'A secure quiz platform for 7th and 9th graders, hosted on GitHub Pages. It supports three subjects: math (24 questions), geometry, and algebra (12 questions each). Questions are selected at random from a question bank with three difficulty levels—basic, intermediate, and advanced. Each student receives a unique set of questions thanks to the shuffling feature. A built-in 45-minute timer automatically ends the test when the time runs out. The anti-cheating system monitors tab switching, exiting full-screen mode, and screenshot attempts—10 violations result in forced termination. Answers are confirmed one at a time with no option to go back, after which a hint is displayed. Results are saved to Google Sheets via Apps Script and duplicated in localStorage as a backup. The teacher has a password-protected dashboard with three tabs, statistics, and data export options for spreadsheets. Mathematical formulas are rendered via KaTeX, and problems are accompanied by SVG diagrams and graphs.',
    platforms: { web: true },
    image: mathTestPreview,
    technologies: 'HTML, CSS, JavaScript',
    date: '2026',
    platformsTile: {
      web: 'https://timhubdevs.github.io/quiz/quiz.html',
    },
    platformsCard: {
      web: 'https://timhubdevs.github.io/quiz/quiz.html',
      github: 'https://github.com/TimHubDevs/quiz',
    },
  },
];
