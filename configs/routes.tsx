export const Routes = {
  HOME: '/',
  PROFILE: (username: string) => `/m/${username}`,
  PROFILE_COLLECTIONS: (username: string) => `/m/${username}/collections`,
  PROFILE_COLLECTION: (username: string, collection: string) =>
    `/m/${username}/collections/${collection}`,
  SETTINGS: '/settings',
  EXPLORE: '/explore',
  SIGNOUT: '/signout',
}
