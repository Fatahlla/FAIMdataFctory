import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import UploadFile from "./pages/UploadFile";
import VisualizeData from "./pages/VisualizeData";
import NotFound from "./pages/NotFound";
import PreviousFiles from "./pages/PreviousFiles";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [MenuShow, setMenuShow] = useState(false);

  const PAGES = [
    { path: "/sign-in", element: <Login />, setup: "none" },
    { path: "/register", element: <Register />, setup: "none" },
    { path: "/", element: <UploadFile />, setup: "all" },
    { path: "/upload", element: <UploadFile />, setup: "all" },
    { path: "/confirm", element: <VisualizeData />, setup: "all" },
    { path: "/history", element: <PreviousFiles />, setup: "all" },
  ];

  return (
    <>
      <Header MenuShow={MenuShow} setMenuShow={setMenuShow} />
      <Container>
        <Routes>
          {React.Children.toArray(
            PAGES.map((page) =>
              page?.setup === "none" ? (
                <Route path={page?.path} element={page?.element} />
              ) : (
                <Route
                  path={page?.path}
                  element={
                    <>
                      <Sidebar MenuShow={MenuShow} setMenuShow={setMenuShow} />
                      <div className="body">{page?.element}</div>
                    </>
                  }
                />
              )
            )
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: min(1440px, 100%);
  margin: 0 auto;
  display: flex;
  background-color: var(--aj-cream);
  height: calc(100dvh - (25px + 32px));
  overflow: hidden;
  & > .body {
    flex: 10;
    height: 100%;
    overflow-y: auto;
  }
`;
