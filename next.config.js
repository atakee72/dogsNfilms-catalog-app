// next.config.js
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: [
      "www.themoviedb.org",
      "pbs.twimg.com",
      "hips.hearstapps.com",
      "ohspets.shelterbuddy.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "www.filmposters.com",
    ],
  },
};
