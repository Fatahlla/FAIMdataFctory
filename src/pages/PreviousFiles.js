import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function PreviousFiles() {
  const [Files, setFiles] = useState();

  useEffect(() => {
    // write fetch operation here
  }, []);

  return (
    <Container>
      <h2>Datasets</h2>
    </Container>
  );
}

const Container = styled.main`
  padding: 24px 16px;
`;
