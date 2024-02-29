import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useLocationQuery() {
  const [Query, setQuery] = useState({});

  const location = useLocation();

  useEffect(() => {
    let obj = {};
    location.search
      .replace("?", "")
      .split("&")
      .map((el) => {
        let item = el.split("=");
        obj[item[0]] = item[1];
        return el;
      });
    setQuery(obj);
  }, [location]);
  return Query;
}
