import React from "react";
import { signOutRedirect } from "../utils/authUtils";
import { useAuth } from "react-oidc-context";

// Infer the type of `auth` from the `useAuth` hook
type AuthContext = ReturnType<typeof useAuth>;

// Define the props explicitly
interface UnauthenticatedViewProps {
  auth: AuthContext;
}

const UnauthenticatedView: React.FC<UnauthenticatedViewProps> = ({ auth }) => {
  return (
    <div>
      <button onClick={() => auth.signinRedirect()}>Sign in</button>
      <button onClick={() => signOutRedirect()}>Sign out</button>
    </div>
  );
};

export default UnauthenticatedView;
