import heroAppImg from "../images/superApp.png";
import horoscopeAppImg from "../images/horoscope.jpg";
import formEmuImg from "../images/formemu.jpg";
import monsterFinderImg from "../images/monsterFinder.png";
import shopImg from "../images/shop.jpg";
import nextJsImg from "../images/nextCourse.jpg";

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
  newSite: {
    en: "New site coming soon!",
    es: "¡Próximamente nueva página!",
  },
  projects: [
    {
      id: 1,
      title: {
        en: "Shop ",
        es: "Tienda ",
      },
      description: {
        en: "Buy sportswear",
        es: "Compra ropa deportiva",
      },
      image: shopImg,
      link: "https://capstone-project-emij7.vercel.app/",
      tecnologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Styled Comp.",
        "React.js",
        "Redux Toolkit",
      ],
    },
    {
      id: 2,
      title: {
        en: "Monster Finder",
        es: "Buscador de monstrous",
      },
      description: {
        en: "Find monsters. Project to practice in ZTM course",
        es: "Busca Monstruos. Proyecto de práctica en curso de ZTM",
      },
      image: monsterFinderImg,
      link: "https://monsters-emij7.vercel.app/",
      tecnologies: ["HTML", "CSS", "Javascript", "React.js"],
    },
    {
      id: 3,
      title: {
        en: "Super-Hero ",
        es: "Super-Hero ",
      },
      description: {
        en: "Find characters and create your team with heroes and villains. Made it to complete a challenge.",
        es: "Busca personajes y crea tu equipo de heroes y villanos. Hecho para un challenge.",
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
      id: 4,
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
    {
      id: 5,
      title: {
        en: "FormEmu",
        es: "FormEmu",
      },
      description: {
        en: "Form to subscribe information to a database. Made it to complete a challenge.",
        es: "Formulario para enviar información a una base de datos. Hecho para un challenge.",
      },
      image: formEmuImg,
      link: "https://formem.vercel.app/",
      tecnologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "React.js",
        "Firebase",
        "Styled Comp.",
      ],
    },
    {
      id: 6,
      title: {
        en: "Next.js course.",
        es: "Curso Next.js.",
      },
      description: {
        en: "Next.js course from official documentation. https://nextjs.org/learn",
        es: "Curso para aprender next.js desde documentación oficial. https://nextjs.org/learn",
      },
      image: nextJsImg,
      link: "https://emij7-nextcourse.vercel.app/",
      tecnologies: ["HTML", "CSS", "Tailwind", "Next.js", "React.js"],
    },
  ],
};
