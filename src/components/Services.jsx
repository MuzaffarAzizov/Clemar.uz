import React from "react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#fce8bd] px-32 py-20">
      <h2 className="text-black font-bold mb-6 text-[30px] font-medium opacity-80 text-center font-sfPro not-italic leading-[1.366]">
        {t("services.title")}
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {/* Card 1 */}
        <div className="bg-[#2c3442] border border-black rounded-[15px] cursor-pointer flex items-center justify-center transition-all duration-500 ease-in-out h-[179px] w-[579px]">
          <p className="text-white text-lg text-center">
            {t("services.card1")}
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2c3442] border border-black rounded-[15px] cursor-pointer flex items-center justify-center transition-all duration-500 ease-in-out h-[179px] w-[400px]">
          <p className="text-white text-lg text-center">
            {t("services.card2")}
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2c3442] border border-black rounded-[15px] cursor-pointer flex items-center justify-center transition-all duration-500 ease-in-out h-[179px] w-[400px]">
          <p className="text-white text-lg text-center">
            {t("services.card3")}
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#2c3442] border border-black rounded-[15px] cursor-pointer flex items-center justify-center transition-all duration-500 ease-in-out h-[179px] w-[579px]">
          <p className="text-white text-lg text-center">
            {t("services.card4")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
