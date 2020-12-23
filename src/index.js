import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import Providers from "./providers";
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
