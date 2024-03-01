import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
      {
        Files && React.Children.toArray(Files.map((item) => <a href={"/confirm?id=" + item.id}>{item.file}</a>))
      }
    </Container>
  );
}

const Container = styled.main`
  padding: 24px 16px;
`;
