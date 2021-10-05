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
        "LU":"చివరిగా అప్‌డేట్  అయ్యింది:",
      "Dash":"డాష్బోర్డ్",
      "Charts":"గణాంకాలు",
      "TDS":"టీ . డీ . ఏ స్ ",
      "pH":"పీ . హె చ్ ",
      "Turb":"తర్బిడీటీ ",
      "EC": "విద్యుత్ కండక్టివిటీ",
      "Temp": "ఉష్ణోగ్రత ",
      "Hist":"చరిత్ర ",
      "PID":"పంపు గుర్తింపు ",
      "Search":"వెతకండి ",
      "Dt":"తేదీ ",
      "Time":"సమయం",
      "Sum":"సారాంశం",
      "rows":"వరసలు ",
      "WQH": "నీటి నాణ్యతా చరిత్ర",
      "WQS":"నీటి నాణ్యతా సారాంశం ",
      "Worse":"చాలా చెడుగా ఉన్నాది ",
      "Bad":"చెడుగా ఉన్నది ",
      "Good":"బాగుంది ",
      "VGood":"చాలా బాగుందీ ",
      "UFC":"వినియోగానికి పనికిరాదు ",
      "WSFEUO":"బయట వినియోగానికి మాత్రమే సరిపడే నీరు, సేవించుట హానికరం. ",
      "RO": "వినియోగానికి ముందు RO  ఫిల్టరేషన్  మరియు మంచి ఉడకబెట్టడం అవసరం. ళేకపోతే UV  ఫిల్టరేషన్  కూడా చేయవచ్చు.",
      "SD":"వినియోగానికి ముందు సేదిమెంట్ ఫిల్టరేషన్ మరియు మంచి ఉడకబెట్టడం అవసరం.",
      "DU": "నీరు రోజువారీ ఇంటి పనులకు వినియోగించవచ్చు.",
      "BO":"వినియోగానికి ముందు ఉడకబెట్టడం అవసరం.",
      "DDU": "నీరు నేరుగా రోజువారీ ఇంటి పనులకు వినియోగించవచ్చు."
    }
  },
  kn : {
    translation: {
      "LU":"ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ:",
      "Dash":"ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      "Charts":"ಚಾರ್ಟ್",
      "TDS":"ಟಿಡಿಎಸ್",
      "pH":"ಪೀ ಹೆಶ್",
      "Turb":"ಪ್ರಕ್ಷುಬ್ಧತೆ",
      "EC": "ವಿದ್ಯುತ್ ವಾಹಕತೆ",
      "Temp": "ತಾಪಮಾನ",
      "Hist":"ಇತಿಹಾಸ",
      "PID":"ಪಂಪ್ ಐಡಿ",
      "Search":"ಹುಡುಕಿ",
      "Dt":"ದಿನಾಂಕ",
      "Time":"ಸಮಯ",
      "Sum":"ಸಾರಾಂಶ",
      "rows":"ಸಾಲುಗಳು",
      "WQH": "ನೀರಿನ ಗುಣಮಟ್ಟದ ಇತಿಹಾಸ",
      "WQS":"ನೀರಿನ ಗುಣಮಟ್ಟದ ಸಾರಾಂಶ",
      "Worse":"ಕೆಟ್ಟದಾಗಿದೆ",
      "Bad":"ಕೆಟ್ಟದು",
      "Good":"ಉತ್ತಮ",
      "VGood":"ತುಂಬಾ ಒಳ್ಳೆಯದು",
      "UFC":"ಬಳಕೆಗೆ ಅನರ್ಹ",
      "WSFEUO":"ನೀರು ಬಾಹ್ಯ ಬಳಕೆಗೆ ಮಾತ್ರ ಸೂಕ್ತವಾಗಿದೆ!",
      "RO": "RO ಶೋಧನೆ ಮತ್ತು ಉತ್ತಮ ಕುದಿಯುವ / UV ಶೋಧನೆ ಬಳಕೆಗೆ ಮೊದಲು ಅಗತ್ಯವಿದೆ",
      "SD":"ಸೇಡಿಮೆಂಟ್ ಶೋಧನೆ ನಂತರ ಕುದಿಯುವ ನಂತರ ಸೇವಿಸುವ ಮೊದಲು ಅಗತ್ಯವಿದೆ",
      "DU": "ದೇಶೀಯ ಬಳಕೆ ಸೂಕ್ತವಾದ ನೀರು",
      "BO":"ಕೊಡುವ ಮೊದಲು ಕುದಿಸಬೇಕು",
      "DDU": "ನೇರ ದೇಶೀಯ ಬಳಕೆ ಸೂಕ್ತವಾದ ನೀರು"
    }
  }
  
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
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