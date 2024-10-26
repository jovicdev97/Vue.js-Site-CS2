const userLanguage = navigator.language || navigator.userLanguage;
const languagePrefix = userLanguage.startsWith("de") ? "de" : "en";
export default {
  getLanguage: () => languagePrefix,
  getText: (key, dataObject) => {
    return dataObject[languagePrefix][key] || dataObject["en"][key];
  },
};