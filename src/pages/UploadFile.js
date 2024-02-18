import React from "react";
import styled from "styled-components";
import { LuUploadCloud } from "react-icons/lu";

export default function UploadFile() {
  function handleUpload(e) {
    e.preventDefault();
  }
  return (
    <Container>
      <div className="upload">
        <LuUploadCloud className="aj-icon-ex" />{" "}
        <span>Upload or drag and drop a CSV file.</span>
        <span>Max size 30 MB</span>
        <input type="file" accept="text/csv" onChange={handleUpload} />
      </div>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 100%;
  overflow-y: auto;
  & > .upload {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    justify-content: center;
    width: min(760px, 100%);
    padding: 24px;
    border: 2px dashed var(--aj-dark-100);
    border-radius: 16px;
    text-align: center;
    position: relative;
    & > input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
  }
`;
