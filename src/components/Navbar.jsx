import React from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  // Function to change the language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section
      className="bg-cover bg-no-repeat bg-center text-white w-full h-screen relative"
      style={{
        backgroundImage: "url('/assets/header.jpeg')",
        backgroundSize: "cover",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-[1]" />

      {/* Navbar */}
      <nav className="relative z-[2] w-full py-4">
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-12">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-10 mr-4" />
            <span className="font-bold text-lg">{t("navbar.title")}</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about-us" className="text-white hover:text-blue-400">
              {t("navbar.about_us")}
            </a>
            <a href="#enterprises" className="text-white hover:text-blue-400">
              {t("navbar.enterprises")}
            </a>
            <a href="#advantages" className="text-white hover:text-blue-400">
              {t("navbar.advantages")}
            </a>
            <a href="#news" className="text-white hover:text-blue-400">
              {t("navbar.news")}
            </a>
            <a href="#contact" className="text-white hover:text-blue-400">
              {t("navbar.contact")}
            </a>
          </div>

          {/* Language Switcher */}
          <div className="flex space-x-2">
            <button
              onClick={() => changeLanguage("en")}
              className="text-white hover:text-blue-400"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("uz")}
              className="text-white hover:text-blue-400"
            >
              UZ
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className="text-white hover:text-blue-400"
            >
              RU
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-[2] flex flex-col justify-center items-center h-[80%] px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
          {t("navbar.main_title")}
        </h1>
        <p className="text-lg lg:text-xl font-light leading-relaxed mb-6">
          {t("navbar.description")}
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
            {t("navbar.projects_button")}
          </button>
          <button className="px-6 py-3 bg-transparent border-[1px] border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition">
            {t("navbar.contact_button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
