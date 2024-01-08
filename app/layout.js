import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/fonts.css";
import { ToastContainer, Slide } from "react-toastify";
import ReduxProvider from "../redux/provider";
import StyledComponentsRegistry from "./registry";

export const metadata = {
  title: "Sunfox Solar Cost and Savings Calculator",
  description: "Sunfox Solar System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <meta name="theme-color" content="#000000" />
     </head>
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          <ToastContainer
            closeButton={true}
            hideProgressBar={true}
            position="top-right"
            transition={Slide}
            autoClose={3000}
        />
      </ReduxProvider>
      </body>
    </html>
  );
}
