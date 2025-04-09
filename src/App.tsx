import React, {useEffect, useState} from 'react';
import HobbEduCard from './components/HobbEduCard';
import EverMergeCard from './components/EverMergeCard';
import FoguetinhoCard from './components/FoguetinhoCard';
import {projects} from './data/projects';
import {studentsProjects} from './data/students-projects';
import GameCard from './components/GameCard';
import BreathingWavesSection from './components/BreathingWavesSection';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <main className="p-6 md:p-10 bg-white text-black dark:bg-black dark:text-white font-sans min-h-screen">
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm bg-cyan-600 hover:bg-cyan-700 text-white"
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            <header className="text-center mb-16 mt-10">
                <h1 className="text-5xl font-bold text-cyan-500 mb-4">Hi, I’m a Game Developer</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Creating interactive worlds through code, design, and imagination.
                </p>
            </header>

            <section className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    I'm a passionate game developer with experience in Unity, Godot, and web-based multiplayer systems.
                    My mission is to craft engaging, interactive experiences that tell stories and spark imagination.
                </p>
            </section>

            <section className="mb-20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    My Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <GameCard key={project.id} data={project}/>
                    ))}
                </div>
            </section>


            <section className="mb-20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    My Students Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {studentsProjects.map(project => (
                        <GameCard key={project.id} data={project}/>
                    ))}
                </div>
            </section>

            <section className="text-center">
                <h2 className="text-2xl font-bold text-cyan-400 mb-2">Let’s Connect</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">I’m always open to collaboration, remote work, or
                    freelance projects.</p>
                <a
                    href="mailto:your@email.com"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold transition"
                >
                    Contact Me
                </a>
            </section>
            <BreathingWavesSection/>
            
        </main>
    );
}

export default App;
