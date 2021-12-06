import React from "react";

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
      <section id="results">
        <pre>
          {props.data ? JSON.stringify(props.data, undefined, 2) : null}
        </pre>
      </section>
    </>
  );
}
