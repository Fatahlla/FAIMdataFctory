import React from "react";
import styled from "styled-components";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function DropDownSelect({
  options = [],
  current,
  setCurrent = function () {},
}) {
  return (
    <Container role="button" tabIndex={0}>
      <AiOutlineCaretDown />
      <div className="menu">
        {options &&
          Array.isArray(options) &&
          options.length > 0 &&
          React.Children.toArray(
            options.map((item) => (
              <button
                onClick={() => setCurrent(item.value)}
                className={`option ${current === item.value ? "active" : ""}`}
              >
                {item.title}
              </button>
            ))
          )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  & > .menu {
    display: none;
  }
  &:hover,
  &:focus-visible {
    & > .menu {
      position: absolute;
      top: 100%;
      right: -7px;
      display: flex;
      flex-direction: column;
      padding: 12px;
      border-radius: 8px;
      background-color: var(--aj-white);
      border: 1px solid var(--aj-gray-200);
      z-index: 10;
      & > .option {
        font-size: 1rem;
        color: var(--aj-dark-100);
        background-color: transparent;
        border: none;
        outline: none;
        text-align: left;
        padding: 8px 16px;
        &.active,
        &:hover,
        &:focus-visible {
          background-color: var(--aj-gray-100);
        }
      }
    }
  }
`;
