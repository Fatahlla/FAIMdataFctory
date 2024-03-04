import React, { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { aj_res_sm } from "../settings/responsiveSizes";
import AppLogo from "../components/Elements/AppLogo";

export default function Header({ MenuShow, setMenuShow }) {
  const [SearchTxt, setSearchTxt] = useState();
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
          <AppLogo />
        </div>
        <div className="center">
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
        </div>
        <div className="right">
          <a className="aj-df-button-tertiary" href="/sign-in">
            Sign In
          </a>
          <a className="aj-df-button-dark" href="/register">
            Register
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
    }
    & > .center {
      @media (max-width: ${aj_res_sm}px) {
        display: none;
      }
      & > .search {
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
    }
    & > .right {
      display: flex;
      gap: 0.7rem;
    }
  }
`;
