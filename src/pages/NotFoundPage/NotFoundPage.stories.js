import React from "react";
import { storiesOf } from "@storybook/react";

import { NotFoundPage } from "./NotFoundPage";

storiesOf("NotFoundPage", module).add("Default", () => (
  <>
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <NotFoundPage />
    </div>
  </>
));
