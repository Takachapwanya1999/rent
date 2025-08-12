import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Dashboard": "Dashboard",
      "Properties": "Properties",
      "Tenants": "Tenants",
      "Payments": "Payments",
      "Maintenance": "Maintenance",
      "Profile": "Profile",
      "Calendar": "Calendar",
      "Messages": "Messages",
      "Upload": "Upload",
      "Analytics": "Analytics",
      "Audit Log": "Audit Log"
    }
  },
  af: {
    translation: {
      "Dashboard": "Beheerpaneel",
      "Properties": "Eiendomme",
      "Tenants": "Huurders",
      "Payments": "Betalings",
      "Maintenance": "Instandhouding",
      "Profile": "Profiel",
      "Calendar": "Kalender",
      "Messages": "Boodskappe",
      "Upload": "Oplaai",
      "Analytics": "Analise",
      "Audit Log": "Ouditlog"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
