import React from "react";
import { useAuth } from "react-oidc-context";
import AuthenticatedView from "./components/AuthenticatedView";
import UnauthenticatedView from "./components/UnauthenticatedView";
import LoadingView from "./components/LoadingView";
import ErrorView from "./components/ErrorView";

const App: React.FC = () => {
  const auth = useAuth();
  

  if (auth.isLoading) {
    return <LoadingView />;
  }

  if (auth.error) {
    return <ErrorView error={auth.error.message} />;
  }

  if (auth.isAuthenticated) {
    
    return <AuthenticatedView auth={auth} />;
  }

  return <UnauthenticatedView auth={auth} />;

};

export default App;
