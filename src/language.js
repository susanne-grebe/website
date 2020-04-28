export const getRedirectLanguage = () => {
  let userLang = "" // default language is German
  if (typeof navigator === `undefined`) {
    userLang = ""
  }

  const lang =
    navigator && navigator.language && navigator.language.split("-")[0]
  if (!lang) userLang = ""

  switch (lang) {
    case "en":
      userLang = "en" // this will add the www.example.com/en to the url
      break
    case "nl":
      userLang = "" // this will fall back to the default language
      break
    default:
      userLang = "" // this is the default language in this case German
  }

  return userLang // return the value of userLang
}
