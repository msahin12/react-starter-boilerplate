import { useState, useCallback } from "react";

export const HomePage = () => {
  const [state, setState] = useState("HomePage");

  const handleClick = useCallback(() => {
    setState("HomePage State Changed");
  }, []);
  return (
    <div>
      <h1 data-testid="title">{state}</h1>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
};
