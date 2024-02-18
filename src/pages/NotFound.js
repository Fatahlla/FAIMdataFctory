import React from "react";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Container>
      <h1>
        This page might be under development.
        <br />
        Feel free to revert back in the future.
      </h1>
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
  text-align: center;
  & > h1 {
    font-size: 1.6rem;
  }
`;
