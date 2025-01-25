import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Build = () => {
  const { t } = useTranslation(); // Access the translation function

  return (
    <section
      className="bg-cover bg-no-repeat bg-center py-16 text-white w-full h-screen lg:h-[52em]"
      style={{
        backgroundImage: "url('/assets/learn_more.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-center items-start text-left h-full px-4 sm:px-8 lg:px-32 mx-auto max-w-[1200px] lg:ml-[24em] lg:mr-0">
        <h3 className="text-white font-sfPro text-[24px] not-italic font-normal tracking-[.045em] leading-[28px]">
          {t("Build.title")} {/* Using translation key for title */}
        </h3>
        <h2 className="font-sfPro text-[32px] lg:text-[40px] font-semibold leading-[120%] pt-[20px] max-w-full lg:max-w-[400px] mt-4 lg:mt-8 mb-4 lg:mb-8">
          {t("Build.title")} {/* Using translation key for title */}
        </h2>
        <p className="font-spaceGrotesk text-[14px] lg:text-[16px] font-normal leading-[22px] lg:leading-[25px] pb-6 lg:pb-[100px] w-full lg:w-[32em]">
          {t("Build.description")} {/* Using translation key for description */}
        </p>
        <button className="border-[1px] border-white rounded-[35px] text-white font-sfPro text-[16px] lg:text-[18px] font-medium leading-[136.6%] py-2 lg:py-[10px] px-4 lg:px-[26px] no-underline transition-all duration-300">
          {t("Build.learnMore")} {/* Using translation key for button text */}
        </button>
      </div>
    </section>
  );
};

export default Build;
