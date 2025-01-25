import React from "react";
import { useTranslation } from "react-i18next";
import exchange1 from "/assets/exchange1.jpg";
import exchange2 from "/assets/exchange2.jpg";
import exchange3 from "/assets/exchange3.jpg";
import exchange4 from "/assets/exchange4.jpg";
import exchange5 from "/assets/exchange5.jpg";
import exchange6 from "/assets/exchange6.jpg";
import exchange7 from "/assets/exchange7.jpg";
import exchange8 from "/assets/exchange8.jpg";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-8">
      <h2 className="text-black font-bold mb-6 text-[30px] font-medium opacity-80 text-center font-sfPro not-italic leading-[1.366]">
        {t("yourDreamHome")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">
        {/* Image 1 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange1}
            alt={t("dreamHome") + " 1"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange2}
            alt={t("dreamHome") + " 2"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange3}
            alt={t("dreamHome") + " 3"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 4 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange4}
            alt={t("dreamHome") + " 4"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 5 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange5}
            alt={t("dreamHome") + " 5"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 6 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange6}
            alt={t("dreamHome") + " 6"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 7 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange7}
            alt={t("dreamHome") + " 7"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>

        {/* Image 8 */}
        <div className="overflow-hidden relative">
          <img
            src={exchange8}
            alt={t("dreamHome") + " 8"}
            className="w-full h-[full] object-cover transform hover:scale-125 hover:z-10 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
