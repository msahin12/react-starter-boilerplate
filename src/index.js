import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Providers from "./Providers";
import { MainRouter } from "SRC/routes";

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Providers>
        <Component />
      </Providers>
    </AppContainer>,
    document.getElementById("root")
  );
};

render(MainRouter);

if (module.hot) {
  module.hot.accept("SRC/routes", () => {
    render(MainRouter);
  });
}
