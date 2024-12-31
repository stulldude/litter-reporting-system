export const signOutRedirect = (): void => {
    const clientId: string = "2pl82c6cf0mrkr7ni1odtv2n0t";
    const logoutUri: string = "<logout uri>";
    const cognitoDomain: string = "https://us-west-2em13gqmyk.auth.us-west-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };
  