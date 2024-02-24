import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdVpnKey, MdVpnKeyOff } from "react-icons/md";
import Data from "../DummyTable.json";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function VisualizeData() {
  const [DATA, setDATA] = useState();
  const [KeyFinal, setKeyFinal] = useState();
  const [KeyIsKey, setKeyIsKey] = useState();

  useEffect(() => {
    let data;
    fetch("https://savenger.no-ip.org:8877/api/data_upload/")
      .then((res) => res.json())
      .then((res) => {
        let id = res[0].id;
        fetch("https://savenger.no-ip.org:8877/api/data_upload/" + id + "/insights")
          .then((res) => {
            let data = res.json();
            console.log(data);
            setDATA(data);
          })
      })
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
      {DATA && (
        <div className="table">
          <div className="header">
            <div
              className="row"
              style={{
                gridTemplateColumns: `repeat(${DATA?.keys?.length + 1}, 170px)`,
              }}
            >
              <div className="col">ID</div>
              {DATA?.keys &&
                Array.isArray(DATA.keys) &&
                DATA.keys.length > 0 &&
                React.Children.toArray(
                  DATA.keys.map((item) => (
                    <div className="col">
                      {item.toUpperCase()}{" "}
                      <div className="right">
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            KeyIsKey.includes(item)
                              ? setKeyIsKey(
                                  [...KeyIsKey].filter((el) => el !== item)
                                )
                              : setKeyIsKey([...new Set([...KeyIsKey, item])])
                          }
                        >
                          {KeyIsKey.includes(item) ? (
                            <MdVpnKey />
                          ) : (
                            <MdVpnKeyOff />
                          )}
                        </span>
                        <span
                          role="button"
                          tabIndex={0}
                          onClick={() =>
                            KeyFinal.includes(item)
                              ? setKeyFinal(
                                  [...KeyFinal].filter((el) => el !== item)
                                )
                              : setKeyFinal([...new Set([...KeyFinal, item])])
                          }
                        >
                          {KeyFinal.includes(item) ? <FaEye /> : <FaEyeSlash />}
                        </span>
                      </div>
                    </div>
                  ))
                )}
            </div>
          </div>
          <div className="body">
            <div
              className="row"
              style={{
                gridTemplateColumns: `repeat(${DATA?.keys?.length + 1}, 170px)`,
              }}
            >
              <div className="col graph">-</div>
              {DATA?.keys &&
                Array.isArray(DATA.keys) &&
                DATA.keys.length > 0 &&
                React.Children.toArray(
                  DATA.keys.map((item) => (
                    <div className="col graph">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          width={500}
                          height={300}
                          data={DATA?.["graph-data"]?.[item]}
                          margin={{
                            top: 5,
                            right: 0,
                            left: -25,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis />
                          <YAxis />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey={item}
                            stroke="#82ca9d"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  ))
                )}
            </div>

            {DATA?.data &&
              Array.isArray(DATA.data) &&
              DATA.data.length > 0 &&
              React.Children.toArray(
                DATA.data.map((obj, id) => (
                  <div
                    className="row"
                    style={{
                      gridTemplateColumns: `repeat(${
                        DATA?.keys?.length + 1
                      }, 170px)`,
                    }}
                  >
                    <div className="col">{id + 1}</div>
                    {DATA?.keys &&
                      Array.isArray(DATA.keys) &&
                      DATA.keys.length > 0 &&
                      React.Children.toArray(
                        DATA.keys.map((item) => (
                          <div className="col">{obj?.[item]}</div>
                        ))
                      )}
                  </div>
                ))
              )}
          </div>
        </div>
      )}
      <div className="graphs">
        <h2>Graphs:</h2>
        {DATA?.keys &&
          Array.isArray(DATA.keys) &&
          DATA.keys.length > 0 &&
          React.Children.toArray(
            DATA.keys.map((item) => (
              <div className="graph-data">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={DATA?.["graph-data"]?.[item]}
                    margin={{
                      top: 5,
                      right: 5,
                      left: -10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={item} stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ))
          )}
      </div>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  & > .table {
    grid-column: 1 / span 4;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    & > * > .row {
      display: grid;
      gap: 8px;
      width: 100%;
    }
    & > * > .row > .col {
      padding: 8px;
      &.graph {
        aspect-ratio: 4/3;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    & > .header {
      font-weight: 800;
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      background-color: var(--aj-white);
      & > .row {
        & > .col {
          display: flex;
          gap: 12px;
          justify-content: space-between;
          align-items: center;
          & > .right {
            display: flex;
            align-items: center;
            gap: 12px;
            & > span {
              display: flex;
              cursor: pointer;
            }
          }
        }
      }
    }
    & > .body {
      font-weight: 400;
      width: max-content;
      & > .row {
        &:nth-child(odd) {
          background-color: var(--aj-gray-100);
        }
      }
    }
  }
  & > .graphs {
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    & > h2 {
      font-size: 1.2rem;
      padding: 8px;
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      background-color: var(--aj-white);
      z-index: 10;
    }
    & > .graph-data {
      width: 100%;
      aspect-ratio: 4/3;
      padding-right: 8px;
    }
  }
`;
