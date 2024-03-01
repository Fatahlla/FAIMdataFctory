import React from "react";
import styled from "styled-components";
import { LuUploadCloud } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function UploadFile() {
  const navigate = useNavigate();
  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    const result = await fetch(
      "https://savenger.no-ip.org:8877/api/data_upload/",
      {
        method: "POST",
        body: formData,
      }
    );
    let id;
    Promise.resolve(result)
      .then((response) => {console.log(response); id = response.id})
      .catch((error) => console.error(error));
    navigate(`/confirm?id=${id}`);
  };

  return (
    <Container>
      <div className="upload">
        <LuUploadCloud className="aj-icon-ex" />{" "}
        <span>Upload or drag and drop a CSV file.</span>
        <span>Max size 30 MB</span>
        <input
          id="file"
          type="file"
          accept="text/csv"
          onChange={handleUpload}
        />
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
