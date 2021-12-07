import React, {useState} from "react";

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

export default function Form(props) {
  const [method, setMethod] = useState();
  const [url, setUrl] = useState();
  const [body, setBody] = useState();
  
    // setMethod('GET');
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      body: body
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span class="url">URL: </span>
          <input data-testid="input" onChange={(e)=>{setUrl(e.target.value)}} name="url" type="text" />
          <button class="formbtn" type="submit" data-testid='submit1'>
            GO!
          </button>
        </label>
        <label className="methods">
          <span onClick={()=>{setMethod('GET');}} data-testid='get' id="get">GET</span>
          <span onClick={()=>{setMethod('POST');}} data-testid='post' id="post">POST</span>
          <span onClick={()=>{setMethod('PUT');}} data-testid='put' id="put">PUT</span>
          <span onClick={()=>{setMethod('DELETE');}} data-testid='delete' id="delete">DELETE</span>
        </label>
        <h3>Body:</h3>
        <textarea data-testid="body" onChange={(e)=>{setBody(e.target.value)}} name="body" type="text" rows='5'/>
      </form>
    </>
  );
}
