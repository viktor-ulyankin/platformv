import React from "react";
import "./Layout.css";

const Layout = ({ children }) => (
  <main className="layout">
    { children }
  </main>
);

export default Layout;