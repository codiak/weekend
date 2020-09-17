import App from "next/app";
import stylesheet from "antd/dist/antd.min.css";
import "../style.css";
import { Auth0Provider } from "@auth0/auth0-react";


class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    // TODO: dyanmically define redirectUri
    return  <Auth0Provider
        domain="dev-ak382c1x.auth0.com"
        clientId="G16Em7FW2l9jBA0B53X84n9w6eQIBfcV"
        redirectUri="https://dev.wkend.work"
      >
      <Component {...pageProps} />
    </Auth0Provider>
  }
}

export default Application;
