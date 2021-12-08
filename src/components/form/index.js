import React, { useState, useReducer } from "react";

// import './form.scss';

// class Form extends React.Component {
// handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = {
//     method: "GET",
//     url: "https://pokeapi.co/api/v2/pokemon"
//   };
//   this.props.handleApiCall(formData);
// };

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <span>URL: </span>
//             <input name="url" type="text" />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;
let initialState = {
  method: "",
  url: "",
  body: false,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET":
      return {
        ...state,
        method: action.type,
      };
    case "POST":
      return {
        ...state,
        method: action.type,
      };
    case "PUT":
      return {
        ...state,
        method: action.type,
      };
    case "DELETE":
      return {
        ...state,
        method: action.type,
      };
    case "url":
      return {
        ...state,
        url: action.payload,
      };
    case "body":
      return {
        ...state,
        body: action.payload,
      };
    default:
      break;
  }
};

export default function Form(props) {
  const [data, dispatch] = useReducer(dataReducer, initialState);

  //const [method, setMethod] = useState();
  //const [url, setUrl] = useState();
  //const [body, setBody] = useState();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: data.method,
      url: data.url,
      body: data.body,
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span class="url">URL: </span>
          <input
            data-testid="input"
            onChange={(e) => {
              dispatch({ type: "url", payload: e.target.value });
            }}
            name="url"
            type="text"
          />
          <button class="formbtn" type="submit" data-testid="submit1">
            GO!
          </button>
        </label>
        <label className="methods">
          <input type="radio" name="1" id="get" class="ch" />
          <label
            for="get"
            onClick={() => {
              dispatch({ type: "GET" });
            }}
            data-testid="get"
            id="get"
          >
            GET
          </label>
          <input type="radio" name="1" id="post" class="ch" />
          <label
            for="post"
            onClick={() => {
              dispatch({ type: "POST" });
            }}
            data-testid="post"
            id="post"
          >
            POST
          </label>
          <input type="radio" name="1" id="put" class="ch" />
          <label
            for="put"
            onClick={() => {
              dispatch({ type: "PUT" });
            }}
            data-testid="put"
            id="put"
          >
            PUT
          </label>
          <input type="radio" name="1" id="delete" class="ch" />
          <label
            for="delete"
            onClick={() => {
              dispatch({ type: "DELETE" });
            }}
            data-testid="delete"
            id="delete"
          >
            DELETE
          </label>
        </label>
        <h3>Body:</h3>
        <textarea
          id="area"
          data-testid="body"
          onChange={(e) => {
            dispatch({type:'body', payload:e.target.value});
          }}
          name="body"
          type="text"
          rows="5"
        />
      </form>
    </>
  );
}
