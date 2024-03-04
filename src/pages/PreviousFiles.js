import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FilesReferenceCard from "../components/Elements/FilesReferenceCard";

export default function PreviousFiles() {
  const [Files, setFiles] = useState();

  useEffect(() => {
    fetch("https://savenger.no-ip.org:8877/api/data_upload/")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setFiles(res);
      });
  }, []);

  return (
    <Container>
      <h2>Datasets</h2>
      <div className="card-container">
        {Files && Array.isArray(Files) && Files.length > 0 ? (
          React.Children.toArray(
            Files.map((item) => <FilesReferenceCard data={item} />)
          )
        ) : (
          <p className="empty">No data Found</p>
        )}
      </div>
    </Container>
  );
}

const Container = styled.main`
  padding: 24px 16px;
  & > .card-container {
    padding-top: 24px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
    gap: 16px;
    position: relative;
  }
`;
