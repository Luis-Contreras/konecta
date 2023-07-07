import React from "react";
import {Layout} from "./components";
import Main from "./views/main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Layout>
            <Main />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
