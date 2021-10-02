import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation: {
      "LU":"Last Updated:",
      "Dash":"Dashboard",
      "Charts":"Charts",
      "TDS":"TDS",
      "pH":"pH",
      "Turb":"Turbidity",
      "EC": "Electrical Conductivity",
      "Temp": "Temperature",
      "Hist":"History",
      "PID":"Pump ID",
      "Search":"Search",
      "Dt":"Date",
      "Time":"Time",
      "Sum":"Summary",
      "rows":"rows",
      "WQH": "Water Quality History",
      "WQS":"Water Quality Summary",
      "Worse":"Worse",
      "Bad":"Bad",
      "Good":"Good",
      "VGood":"Very Good",
      "UFC":"Unfit for consumption",
      "WSFEUO":"Water suitable for external use only!",
      "RO": "RO filtration and good boiling / UV filtration required before consumption",
      "SD":"Sediment filtration followed by good boiling required before consumption",
      "DU": "Water suitable for domestic usage",
      "BO":"Boiling required before consumption",
      "DDU": "Water suitable for direct domestic usage"
    }
  },
  hn: {
    translation: {
      "LU":"अंतिम अपडेट:",
      "Dash":"डैशबोर्ड",
      "Charts":"चार्ट",
      "TDS":"टीडीएस",
      "pH":"पीएच",
      "Turb":"मैलापन",
      "EC": "विद्युत चालकता",
      "Temp": "तापमान",
      "Hist":"इतिहास",
      "PID":"पंप आईडी",
      "Search":"खोज",
      "Dt":"दिनांक",
      "Time":"समय",
      "Sum":"सारांश",
      "rows":"पंक्तियां",
      "WQH": "जल गुणवत्ता इतिहास",
      "WQS":"जल गुणवत्ता सारांश",
      "Worse":"सबसे खराब",
      "Bad":"खराब",
      "Good":"अच्छा",
      "VGood":"बहुत अच्छा",
      "UFC":"उपभोग के लिए अनुपयुक्त",
      "WSFEUO":"पानी केवल बाहरी उपयोग के लिए उपयुक्त है!",
      "RO": "पानी का प्रयोग करने से पहले आर.ओ. फिल्टरेशन या यू.वी. फिल्टरेशन से गुजारे और अच्छे से उबालें",
      "SD":"पानी सेवन करने से पहले छाने और उबालें",
      "DU": "पानी घरेलू उपयोग के लिए उपयुक्त है",
      "BO":"सेवन से पहले पानी को उबालें",
      "DDU": "सीधे घरेलू उपयोग के लिए उपयुक्त पानी"
    }
  },
  te : {
    translation: {
        "LU":"",
      "Dash":"",
      "Charts":"",
      "TDS":"",
      "pH":"",
      "Turb":"",
      "EC": "",
      "Temp": "",
      "Hist":"",
      "PID":"",
      "Search":"",
      "Dt":"",
      "Time":"",
      "Sum":"",
      "rows":"",
      "WQH": "నీటి నాణ్యతా చరిత్ర",
      "WQS":"",
      "Worse":"",
      "Bad":"",
      "Good":"",
      "VGood":"",
      "UFC":"",
      "WSFEUO":"",
      "RO": "",
      "SD":"",
      "DU": "",
      "BO":"",
      "DDU": ""
    }
  },
  kn : {
    translation: {
      
      "LU":"",
      "Dash":"",
      "Charts":"",
      "TDS":"",
      "pH":"",
      "Turb":"",
      "EC": "",
      "Temp": "",
      "Hist":"",
      "PID":"",
      "Search":"",
      "Dt":"",
      "Time":"",
      "Sum":"",
      "rows":"",
      "WQH": "ನೀರಿನ ಗುಣಮಟ್ಟದ ಇತಿಹಾಸ",
      "WQS":"",
      "Worse":"",
      "Bad":"",
      "Good":"",
      "VGood":"",
      "UFC":"",
      "WSFEUO":"",
      "RO": "",
      "SD":"",
      "DU": "",
      "BO":"",
      "DDU": ""
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
/* Template for other languages, "<lang code>" : "content" Add new languages in SelectLanguage.js,
      "LU":"",
      "Dash":"",
      "Charts":"",
      "TDS":"",
      "pH":"",
      "Turb":"",
      "EC": "",
      "Temp": "",
      "Hist":"",
      "PID":"",
      "Search":"",
      "Dt":"",
      "Time":"",
      "Sum":"",
      "rows":"",
      "WQH": "",
      "WQS":"",
      "Worse":"",
      "Bad":"",
      "Good":"",
      "VGood":"",
      "UFC":"",
      "WSFEUO":"",
      "RO": "",
      "SD":"",
      "DU": "",
      "BO":"",
      "DDU": ""
    */