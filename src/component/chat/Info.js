import React, { useEffect, useState, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import { Loading } from "react-simple-chatbot";
import axios from "axios";
const Info = (props) => {
  const [data, setData] = useState("");
  const [loding, setLoding] = useState(true);
  const steps = useMemo(() => {
    return props.steps;
  }, [props]);

  const gotoNext = useCallback(() => {
    props.triggerNextStep();
  }, [props]);

  useEffect(() => {
    console.log(steps);
    const getip = async () => {
      const rep = await axios.get("https://api.ipify.org?format=json");
      console.log(rep);
      setLoding(false);
      setData(JSON.stringify(rep.data.ip));
    };
    Promise.all([getip()]).then(() => {
      gotoNext();
    });
  }, []);

  return <div>{loding === true ? <Loading /> : data}</div>;
};

export default Info;
