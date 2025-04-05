import React, { useState } from 'react';
import androidIcon from '../assets/icons/android.svg';
import iosIcon from '../assets/icons/ios.svg';
import appStoreIcon from '../assets/icons/appstore.svg';
import playStoreIcon from '../assets/icons/playstore.svg';
import webIcon from '../assets/icons/web.svg';

type PlatformLinks = {
  android?: string;
  ios?: string;
  web?: string;
  appStore?: string;
  playStore?: string;
};

type GameCardProps = {
  data: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    technologies: string;
    date: string;
    platformsTile: PlatformLinks;
    platformsCard: PlatformLinks;
  };
};

const GameCard: React.FC<{ data: GameCardProps['data'] }> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <article className="bg-gray-300 dark:bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">
        <img
            src={data.image}
            alt={data.title}
            className="rounded mb-4 w-full object-cover aspect-video"
        />
        <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-300 mb-2">
          {data.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          {data.description}
        </p>
        
        {/* Версія для десктопу */}
        <div className="hidden sm:flex items-center gap-3 mt-2 flex-wrap w-full">
          {data.platformsTile.android 
              && <a 
                  href={data.platformsTile.android} target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 hover:shadow hover:scale-105 text-white px-4 py-2 rounded-full text-sm transition">
            <img src={androidIcon} alt="Android Icon" className="w-5 h-5" />
            Android</a>}
          {data.platformsTile.ios 
              && <a href={data.platformsTile.ios} target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-neutral-100 border border-gray-400 hover:bg-blue-200 text-black hover:shadow hover:scale-105 px-4 py-2 rounded-full text-sm transition dark:border-none">
            <img src={iosIcon} alt="iOS Icon" className="w-5 h-5" />
            iOS</a>}
          {data.platformsTile.web 
              && <a href={data.platformsTile.web} target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-500 text-white hover:shadow hover:bg-blue-700 hover:scale-105 px-4 py-2 rounded-full text-sm transition">
                <img src={webIcon} alt="web Icon" className="w-5 h-5" />
                Web</a>}
          <button 
              onClick={() => setShowModal(true)} 
              className="bg-cyan-500 hover:bg-cyan-600 hover:shadow hover:scale-105 text-white px-4 py-2 rounded-full transition text-sm">
            More Info
          </button>
          <span className="ml-auto text-xs text-gray-500 italic">
            {data.date}
          </span>
        </div>
        
        {/* Версія для мобілок */}
        <div className="flex sm:hidden flex-col mt-2 w-full">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700 dark:text-white">Play:</span>
            {data.platformsTile.android
                && <a
                    href={data.platformsTile.android} target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Play HobbEdu on Android"
                    className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:scale-[102%] active:scale-95 active:bg-green-700 transition transform active:shadow-inner">
                  <img src={androidIcon} alt="Android Icon" className="w-5 h-5" />
                  </a>}
            {data.platformsTile.ios
                && <a href={data.platformsTile.ios} target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Play HobbEdu on iOS"
                      className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:scale-[102%] active:scale-95 active:bg-blue-300 transition transform active:shadow-inner">
                  <img src={iosIcon} alt="iOS Icon" className="w-5 h-5" />
                  </a>}
            {data.platformsTile.web
                && <a href={data.platformsTile.web} target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full flex items-center gap-2 bg-blue-500 justify-center hover:scale-[102%] active:scale-95 active:bg-blue-600 transition transform active:shadow-inner">
                  <img src={webIcon} alt="web Icon" className="w-5 h-5" />
                  </a>}
            <button
                onClick={() => setShowModal(true)}
                className="ml-auto bg-cyan-500 text-white px-4 py-2 rounded-full text-sm hover:scale-[102%] active:scale-95 active:bg-cyan-600 transition transform active:shadow-inner">
              More Info
            </button>
          </div>
        </div>
      </article>

      {showModal && (
          <div className="fixed inset-0 z-50 px-4 flex items-center justify-center">
            {/* напівпрозорий фон */}
            <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm animate-fadeIn"></div>

            {/* модальне вікно — ТУТ, на одному рівні з фоном */}
            <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl p-6 max-w-xl w-full shadow-xl animate-scaleIn">
              <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-cyan-500 mb-4">{data.title}</h2>
              <img
                  src={data.image} alt={data.title}
                  className="rounded mb-4 w-full object-cover"
              />
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {data.fullDescription}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                <strong>Technologies:</strong> {data.technologies}
              </p>
              <footer className="flex gap-3 flex-wrap md:flex-nowrap items-center mt-4">
                {data.platformsCard.web 
                    && <a 
                        href={data.platformsCard.web} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 hover:shadow hover:scale-105 px-4 py-2 transition">
                      <img src={webIcon} alt="Web Icon" className="w-5 h-5" />
                      Play in Browser
                </a>}
                {data.platformsCard.playStore 
                    && <a 
                        href={data.platformsCard.playStore} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 hover:shadow hover:scale-105 text-white px-4 py-2 rounded-full transition text-sm whitespace-nowrap">
                  <img src={playStoreIcon} alt="playStore Icon" className="w-5 h-5" />
                  Play on Google Play
                </a>}
                {data.platformsCard.appStore 
                    && <a 
                        href={data.platformsCard.appStore} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white border border-gray-400 hover:bg-blue-300 hover:shadow hover:scale-105 text-black px-4 py-2 rounded-full text-sm transition dark:border-none">
                  <img src={appStoreIcon} alt="appStore Icon" className="w-5 h-5" />
                  Play on App Store
                </a>}
                <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 italic">
                                Developed: {data.date}
                            </span>
              </footer>
            </div>
          </div>
      )}
    </>
  );
};

export default GameCard;
