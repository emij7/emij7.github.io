import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <div className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xl:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full md:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-2xl text-left w-full capitalize">
            Ignacio Emiliano Juarez
          </h2>
          <p className="font-light">
            I'm a passionate fullstack developer with over 2
            years of experience, with strong knowledge of
            Frontend development and a background in backend
            development. I am always eager to learn and grow
            as a developer.
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-6 md:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            5+{" "}
            <sub className="font-semibold text-base">
              {" "}
              projects
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-6 md:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            2+{" "}
            <sub className="font-semibold text-base">
              {" "}
              years of exp.
            </sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full xl:col-span-4 text-accent !p-0"
          }
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=emij7&theme=dark&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
            alt="emij7 github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={
            "col-span-full xl:col-span-8 text-accent !p-0"
          }
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats-eight-theta.vercel.app/api?username=emij7&theme=dark&show_icons=true&include_all_commits=true&count_private=true&hide_border=true&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
            alt="emij7 github stats"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={"col-span-full text-accent "}
        >
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,bootstrap,firebase,github,graphql,laravel,mysql,nextjs,nodejs,npm,postman,react,sass,tailwind,ts,vscode"
            alt="emij7 github stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </div>
  );
};

export default AboutDetails;
