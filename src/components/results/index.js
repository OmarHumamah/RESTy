import React from "react";
import JSONPretty from "react-json-pretty";
import "./json.css";
// class Results extends React.Component {
//   render() {
//     return (
// <section>
//   <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
// </section>
//     );
//   }
// }

// export default Results;

export default function Results(props) {
  return (
    <>
      <section data-testid="result" id="results">
        <pre >
          <h1>Header</h1>
          {props.data ? (
            <JSONPretty id="json-pretty" data={props.data.headers}></JSONPretty>
          ) : null}
        </pre>
        <pre >
          <h1>Results</h1>
          {props.data ? (
            <JSONPretty id="json-pretty" data={props.data.data}></JSONPretty>
          ) : null}
        </pre>
      </section>
    </>
  );
}
