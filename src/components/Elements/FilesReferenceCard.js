import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { GoArrowUpRight } from "react-icons/go";

export default function FilesReferenceCard({ data }) {
  const navigate = useNavigate();

  return (
    <Container
      role="button"
      tabIndex={0}
      onClick={() => navigate("/datasets?id=" + data?.id)}
    >
      <h3>{data?.file?.split("/")?.[4]?.replaceAll("_", " ")}</h3>
      <button className="aj-df-button-primary-text">
        View <GoArrowUpRight className="aj-icon-ex" />
      </button>
    </Container>
  );
}

const Container = styled.div`
  max-width: 500px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  border: 2px solid var(--aj-gray-100);
  border-radius: 12px;
  cursor: pointer;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;
