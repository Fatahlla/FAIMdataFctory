import React, { useState } from "react";
import styled from "styled-components";
import { LuText, LuBarChartBig, LuPieChart } from "react-icons/lu";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Graph3({ data, defaultStyle = "bar" }) {
  const RADIAN = Math.PI / 180;
  const options = [
    { name: "text", icon: <LuText /> },
    { name: "bar", icon: <LuBarChartBig /> },
    { name: "pie", icon: <LuPieChart /> },
  ];

  const [Show, setShow] = useState(defaultStyle);

  const CustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    name,
    value,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="var(--aj-dark)"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${name}:${value.toFixed(1)}%`}
      </text>
    );
  };

  const CurrentChart = () => {
    switch (Show) {
      case "text":
        return (
          <>
            {data &&
              Array.isArray(data) &&
              data.length > 0 &&
              React.Children.toArray(
                data.map((item) => (
                  <p style={{ whiteSpace: "nowrap" }}>
                    {item?.name}: {item?.value}
                  </p>
                ))
              )}
          </>
        );
      case "pie":
        return (
          <ResponsiveContainer width="100%" height="90%">
            <PieChart width={500} height={300}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="var(--aj-graph-main)"
                label={CustomLabel}
                labelLine={false}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      case "bar":
      default:
        return (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: -25,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={"name"} />
              <YAxis />
              <Tooltip />
              <Bar dataKey={"value"} fill="var(--aj-graph-main)" />
              label={"value"}
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <Container style={{ overflow: Show === "text" && "auto" }}>
      <div className="options">
        {React.Children.toArray(
          options.map((item) => (
            <button
              onClick={() => setShow(item?.name)}
              className={`${Show === item?.name ? "active" : ""}`}
            >
              {item?.icon}
            </button>
          ))
        )}
      </div>
      {CurrentChart()}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  & > .options {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & > button {
      display: flex;
      background: var(--aj-dark);
      color: var(--aj-white);
      border: none;
      padding: 4px;
      &.active {
        background-color: var(--aj-graph-main);
        color: var(--aj-dark);
      }
    }
  }
`;
