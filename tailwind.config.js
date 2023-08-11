/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        main_title_color: '#161E25',
        main_text_color: '#444C55',
        main_gray: '#A4A8AB',
        main_blue_dark: '#001E50',
        main_blue_bg: '#F2F4F5',
        main_white: '#FFFFFF',
        main_border: '#E3E3E8',
        main_green: '#0E9F57',
        main_red: '#E51F30',
        main_orange: '#F2994A',
        main_yellow: '#F2C94C',
        main_blue_light: '#D6DBE3',
        error: '#E51F30',
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['SFUIDisplay', 'sans'],
      },
      borderColor: {
        main_color: '#E3E3E8',
      },
      backgroundColor: {
        main_title_color: '#161E25',
        main_text_color: '#444C55',
        main_gray: '#A4A8AB',
        main_blue_dark: '#001E50',
        main_blue_bg: '#F2F4F5',
        main_white: '#FFFFFF',
        main_border: '#E3E3E8',
        main_green: '#0E9F57',
        main_red: '#E51F30',
        main_orange: '#F2994A',
        main_yellow: '#F2C94C',
        main_blue_light: '#D6DBE3',
        error: '#E51F30',
        transparent: 'transparent',
      },
      spacing: {
        outlet: 'calc(100vh - 72px)',
      },
    },
  },
  plugins: [],
};
