import React from "react";
import FontAwesome from "react-fontawesome";

import { calcTime } from "../../../helpers";
import "./MovieInfoBar.css";

const MovieInfoBar = props => {
  return (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">
        <div className="rmdb-movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="rmdb-movieinfobar-info">
            Running Time: {calcTime(props.time)}
          </span>
        </div>
    
      </div>
    </div>
  );
};

export default MovieInfoBar;
