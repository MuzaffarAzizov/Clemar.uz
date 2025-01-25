import React from "react";
import { useTranslation } from "react-i18next";

const Company = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-cover bg-no-repeat bg-center text-white w-full h-[60vh] relative"
      style={{
        backgroundImage: "url('/assets/company.png')",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center h-full px-4 text-center">
        <h3 className="text-2xl lg:text-3xl font-semibold mb-8">
          {t("company.title")}
        </h3>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Number of Employees */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mb-2">120+</p>
            <p className="text-lg font-light">{t("company.employees")}</p>
          </div>

          {/* Objects */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mb-2">43+</p>
            <p className="text-lg font-light">{t("company.objects")}</p>
          </div>

          {/* Special Equipment */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mb-2">250+</p>
            <p className="text-lg font-light">
              {t("company.special_equipment")}
            </p>
          </div>

          {/* Years on the Market */}
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold mb-2">14+</p>
            <p className="text-lg font-light">{t("company.years_on_market")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
