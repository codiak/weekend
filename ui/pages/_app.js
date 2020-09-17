import App from "next/app";
import stylesheet from "antd/dist/antd.min.css";
import "../style.css";
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: determine if disabling "SSR"/pre-render is a better option
if (typeof window === "undefined") {
  var window = { location: { origin: 'wkend.work' } };
}

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    return  <Auth0Provider
        domain="dev-ak382c1x.auth0.com"
        clientId="G16Em7FW2l9jBA0B53X84n9w6eQIBfcV"
        redirectUri={window.location.origin}
      >
      <Component {...pageProps} />
    </Auth0Provider>
  }
}

export default Application;
