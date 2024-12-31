import React from "react";

// Define the props explicitly
interface ErrorViewProps {
  error: string;
}

const ErrorView: React.FC<ErrorViewProps> = ({ error }) => {
  return <div>Encountering error... {error}</div>;
};

export default ErrorView;
