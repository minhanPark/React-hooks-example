import React, { useState, useEffect } from "react";
import defaultAxios from "axios";
import "../App.css";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then(data => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch(error => {
        setState({
          ...state,
          loading: false,
          error
        });
      });
  }, [trigger]);
  return { ...state, refetch };
};

const FApp = () => {
  const { loading, data, refetch } = useAxios({
    url: "https://yts.lt/api/v2/list_movies.json"
  });
  return (
    <div className="center">
      <div>FUseAxios</div>
      <div>{data && data.status}</div>
      <div>{loading && "Loading"}</div>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default FApp;
