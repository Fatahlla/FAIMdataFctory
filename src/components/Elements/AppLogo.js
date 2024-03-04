import React from "react";
import styled from "styled-components";

export default function AppLogo() {
  return <Container href="/">dicoFaim</Container>;
}

const Container = styled.a`
  color: var(--aj-dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.15rem;
`;
