import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";

test(" the form will result in data being rendered in the output area", async () => {
    render(<App />);
    const button = screen.getByTestId("submit1");
    const result = screen.getByTestId("result");
    
    fireEvent.click(button);
    
    const resultData = `{ "count": 2, "results": [ { "name": "fake thing 1", "url": "http://fakethings.com/1" }, { "name": "fake thing 2", "url": "http://fakethings.com/2" } ] }`;
    
    expect(result).toHaveTextContent(resultData);
});

test("test the URL", async () => {
  render(<App />);
  const button = screen.getByTestId("submit1");
  const input = screen.getByTestId("input");
  const url = screen.getByTestId("url");
  fireEvent.change(input, {target:{value: "https://pokeapi.co/api/v2/pokemon"}});
  fireEvent.click(button);

  expect(url).toHaveTextContent("https://pokeapi.co/api/v2/pokemon");
});

test("test the method get", async () => {
    render(<App />);
  const button = screen.getByTestId("submit1");
  const get = screen.getByTestId("get");
  const method = screen.getByTestId("method");
  fireEvent.click(get);
  fireEvent.click(button);

  expect(method).toHaveTextContent("GET");
});

test("test the method post", async () => {
  render(<App />);
  const button = screen.getByTestId("submit1");
  const get = screen.getByTestId("post");
  const method = screen.getByTestId("method");
  fireEvent.click(get);
  fireEvent.click(button);

  expect(method).toHaveTextContent("POST");
});

test("test the method put", async () => {
    render(<App />);
    const button = screen.getByTestId("submit1");
    const get = screen.getByTestId("put");
    const method = screen.getByTestId("method");
    fireEvent.click(get);
    fireEvent.click(button);
  
    expect(method).toHaveTextContent("PUT");
  });

  test("test the method delete", async () => {
    render(<App />);
    const button = screen.getByTestId("submit1");
    const get = screen.getByTestId("delete");
    const method = screen.getByTestId("method");
    fireEvent.click(get);
    fireEvent.click(button);
  
    expect(method).toHaveTextContent("DELETE");
  });

