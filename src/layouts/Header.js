import React from "react";
import styled from "styled-components";

export default function Header({ MenuShow, setMenuShow }) {
  return (
    <Container>
      <header>
        <div className="left">
          <i
            className="icon"
            role="button"
            onClick={() => setMenuShow(true)}
            tabIndex={0}
          />
          <a href="/" className="logo">
            dicoFaim
          </a>
        </div>
      </header>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--aj-header-bg);
  border-bottom: 1px solid var(--aj-gray-100);
  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: min(1440px, 100%);
    margin: 0 auto;
    padding: 16px 24px;
    & > .left {
      display: flex;
      align-items: center;
      gap: 12px;
      & > .icon {
        display: inline;
        width: 20px;
        height: 2px;
        background-color: var(--aj-dark);
        position: relative;
        &::after,
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--aj-dark);
        }
        &::before {
          top: -6px;
        }
        &::after {
          bottom: -6px;
        }
        @media (min-width: 780px) {
          display: none;
        }
      }
      & > .logo {
        color: var(--aj-dark);
        text-decoration: none;
        font-weight: 500;
        font-size: 1.15rem;
      }
    }
  }
`;
