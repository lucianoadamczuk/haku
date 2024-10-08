import "i18next";

/* --------------------------------- global --------------------------------- */
import metadata from "../locales/es/global/metadata.json";
import routes from "../locales/es/global/routes.json";
import footer from "../locales/es/global/footer.json";
import services from "../locales/es/global/services.json";
import errors from "../locales/es/global/errors.json";
import buttons from "../locales/es/global/buttons.json";
import contact from "../locales/es/global/contact.json";

/* ---------------------------------- home ---------------------------------- */
import headerHome from "../locales/es/home/header.json";
import whoWeAre from "../locales/es/home/whoWeAre.json";
import whatWeOffer from "../locales/es/home/whatWeOffer.json";

/* --------------------------------- service -------------------------------- */
import banner from "../locales/es/service/banner.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: {
      /* --------------------------------- global --------------------------------- */
      "global/metadata": typeof metadata;
      "global/routes": typeof routes;
      "global/footer": typeof footer;
      "global/services": typeof services;
      "global/errors": typeof errors;
      "global/buttons": typeof buttons;
      "global/contact": typeof contact;

      /* ---------------------------------- home ---------------------------------- */
      "home/header": typeof headerHome;
      "home/whoWeAre": typeof whoWeAre;
      "home/whatWeOffer": typeof whatWeOffer;

      /* --------------------------------- service -------------------------------- */
      "service/banner": typeof banner;
    };
  }
}
