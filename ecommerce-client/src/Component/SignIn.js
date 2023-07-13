import { Input } from "@mui/material";
import { useState } from "react";
import { Alert, Button, Container } from "react-bootstrap";
import { SignAdminData } from "./Services";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import  { addItem, login, setUserPurchase} from "../Store/Slice/userSlices";

// export const MyContext = createContext();

export function SignIn() {
  const dispatch =useDispatch();
  const [signData, setSignData] = useState({});

  const navigate = useNavigate();

  const handleSignIn = (event) => {
    setSignData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitSign = async (event) => {
    event.preventDefault();
    event.target.reset();
    const res = await SignAdminData(signData);
       dispatch(addItem(signData));
      //  console.log(signData);
           
    if (res) {
      // setUserPurchase(res.data);
      dispatch(setUserPurchase(res.data));
      dispatch(login());

      alert("Sign in successfully");
      event.target.reset();
      navigate("/addtocart");
    } else {
      // console.log(res);
      alert("error");
    }
  };

  return (
    <Container className="pt-5 pb-2 d-flex justify-content-center align-item-center">
    <div
      className="p-1 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "pink", width: 450, height: 550 }}
    >
      <form onSubmit={handleSubmitSign}>
        <Input
          type="email"
          placeholder="gmail"
          name="gmail"
          className="pt-2"
          onChange={handleSignIn}
        />
        <br></br>
        <Input
          type="password"
          placeholder="password"
          name="password"
          className="pt-2"
          onChange={handleSignIn}
        />
        <br></br>
        <Button type="submit" className="btn btn-sm mt-3 me-5">
          submit
        </Button>
      </form>
    </div>
  </Container>
  );
}
