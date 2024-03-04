import React from "react";
import styled from "styled-components";
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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdVpnKey, MdVpnKeyOff } from "react-icons/md";
import { aj_res_md } from "../../settings/responsiveSizes";
import DropDownSelect from "../Elements/DropDownSelect";
import Graph3 from "../Elements/Graph3";

export default function ConfirmDataTable({
  DATA,
  KeyIsKey,
  KeyFinal,
  setKeyFinal,
  setKeyIsKey,
}) {
  return (
    <Container className={``}>
      {DATA && (
        <div className="data_con">
          <div className="table">
            <div className="header">
              <div
                className="row"
                style={{
                  gridTemplateColumns: `repeat(${
                    DATA?.keys?.length + 1
                  }, 170px)`,
                }}
              >
                <div className="col d-flex align-center justify-center">ID</div>
                {DATA?.keys &&
                  Array.isArray(DATA.keys) &&
                  DATA.keys.length > 0 &&
                  React.Children.toArray(
                    DATA.keys.map((item) => (
                      <div className="col">
                        <div className="line">
                          {item.toUpperCase().replaceAll("_", " ")}{" "}
                          <div className="right">
                            {/* Data type */}
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={() =>
                                KeyIsKey.includes(item)
                                  ? setKeyIsKey(
                                      [...KeyIsKey].filter((el) => el !== item)
                                    )
                                  : setKeyIsKey([
                                      ...new Set([...KeyIsKey, item]),
                                    ])
                              }
                              title={
                                KeyIsKey.includes(item)
                                  ? "Field is Input"
                                  : "Field is Output"
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
                                  : setKeyFinal([
                                      ...new Set([...KeyFinal, item]),
                                    ])
                              }
                              title={
                                KeyFinal.includes(item)
                                  ? "Field is Visible"
                                  : "Field is Ignored"
                              }
                            >
                              {KeyFinal.includes(item) ? (
                                <FaEye />
                              ) : (
                                <FaEyeSlash />
                              )}
                            </span>
                            <DropDownSelect
                              options={[
                                { title: "Numerical", value: "numerical" },
                                { title: "Categorical", value: "categorical" },
                              ]}
                            />
                          </div>
                        </div>
                        {/* display errors */}
                        {false && (
                          <div className="errors">
                            <p className="aj-df-text-error">
                              there is errors in columns
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  )}
              </div>
            </div>
            <div className="body">
              <div
                className="row"
                style={{
                  gridTemplateColumns: `repeat(${
                    DATA?.keys?.length + 1
                  }, 170px)`,
                }}
              >
                <div className="col graph">-</div>
                {DATA?.keys &&
                  Array.isArray(DATA.keys) &&
                  DATA.keys.length > 0 &&
                  React.Children.toArray(
                    DATA.keys.map((item) => (
                      <div className="col graph">
                        <Graph3 data={DATA?.distributions?.[item]} />
                        {/* <ResponsiveContainer width="100%" height="100%">
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
                        </ResponsiveContainer> */}
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
                      className={`row ${false ? "aj-df-bg-error" : ""}`}
                      style={{
                        gridTemplateColumns: `repeat(${
                          DATA?.keys?.length + 1
                        }, 170px)`,
                      }}
                    >
                      <div className="col">
                        {id + 1} <br />
                        {false && (
                          <span className="aj-df-text-error">
                            error message
                          </span>
                        )}
                      </div>
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
        </div>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: max(600px, 100%);
  overflow-x: auto;
  & > .data_con {
    width: 100%;
    height: 100%;
    padding: 12px 24px;
    padding-right: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    @media screen and (max-width: ${aj_res_md}px) {
      width: 700px;
    }
    & > .table {
      grid-column: 1 / span 4;
      border: 1px solid var(--aj-gray-100);
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
        font-size: 0.8rem;
        padding: 8px;
        vertical-align: middle;
        &.graph {
          aspect-ratio: 5/4;
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
        z-index: 1;
        & > .row {
          & > .col {
            background-color: var(--aj-white);
            & > .line {
              display: flex;
              gap: 12px;
              justify-content: space-between;
              align-items: center;
              height: 100%;
              /* word-break: break-all; */
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
            & > .errors {
              padding-top: 0%.5rem;
            }
          }
        }
      }
      & > .body {
        font-weight: 400;
        width: max-content;
        & > .row {
          text-align: center;
          &:nth-child(odd) {
            background-color: var(--aj-gray-100);
          }
        }
      }
    }
    & > .graphs {
      width: 225px;
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
        z-index: 1;
      }
      & > .graph-data {
        width: 100%;
        aspect-ratio: 4/3;
        padding-right: 8px;
      }
    }
  }
`;
