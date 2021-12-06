import React, { useState } from "react";

import "./app.scss";
import "./components/form/form.scss";
import "./components/footer/footer.scss";
import "./components/header/header.scss";
import "./components/results/result.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";

export default function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        { name: "fake thing 1", url: "http://fakethings.com/1" },
        { name: "fake thing 2", url: "http://fakethings.com/2" }
      ]
    };
    setData(data);
    setRequestParams(requestParams)
    
  };
  return (
    <React.Fragment>
      <Header />
      <div data-testid='method'>Request Method: {requestParams.method}</div>
      <div data-testid='url'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}