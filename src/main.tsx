import { Messages, i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { invariant } from "./invariant.ts";
import { isDefined } from "./isDefined.ts";

const locale = "en";

const { messages } = (await import(`./locales/${locale}.po`)) as {
  messages: Messages;
};

i18n.loadAndActivate({ locale, messages });

const rootNode = document.getElementById("root");

invariant(isDefined(rootNode));

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <I18nProvider i18n={i18n}>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
