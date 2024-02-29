import React, { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { aj_res_md, aj_res_sm } from "../settings/responsiveSizes";

export default function Sidebar({ MenuShow, setMenuShow }) {
  const [SearchTxt, setSearchTxt] = useState();

  const navs = [{ title: "Create", href: "/" }, { title: "History" }];

  return (
    <Container className={MenuShow ? "active" : ""}>
      <i
        className="close"
        role="button"
        onClick={() => setMenuShow(false)}
        tabIndex={0}
      />
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={SearchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button>
          <CiSearch />
        </button>
      </div>
      {React.Children.toArray(
        navs.map((item) => (
          <a href={item?.href} className="button">
            {item.title}
          </a>
        ))
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
  @media (max-width: ${aj_res_md}px) {
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
  & > .search {
    @media (min-width: ${aj_res_sm}px) {
      display: none;
    }
    display: grid;
    align-items: center;
    grid-template-columns: 11fr 1fr;
    gap: 0.5rem;
    border: 1px solid var(--aj-gray-100);
    padding: 0.5rem 1rem;
    padding-right: 0.2rem;
    font-size: 1rem;
    border-radius: 0.8rem;
    & > input {
      background-color: transparent;
      border: none;
      outline: none;
    }
    & > button {
      display: flex;
      background-color: transparent;
      border: none;
      outline: none;
      font-size: 1rem;
      cursor: pointer;
    }
  }
  & > .button {
    font-size: 1rem;
    color: var(--aj-dark-100);
    background-color: transparent;
    text-decoration: none;
    border: none;
    outline: none;
    text-align: left;
    padding: 12px 16px;
    border-right: 5px solid transparent;
    cursor: pointer;
    &:hover,
    &:focus-visible {
      background-color: var(--aj-gray-100);
      border-right-color: var(--aj-dark-100);
    }
  }
`;
