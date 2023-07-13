import { useState } from "react";
import { Alert } from "react-bootstrap";

const getLocalItems = () => {
  let list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
   
  } else {
    return [];
  }
};
export function About() {
  const [Items, setItems] = useState(getLocalItems());
  console.log(Items);


  return (
    <>
      <Alert>hii</Alert>
      <h1>
         
      </h1>
    </>
  );
}
