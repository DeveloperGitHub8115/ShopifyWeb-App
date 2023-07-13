import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "./SignUp";
import React, { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { SignAdminData, removePurchaseData } from "./Services";
import {
  addItem,
  setUserPurchase,
} from "../Store/Slice/userSlices";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

export function AddToCart() {
  const isLoggedIn = useSelector((state) => state.userPurchase.isLoggedin);
  const addedItems = useSelector((state) => state.userPurchase.addItem);
  const [purchaseData, setPurchaseData] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleItem = async () => {
    try {
      const res = await SignAdminData(addedItems[0]);
      console.log(res.data.userPurchase);
      setPurchaseData(res.data.userPurchase);
      
    } catch (error) {
         console.log(error);
      
    }
 
  };

  useEffect(() => {
    handleItem();
  }, []);

  const handleRemove = async (purchase) => {
    if (window.confirm("Delete Item")) {
      await removePurchaseData(purchase._id);
      handleItem();
    }
  };

  const handleProceedToBuy = (index) => {
    setSelectedItemIndex(index);
  };

  return (
    <>
      {isLoggedIn ? (
        <Container className="mt-4">
          <h5>Our Cart</h5>
          <hr />
          <Row>
            {purchaseData.map((purchase, index) => (
              <React.Fragment key={index}>
                <Col lg={2}></Col>
                <Col lg={6} className="mt-2">
                  <div className="">
                    <Card className="cardInside" style={{ border: "2px solid #ab232333", backgroundColor:"#ced4da21" }}>
                      <div style={{ display: "flex" }}>
                        <div className="p-2">
                          <Card.Img
                            src={purchase.image}
                            style={{ width: 200, height: 150 }}
                          />
                        </div>
                        <div>
                          <Card.Body>
                            <Card.Title className="cardtitle">
                              {purchase.name} {purchase.modelname}
                            </Card.Title>
                            <h6 className="head5">{purchase.about}</h6>
                            <h5 className="head5">{purchase.price}</h5>
                            <Button
                              className="btn-danger" 
                              onClick={() => handleRemove(purchase)}
                            >
                              Remove
                            </Button>
                            <Button
                              style={{ backgroundColor: "#189d5fbd" }}
                              className="ms-2"
                              onClick={() => handleProceedToBuy(index)}
                            >
                              Proceed To Buy
                            </Button>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col lg={3}>
                  {selectedItemIndex === index && (
                    <div className="d-flex">
                      <Paper
                        elevation={6}
                        className="d-flex justify-content-center"
                        style={{ backgroundColor: "#fff3cd80" }}
                      >

                        <div className="p-2">
                          <p>SubTotal : 1</p>
                          <p>Amount : {purchase.price}</p>
                          <h6>Total : {purchase.price}</h6>
                          <hr />
                          <Button
                            style={{ backgroundColor: "#189d5fbd" }}
                            className=""
                            onClick={handleProceedToBuy}
                          >
                            Proceed To Buy
                          </Button>
                        </div>
                      </Paper>
                    </div>
                  )}
                </Col>

              </React.Fragment>
            ))}
          </Row>
        </Container>
      ) : (
        <SignUp />
      )}
    </>
  );
}
