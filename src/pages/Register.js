import React, { useState } from "react";
import styled from "styled-components";
import AppLogo from "../components/Elements/AppLogo";

export default function Register() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [FullName, setFullName] = useState();
  const [NewsLetter, setNewsLetter] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // write code here
  };
  return (
    <Container>
      <div className="body">
        <div className="logo">
          <AppLogo />
        </div>
        <h2>Register with Email</h2>

        <form onSubmit={handleRegisterSubmit} className="form">
          <div className="element">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="element">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="element">
            <label htmlFor="FullName">Full Name</label>
            <input
              type="text"
              name="FullName"
              id="FullName"
              placeholder="John Doe"
              value={FullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="element row">
            <input
              type="checkbox"
              name="NewsLetter"
              id="NewsLetter"
              placeholder="********"
              value={NewsLetter}
              onChange={(e) => setNewsLetter(e.target.value)}
              required
            />
            <label htmlFor="NewsLetter">
              Email me news and tips
              <br />
              You can opt out at any time
            </label>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="forgot">
          Forgot <a href="http://">Password</a>?
        </p>
        <p className="forgot">
          Already have an <a href="/sign-in">account</a>?
        </p>
      </div>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 24px 12px 48px;
  display: flex;
  & > .body {
    width: min(400px, 100%);
    padding: 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border: 2px solid var(--aj-gray-200);
    border-radius: 24px;
    & > .logo {
    }
    & > h2 {
    }
    & > .form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      & > .element {
        display: flex;
        flex-direction: column;
        gap: 8px;
        &.row {
          flex-direction: row;
          & > label {
            font-size: 0.8rem;
            font-weight: 400;
          }
        }
        & > label {
          font-size: 0.9rem;
          font-weight: 500;
        }
        & > input {
          background-color: transparent;
          padding: 8px 12px;
          border-radius: 12px;
          border: 1px solid var(--aj-gray-200);
          font-size: 1rem;
          outline: none;
          &:not([type="checkbox"]) {
            &:focus,
            &:focus-visible {
              outline: 1px solid var(--aj-primary);
            }
            & > .error {
              border-color: var(--aj-error);
            }
            & > .success {
              border-color: var(--aj-error);
            }
          }
        }
      }
      & > button {
        font-size: 1rem;
        padding: 8px 12px;
        background-color: var(--aj-primary);
        color: var(--aj-white);
        border: none;
        border-radius: 12px;
        outline: none;
      }
    }
    & > .forgot {
      font-size: 0.8rem;
      & > a {
        color: var(--aj-primary);
        text-decoration: none;
      }
    }
  }
`;
