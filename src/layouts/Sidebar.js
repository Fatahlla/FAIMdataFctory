import React from "react";
import styled from "styled-components";

export default function Sidebar({ MenuShow, setMenuShow }) {
  const navs = [{ title: "Create", href: "/" }, { title: "History" }];
  return (
    <Container className={MenuShow ? "active" : ""}>
      <i
        className="close"
        role="button"
        onClick={() => setMenuShow(false)}
        tabIndex={0}
      />
      {React.Children.toArray(
        navs.map((item) => <button className="button">{item.title}</button>)
      )}
    </Container>
  );
}

const Container = styled.aside`
  flex: 2;
  display: flex;
  flex-direction: column;
  /* gap: 12px; */
  background-color: var(--aj-white);
  padding: 12px;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid var(--aj-gray-100);
  & > .close {
    display: none;
  }
  @media (max-width: 780px) {
    display: none;
    &.active {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 80px 24px 24px;
      gap: 12px;
      width: min(80vw, 300px);
      height: 100dvh;
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      background: var(--aj-header-bg);
      z-index: 1200;
      & > .close {
        display: flex;
        width: 20px;
        height: 2px;
        background-color: var(--aj-dark);
        position: absolute;
        top: 32px;
        right: 24px;
        transform: rotate(45deg);
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: var(--aj-dark);
          transform: rotate(90deg);
        }
      }
      & > button {
        width: 100%;
      }
    }
  }
  & > .button {
    font-size: 1rem;
    color: var(--aj-dark-100);
    background-color: transparent;
    border: none;
    outline: none;
    text-align: left;
    padding: 12px 16px;
    border-right: 5px solid transparent;
    &:hover,
    &:focus-visible {
      background-color: var(--aj-gray-100);
      border-right-color: var(--aj-dark-100);
    }
  }
`;
