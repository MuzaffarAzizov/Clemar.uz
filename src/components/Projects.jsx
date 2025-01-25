import React from "react";
import { useTranslation } from "react-i18next"; // Add i18n translation hook
import magicCity from "/assets/magicCity.webp";
import gardens from "/assets/gardens.webp";
import fonon from "/assets/fonon.webp";
import Invento from "/assets/Invento.webp";
import presidential from "/assets/presidential.webp";
import boulevard from "/assets/boulevard.webp";

const Projects = () => {
  const { t } = useTranslation(); // Hook to access translation

  return (
    <section className="bg-[#fce8bd] py-8">
      <h2 className="text-black font-bold mb-6 text-[30px] font-medium opacity-80 text-center font-sfPro not-italic leading-[1.366]">
        {t("projects.title")} {/* Translation for "Our Projects" */}
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 px-4">
        <div className="group relative flex flex-col items-center">
          <img
            src={magicCity}
            alt="Project 1"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-lg"
          />
          <p className="absolute bottom-0 left-0 right-0 mx-20 py-12 text-white text-[22px] font-sfPro">
            {t("projects.project1")} {/* Translation for "Magic City" */}
          </p>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-[16px] font-sfPro mx-16 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{t("projects.description")}</p>{" "}
            {/* Translation for project description */}
          </div>
        </div>

        <div className="group relative flex flex-col items-center">
          <img
            src={gardens}
            alt="Project 2"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-lg"
          />
          <p className="absolute bottom-0 left-0 right-0 mx-20 py-12 text-white text-[22px] font-sfPro bg-gradient-to-t from-black to-transparent">
            {t("projects.project2")} {/* Translation for "Gardens" */}
          </p>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-[16px] font-sfPro bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{t("projects.description")}</p>
          </div>
        </div>

        <div className="group relative flex flex-col items-center">
          <img
            src={fonon}
            alt="Project 3"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-lg"
          />
          <p className="absolute bottom-0 left-0 right-0 mx-20 py-12 text-white text-[22px] font-sfPro bg-gradient-to-t from-black to-transparent">
            {t("projects.project3")} {/* Translation for "Fonon" */}
          </p>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-[16px] font-sfPro bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{t("projects.description")}</p>
          </div>
        </div>

        <div className="group relative flex flex-col items-center">
          <img
            src={Invento}
            alt="Project 4"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-lg"
          />
          <p className="absolute bottom-0 left-0 right-0 mx-20 py-12 text-white text-[22px] font-sfPro bg-gradient-to-t from-black to-transparent">
            {t("projects.project4")} {/* Translation for "Invento" */}
          </p>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-[16px] font-sfPro bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{t("projects.description")}</p>
          </div>
        </div>

        <div className="group relative flex flex-col items-center">
          <img
            src={presidential}
            alt="Project 5"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-lg"
          />
          <p className="absolute bottom-0 left-0 right-0 mx-20 py-12 text-white text-[22px] font-sfPro bg-gradient-to-t from-black to-transparent">
            {t("projects.project5")} {/* Translation for "Presidential" */}
          </p>
          <div className="absolute bottom-0 left-0 right-0 mx-20 py-12 text-white text-[16px] font-sfPro bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{t("projects.description")}</p>
          </div>
        </div>

        <div className="group relative flex flex-col items-center">
          <img
            src={boulevard}
            alt="Project 6"
            className="w-full max-w-[600px] h-[350px] object-cover rounded-lg"
          />
          <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-[22px] font-sfPro bg-gradient-to-t from-black to-transparent">
            {t("projects.project6")} {/* Translation for "Boulevard" */}
          </p>
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-[16px] font-sfPro bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p>{t("projects.description")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
