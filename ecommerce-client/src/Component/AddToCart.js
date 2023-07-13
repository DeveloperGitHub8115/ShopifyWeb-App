import { createContext, useState } from "react";
import { Button } from "react-bootstrap";
import { About } from "./About";
import { useEffect } from "react";

const MyContext = createContext();

const getLocalItems = () => {
  let list = localStorage.getItem("items");
  if (list) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

export function AddToCart({ selectedItem }) {
  const [Items, setItems] = useState(getLocalItems());


  const handleAddData = (item) => {
    setItems((prevItems) => [...prevItems, item]);
    console.log(item);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(Items));
  }, [Items]);

  return (
    <>
      <MyContext.Provider value={Items}>
        <div>
          {selectedItem && (
            <div>
              <h3>Selected Items:</h3>
              {selectedItem.map((item, index) => (
                <div key={index}>
                  <p>Name: {item.name}</p>
                  <p>About: {item.about}</p>
                  <p>Price: {item.price}</p>
                  <Button onClick={() => handleAddData(item)}>Add</Button>
                  <hr />
                </div>
              ))}
            </div>
          )}
        </div>
    
       
      </MyContext.Provider>
    </>
  );
}

// export { MyContext };
