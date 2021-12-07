import React, { useState, useEffect } from "react";

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
import axios from "axios";

export default function App(props) {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {

    setRequestParams(requestParams)

  };

  useEffect(() => {
    let url = requestParams.url;
    let body = requestParams.body;
      if(requestParams.method=="GET"){
        axios
          .get(url)
          .then(result=>{
            setData(result)
          })
      }else if(requestParams.method=="DELETE") {
        axios
        .delete(url)
        .then(result=>{
          setData(result)})
      }else if(requestParams.method=="POST" && body) {
        axios
        .post(url,body)
        .then(result=>{
          setData(result)})
      }else if(requestParams.method=="PUT" && body) {
        axios
        .put(url,body)
        .then(result=>{
          setData(result)})
      } else {
        setRequestParams(false)
      }
  }, [requestParams]);

  return (
    <React.Fragment>
      <Header />
      <div data-testid='method'>Request Method: {requestParams.method}</div>
      <div data-testid='url'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
     {requestParams.url ? <Results data={data} />: <p id="load">Loading . . .</p>} 
      <Footer />
    </React.Fragment>
  );
}