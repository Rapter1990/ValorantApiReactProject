import React from 'react';

export const languages = [
  { displayName: "Türkçe", lang: "tr-TR" },
  { displayName: "English", lang: "en-US" },
  { displayName: "Deutsch", lang: "de-DE" },
  { displayName: "Español (Latam)", lang: "es-MX" },
  { displayName: "Español (España)", lang: "es-ES" },
  { displayName: "عربى", lang: "ar-AE" },
  { displayName: "日本", lang: "ja-JP" },
  { displayName: "Français", lang: "fr-FR" },
  { displayName: "Italiano", lang: "it-IT" },
  { displayName: "Portugués", lang: "pt-BR" },
  { displayName: "Pусский", lang: "ru-RU" },
  { displayName: "한국인", lang: "ko-KR" },
  { displayName: "ไทย", lang: "th-TH" },
  { displayName: "Tiếng Việt", lang: "vi-VN" },
  { displayName: "钦斯", lang: "zh-CN" },
  { displayName: "台語", lang: "zh-TW" },
];

export const LanguageContext = React.createContext([languages[0].lang, () => {}]);