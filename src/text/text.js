import heroAppImg from "../images/superApp.png";
import horoscopeAppImg from "../images/horoscope.jpg";

export const text = {
  title: {
    en: "Frontend Developer",
    es: "Desarrollador Frontend",
  },
  portfolioSection: {
    en: "Portfolio",
    es: "Portafolio",
  },
  description: {
    en: "I'm an autodidact who is always learning new things. I use React to build web applications and I'm always looking for new ways to improve my skills. You can see some of my projects in the portfolio section.",
    es: "Soy un autodidacta que siempre está aprendiendo nuevas cosas. Uso React para construir aplicaciones web y siempre estoy buscando nuevas formas de mejorar mis habilidades. Puedes ver algunos de mis proyectos en la sección portafolio.",
  },
  projects: [
    {
      id: 1,
      title: {
        en: "Super-Hero APP",
        es: "Super-Hero APP",
      },
      description: {
        en: "Find characters and create a customized team with heroes and villains",
        es: "Busca personajes y crea tu equipo de heroes y villanos.",
      },
      image: heroAppImg,
      link: "https://emij7.github.io/super-app/",
      tecnologies: [
        "HTML",
        "CSS",
        "Javascript",
        "React.js",
        "Bootstrap",
        "Formik",
      ],
    },
    {
      id: 2,
      title: {
        en: "Horoscope app",
        es: "App horóscopo",
      },
      description: {
        en: "Enter your birthdate to know your horoscope in different cultures.",
        es: "Ingresa tu fecha de nacimiento para conocer cual es tu horóscopo en distintas culturas.",
      },
      image: horoscopeAppImg,
      link: "https://emij7.github.io/Horoscopos/",
      tecnologies: ["HTML", "CSS", "Javascript", "Typescript", "React.js"],
    },
  ],
};
