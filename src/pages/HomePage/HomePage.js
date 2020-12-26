import { useState, useCallback, useContext } from "react";
import { appContext } from "SRC/context/AppContext";
import { useQuery } from "react-query";

export const HomePage = () => {
  const { test } = useContext(appContext);
  const [state, setState] = useState(test);

  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      "https://api.github.com/repos/tannerlinsley/react-query"
    ).then((res) => res.json())
  );

  const handleClick = useCallback(() => {
    setState("HomePage State Changed");
  }, []);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1 data-testid="title">{state}</h1>
      <button onClick={handleClick}>Change State</button>
      <hr />
      <h1>{data.name}</h1>
      <strong>👀 {data.subscribers_count}</strong>
      <strong>✨ {data.stargazers_count}</strong>
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
    </div>
  );
};
