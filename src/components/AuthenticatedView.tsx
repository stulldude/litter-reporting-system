import React from "react";
import { useAuth } from "react-oidc-context";

// Infer the type of `auth` from the `useAuth` hook
type AuthContext = ReturnType<typeof useAuth>;

interface AuthenticatedViewProps {
  auth: AuthContext;
}

const AuthenticatedView: React.FC<AuthenticatedViewProps> = ({ auth }) => {
  return (
    <div>
      <pre> Hello: {auth.user?.profile?.email ?? "Unknown"} </pre>
      <pre> ID Token: {auth.user?.id_token ?? "No token"} </pre>
      <pre> Access Token: {auth.user?.access_token ?? "No token"} </pre>
      <pre> Refresh Token: {auth.user?.refresh_token ?? "No token"} </pre>

      <button onClick={() => auth.removeUser()}>Sign out</button>
    </div>
  );
};

export default AuthenticatedView;
