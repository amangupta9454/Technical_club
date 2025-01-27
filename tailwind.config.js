/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      keyframes: {
        
        tada: {
          '0%': { transform: 'scale(1)' },
          '10%, 20%': { transform: 'scale(0.9) rotate(-3deg)' },
          '30%, 50%, 70%': { transform: 'scale(1.1) rotate(3deg)' },
          '40%, 60%': { transform: 'scale(1.1) rotate(-3deg)' },
          '80%': { transform: 'scale(0.9) rotate(1deg)' },
          '100%': { transform: 'scale(1) rotate(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        tada: 'tada 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'spin-slow': 'spin 10s linear infinite',
        slideIn: "slideIn 1s ease-out",
      },
    },
  },
  plugins: [],
}

