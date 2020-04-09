module.exports = {
  files: ["./main.js"],
  server: true,
  open: false,
  plugins: [
    {
      module: "bs-html-injector",
      options: {
        files: ["./*.html"],
      },
    },
  ],
};
