import React from "react";
import { useAuth } from "react-oidc-context";
import { signOutRedirect } from "../utils/authUtils";
import RecordForm from "./RecordForm";

// Infer the type of `auth` from the `useAuth` hook
type AuthContext = ReturnType<typeof useAuth>;

interface AuthenticatedViewProps {
  auth: AuthContext;
}

// async function handleLogout(auth: AuthContext): Promise<void> {
//   console.log(auth);
//   await auth.removeUser();
//   console.log(auth);
// }

const AuthenticatedView: React.FC<AuthenticatedViewProps> = ({ auth }) => {
  return (
    <div>
      <pre> Hello: {auth.user?.profile?.email ?? "Unknown"} </pre>
      <RecordForm auth={auth}/>
      {/* <pre> ID Token: {auth.user?.id_token ?? "No token"} </pre>
      <pre> Access Token: {auth.user?.access_token ?? "No token"} </pre>
      <pre> Refresh Token: {auth.user?.refresh_token ?? "No token"} </pre> */}

      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
};

export default AuthenticatedView;
