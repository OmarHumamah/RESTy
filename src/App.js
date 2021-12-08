import React, { useState, useEffect, useReducer } from "react";

import "./app.scss";
import "./components/form/form.scss";
import "./components/footer/footer.scss";
import "./components/header/header.scss";
import "./components/results/result.scss";
import "./components/history/history.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
import History from "./components/history/History";
import axios from "axios";

//-------------------------------------
let history = {
  data: null,
  requestParams: {},
};

let historyArray = [];

const historyReducer = (state=history, action)=>{
 if (action.method) {
  return  request(state, action);
   
 }else if(action.data){
  return data(state, action)
   
 }
}

const request=(state, action)=>{
return{
  ...state,
  requestParams: state.requestParams = action
}
}
const data=(state, action)=>{
  return{
    ...state,
    data: state.data = action
  }
}
//-------------------------------------

export default function App(props) {

  const [requestState, dispatch] = useReducer(historyReducer, history);

 // const [data, setData] = useState(null);
  //const [requestParams, setRequestParams] = useState({});

  const callApi = (requestParams) => {
    dispatch(requestParams);
    historyArray.push(requestState)
    
  };
  
  useEffect(() => {
    let url = requestState.requestParams.url;
    let body = requestState.requestParams.body;
  
    if (requestState.requestParams.method == "GET") {
      axios.get(url).then((result) => {
        dispatch(result);
      });
    } 
    else if (requestState.requestParams.method == "DELETE") {
      axios.delete(url).then((result) => {
        dispatch(result).catch(e=>{console.log(e);});
      });
    }
    else if (requestState.requestParams.method == "POST" && body) {
      body = JSON.parse(body);
      console.log(body);
      axios.post(url, body).then((result) => {
        dispatch(result);
      }).catch(e=>{console.log(e);});
    } else if (requestState.requestParams.method == "PUT" && body) {
      body = JSON.parse(body);
      axios.put(url, body).then((result) => {
        dispatch(result);
      });
    }
  }, [requestState.requestParams]);

  return (
    <React.Fragment>
      <Header />
      <h3>History</h3>
      <div id='historyDiv'>
      {historyArray.map(e=>{
       return <History gitHistory={dispatch} request={e.requestParams} />
      })}
      </div>
      <Form handleApiCall={callApi} />
      {requestState.requestParams.url ? (
        <Results data={requestState.data} />
      ) : (
        <p id="load">Loading . . .</p>
      )}
      <Footer />
    </React.Fragment>
  );
}
