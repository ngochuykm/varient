import i18next from 'i18next';
import vn from "./vn";
import en from "./en";

i18next.init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: {
      en: {
        translation: en
      },
      vn: {
        translation: vn
      }
    },
  })
  
  export default i18next