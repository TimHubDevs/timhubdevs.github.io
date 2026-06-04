import {projects} from './data/projects';
import {studentsProjects} from './data/students-projects';
import GameCard from './components/GameCard';
import RotatingCube from './components/RotatingCube';
import BreathingWavesSection from './components/BreathingWavesSection';
import segaLogo from './assets/logos/sega.png';

function App() {

    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const startPosition = window.pageYOffset;
            const targetPosition = projectsSection.offsetTop - 20; // 20px offset
            const distance = targetPosition - startPosition;
            const duration = 5000; // Scroll duration in milliseconds (adjust this to control speed)
            let start: number | null = null;

            const animation = (currentTime: number) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function for smooth deceleration
                const easeInOutQuad = (t: number) => {
                    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
                };

                window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };

            requestAnimationFrame(animation);
        }
    };

    return (
        <main>
            <div className="relative overflow-hidden z-[7]">
                <div className="w-full relative h-[900px] xx:h-[1100px] bg-gradient-to-b from-[#21d4fd] via-[#b721ff] to-[#190b32]">
                    <div className="max-w-[2000px] mx-auto relative flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="order-2 lg:order-1">
                            <RotatingCube/>
                        </div>
                        <div className="order-1 lg:order-2 w-[700px] px-[64px] pt-[100px] pb-[100px] sm:p-[32px] xl:w-[500px] xl:px-0 xl:pt-[64px] xl:pb-0 xl:mx-auto lg:ml-8">
                            <h1 className="text-[2.2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[4rem] xl:text-[4.5rem] sm:mb-[10px] md:mb-[30px] xl:mb-[40px] md:mt-[30px] font-bold leading-[80%] tracking-tight text-black text-left uppercase">
                                GAME MAKER
                                    <br/>
                                <span className="text-red-600 block text-[5.6rem] leading-[90%]">
                                GAME BREAKER
                                </span>
                            </h1>
                            <p>
                                7 years. Big studios. Real titles. If it exists in your imagination — I'll ship it.
                            </p>

                            <div className="top-buttons">
                                <a className="open-demo" href="#play-latest">
                                    <img src="/icons/gamepad.svg" alt="gamepad icon" width="32" height="32" />
                                    <span>Play Latest Game</span>
                                </a>
                                <a className="open-demo" href="#projects" onClick={handleScrollToProjects}>
                                    <span>See My Projects</span>
                                </a>
                            </div>

                            <div className="logos-wrap mt-8 lg:mt-12 lg:block hidden">
                                <h2 className="text-sm font-semibold text-gray-700 mb-4">Worked with the best</h2>
                                <ul className="logos flex gap-6 flex-wrap justify-start">
                                    <li><img src="/logos/ea.png" alt="EA logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                    <li><img src={segaLogo} alt="SEGA logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                    <li><img src="/logos/zynga.png" alt="Zynga logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                    <li><img src="/logos/king.png" alt="King logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                </ul>
                            </div>
                        </div>
                        <div className="order-3 lg:hidden px-8 pb-8">
                            <div className="logos-wrap">
                                <h2 className="text-sm font-semibold text-gray-700 mb-4 text-center">Worked with the best</h2>
                                <ul className="logos flex gap-6 flex-wrap justify-center">
                                    <li><img src="/logos/ea.png" alt="EA logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                    <li><img src={segaLogo} alt="SEGA logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                    <li><img src="/logos/zynga.png" alt="Zynga logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                    <li><img src="/logos/king.png" alt="King logo" className="h-8 opacity-70 hover:opacity-100 transition"/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <BreathingWavesSection/>

            <section id="projects" className="p-6 md:p-10 mb-20">
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
