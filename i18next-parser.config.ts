export default {
  locales: ["tr", "en", "fr"],
  keepRemoved: true,
  output: "./public/locales/$LOCALE/translation.json",
  input: ["src/**/*.{js,jsx,ts,tsx}"],
};
