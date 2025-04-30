module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {
                fadeIn: 'fadeIn  0.3s ease-out forwards',
                scaleIn: 'scaleIn  0.3s ease-out forwards',
                rotate: 'rotate 25s cubic-bezier(0.64, 0.17, 0.46, 0.93) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': {opacity: '0'},
                    '100%': {opacity: '1'},
                },
                scaleIn: {
                    '0%': {opacity: '0', transform: 'scale(0.95)'},
                    '100%': {opacity: '1', transform: 'scale(1)'},
                },
                rotate: {
                    '0%': {
                        transform: 'rotateY(0deg) rotateZ(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                    },
                    '12.5%': {
                        transform: 'rotateY(45deg) rotateZ(7.5deg) rotateX(7.5deg) scale3d(0.9, 0.9, 0.9)',
                    },
                    '25%': {
                        transform: 'rotateY(90deg) rotateZ(15deg) rotateX(15deg) scale3d(1, 1, 1)',
                    },
                    '37.5%': {
                        transform: 'rotateY(135deg) rotateZ(7.5deg) rotateX(7.5deg) scale3d(0.9, 0.9, 0.9)',
                    },
                    '50%': {
                        transform: 'rotateY(180deg) rotateZ(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                    },
                    '62.5%': {
                        transform: 'rotateY(225deg) rotateZ(7.5deg) rotateX(7.5deg) scale3d(0.9, 0.9, 0.9)',
                    },
                    '75%': {
                        transform: 'rotateY(270deg) rotateZ(15deg) rotateX(15deg) scale3d(1, 1, 1)',
                    },
                    '87.5%': {
                        transform: 'rotateY(315deg) rotateZ(7.5deg) rotateX(7.5deg) scale3d(0.9, 0.9, 0.9)',
                    },
                    '100%': {
                        transform: 'rotateY(360deg) rotateZ(0deg) rotateX(0deg) scale3d(1, 1, 1)',
                    },
                },
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)',
            },
            screens: {
                xx: {max: '1100px'}, // 👈 кастомний breakpoint
                xxx: {max: '1600px'},
            },
            height: {
                '1600': '1600px', // якщо хочеш використати як h-1600
            }
        },
    },
    plugins: [],
};
