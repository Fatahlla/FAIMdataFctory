import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import UploadFile from "./pages/UploadFile";
import VisualizeData from "./pages/VisualizeData";
import NotFound from "./pages/NotFound";

export default function App() {
  const [MenuShow, setMenuShow] = useState(false);
  return (
    <>
      <Header MenuShow={MenuShow} setMenuShow={setMenuShow} />
      <Container>
        <Sidebar MenuShow={MenuShow} setMenuShow={setMenuShow} />
        <div className="body">
          <Routes>
            <Route path="/" element={<UploadFile />} />
            <Route path="/upload" element={<UploadFile />} />
            <Route path="/confirm" element={<VisualizeData />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
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
