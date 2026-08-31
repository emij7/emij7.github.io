export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: "https://emij7.github.io/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://emij7.github.io/",
          es: "https://emij7.github.io/es/",
        },
      },
    },
    {
      url: "https://emij7.github.io/es/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://emij7.github.io/",
          es: "https://emij7.github.io/es/",
        },
      },
    },
  ];
}
