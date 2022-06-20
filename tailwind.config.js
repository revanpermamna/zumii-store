module.exports = {
  
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
}