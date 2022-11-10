export const checkEnv = () => {
  if (!process.env.SQUARE_APP_ID) {
    throw new Error(
      "No Square App ID found. SQUARE_APP_ID must be set as " +
        "an environmental variable. See the README.md for " +
        "additional details."
    )
  }
  if (!process.env.SQUARE_ACCESS_TOKEN) {
    throw new Error(
      "No Square Access token found. SQUARE_ACCESS_TOKEN must " +
        "be set as an environmental variable. See README.md for" +
        "additional details."
    )
  }
}

export const calculateCartTotal = () => {
  return "1000"
}

export const getLocationId = () => {
  return process.env.SQUARE_MAIN_LOCATION_ID
}
