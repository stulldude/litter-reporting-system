export const signOutRedirect = (): void => {
  const clientId: string = "3oe70iatg9d02osgdl3741pj0v";
  const logoutUri = "http://localhost:5175"; // Use an allowed sign-out URL
  const cognitoDomain: string = "https://us-west-21u63ogbmk.auth.us-west-2.amazoncognito.com";

  // Clear local storage/session tokens
  localStorage.clear();
  sessionStorage.clear();

  // Clear cookies
  // document.cookie.split(";").forEach((c) => {
  //   document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
  // });

  
  window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};
