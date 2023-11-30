import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { invariant } from "./invariant.ts";
import { isDefined } from "./isDefined.ts";

const activateLocale = async (locale: "en"|"cs"|"fr") => {
  const { messages } = await ({
      "en": import("./locales/en.po"),
      "cs": import("./locales/cs.po"),
      "fr": import("./locales/fr.po"),
  }[locale]);

  i18n.loadAndActivate({ locale, messages });
}

await activateLocale("en");

const rootNode = document.getElementById("root");

invariant(isDefined(rootNode));

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
