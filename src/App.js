import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Main from "./components/main/Main";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Content>
          <Main />
        </Content>
        <Footer />
      </div>
    </>
  );
};

export default App;
