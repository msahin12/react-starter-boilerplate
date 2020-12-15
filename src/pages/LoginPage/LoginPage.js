import { useState, useCallback } from "react";

export const LoginPage = () => {
  const [state, setState] = useState("LoginPage");

  const handleClick = useCallback(() => {
    setState("LoginPage State Changed");
  }, []);
  return (
    <div>
      <h1 data-testid="title">{state}</h1>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
};
