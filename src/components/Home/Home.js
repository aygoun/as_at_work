import React from "react";
import "./Home.css";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  let { workspace } = useParams();
  console.log("workspace: ", workspace);
  eventID = eventID.slice(0, 0) + eventID.slice(1);
  let navigate = useNavigate();

  return (<div>HElLO</div>);
};

export default Home;
