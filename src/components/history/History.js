import React from "react";

export default function History(props) {
  return (
    <><label id="history" onClick={()=>props.gitHistory(props.request)}> 
      <span class='methods'  data-testid="method">{props.request.method}</span>
      <span  data-testid="url">URL: {props.request.url}</span>
    </label>
    </>
  );
}
