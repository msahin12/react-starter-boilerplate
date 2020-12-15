import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import Providers from "./Providers";
import MainRouter from "SRC/router";

const render = (Component) => {
  ReactDOM.render(
    <Providers>
      <Component />
    </Providers>,
    document.getElementById("root")
  );
};

render(hot(MainRouter));
