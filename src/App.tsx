import React, {} from 'react';
import {projects} from './data/projects';
import {studentsProjects} from './data/students-projects';
import GameCard from './components/GameCard';
import RotatingCube from './components/RotatingCube';
import segaLogo from './assets/logos/sega.png';

function App() {

    return (
        <main>
            <div className="relative overflow-hidden z-[7]">
                <div className="w-full relative h-[1200px] xx:h-[1600px] from-[#b721ff] to-[#21d4fd] bg-hero-gradient">
                    <div className="max-w-[2000px] mx-auto relative">
                        <RotatingCube/>
                        <div className="w-[700px] px-[64px] pt-[100px] pb-[100px] sm:p-[32px] xl:w-[500px] xl:px-0 xl:pt-[64px] xl:pb-0 xl:mx-auto">
                            <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] sm:mb-[10px] md:mb-[30px] xl:mb-[40px] md:mt-[30px] font-bold leading-[80%] tracking-tight text-black text-left uppercase">
                                I MAKE GAMES WITH
                                    <br/>
                                <span className="text-red-600 block text-[5.6rem] leading-[90%]">
                                PASSION &<br/>CODE
                                </span>
                            </h1>
                            <p>
                                I'm a game developer focused on building engaging, meaningful, and technically sound games. I love turning ideas into interactive experiences.
                            </p>

                            <div className="top-buttons">
                                <a className="open-demo" href="#play-latest">
                                    <img src="/icons/gamepad.svg" alt="gamepad icon" width="32" height="32" />
                                    <span>Play Latest Game</span>
                                </a>
                                <a className="open-demo" href="#projects">
                                    <span>See My Projects</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-slant absolute w-[300vw] h-[1200px] top-[860px] left-[-100vw] skew-y-[3deg] shadow-[0px_-1px_1px_0px_rgb(255,255,255)] bg-white z-0"></div>
            </div>


            <header className="text-center mb-16 mt-10">
                <h1 className="text-5xl font-bold text-cyan-500 mb-4">Hi, I’m a Game Developer</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Creating interactive worlds through code, design, and imagination.
                </p>
            </header>

            <section className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">About Me</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    I'm a passionate game developer with experience in Unity.
                    My mission is to craft engaging, interactive experiences that tell stories and spark imagination.
                </p>
                <div className="logos-wrap ">
                    <h2>Inspired by the best</h2>
                    <ul className="logos ">
                        <li><img src="/logos/ea.png" alt="EA logo"/></li>
                        <li><img src={segaLogo} alt="SEGA logo"/></li>
                        <li><img src="/logos/zynga.png" alt="Zynga logo"/></li>
                        <li><img src="/logos/king.png" alt="King logo"/></li>
                    </ul>
                </div>
            </section>

            <section className="p-6 md:p-10 mb-20">
                <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
                    My Projects
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map(project => (
                        <GameCard key={project.id} data={project}/>
                    ))}
                </div>
            </section>


            <section className=" p-6 md:p-10 mb-20">
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
        </main>
    );
}

export default App;
