import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Data from "../DummyTable.json";
import ConfirmDataTable from "../components/tables/ConfirmDataTable";
import { FiDownload } from "react-icons/fi";
import { useLocationQuery } from "../utils";
import { DataNavInfo } from "../settings/DataNavInfo";

export default function VisualizeData() {
  const [DATA, setDATA] = useState();
  const [KeyFinal, setKeyFinal] = useState();
  const [KeyIsKey, setKeyIsKey] = useState();
  const [DataNav, setDataNav] = useState(DataNavInfo[0]?.value);

  const query = useLocationQuery();

  useEffect(() => {
    let data;
    // use `query.ID` for file parameter
    // fetch("https://example.com/")
    //   .then((res) => res.json())
    //   .then((res) => (data = res))
    //   .catch((err) => console.error(err));
    if (data) {
      setDATA(data);
      setKeyFinal(data?.keys);
      setKeyIsKey(data?.keys);
    } else {
      setDATA(Data);
      setKeyFinal(Data?.keys);
      setKeyIsKey(Data?.keys);
    }
  }, []);

  return (
    <Container>
      <div className="title">
        <div className="line align-center justify-between flex-wrap">
          <h1>Data Title</h1>
          <a href="#sa" download className="aj-df-button-dark">
            <FiDownload /> Download CSV
          </a>
        </div>
        <div className="line nav align-center">
          {DataNavInfo &&
            Array.isArray(DataNavInfo) &&
            DataNavInfo.length > 0 &&
            React.Children.toArray(
              DataNavInfo.map((item) => (
                <button
                  className={`dataNav_item ${
                    DataNav === item?.value ? "active" : ""
                  }`}
                  onClick={() => setDataNav(item?.value)}
                >
                  {item?.title}
                </button>
              ))
            )}
        </div>
      </div>
      {
        {
          dataCard: (
            <ConfirmDataTable
              DATA={DATA}
              KeyFinal={KeyFinal}
              KeyIsKey={KeyIsKey}
              setKeyFinal={setKeyFinal}
              setKeyIsKey={setKeyIsKey}
            />
          ),
          code: "",
          discussion: "",
          suggestion: "",
        }[DataNav]
      }
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  & > .title {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 12px 24px;
    padding-bottom: 0;
    margin-bottom: 12px;
    background-color: var(--aj-white);
    & > .line {
      display: flex;
      /* margin: 0.8rem 0; */

      & > h1 {
        font-size: 2rem;
      }
      &.nav {
        display: flex;
        gap: 4px;
        overflow-x: auto;
        margin-top: 8px;
        & > .dataNav_item {
          padding: 12px;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1rem;
          font-weight: 500;
          color: var(--aj-dark-100);
          border-bottom: 3px solid transparent;
          white-space: nowrap;
          &.active,
          &:hover,
          &:focus-visible {
            border-bottom-color: var(--aj-dark);
          }
        }
      }
    }
  }
`;
