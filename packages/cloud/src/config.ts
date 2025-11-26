export const PRODUCTION_CLERK_BASE_URL = ""
export const PRODUCTION_GALAXIA_API_URL = ""

export const getClerkBaseUrl = () => process.env.CLERK_BASE_URL || PRODUCTION_CLERK_BASE_URL

export const getGalaxiaApiUrl = () => process.env.GALAXIA_API_URL || PRODUCTION_GALAXIA_API_URL
