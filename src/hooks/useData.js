import axios from "axios";
import { useEffect, useState } from "react";

export const useData = () => {
  const [appData, setAppData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("../apps.json")
      .then((response) => setAppData(response))
      .catch((err) => setError(err));
  }, []);
  return { appData, error };
};
