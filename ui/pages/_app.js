import App from "next/app";
import stylesheet from "antd/dist/antd.min.css";

class Application extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default Application;
