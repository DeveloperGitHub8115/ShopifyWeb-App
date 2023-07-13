import { useEffect } from "react";
import { useState } from "react"
import { Col, Container, Row, Form, Card, Button } from "react-bootstrap"
import { SavePurchase, SavePurchaseUpdate, fetchData } from "./Services.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";
import Pagination from 'react-bootstrap/Pagination';
export function Feature() {

  const user = useSelector((state) => state.userPurchase);
  const isLoggedIn = useSelector((state) => state.userPurchase.isLoggedin);
  const [data, setData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectBrand, setSelectBrand] = useState([]);
  const [selectPrice, setSelectPrice] = useState([]);
  const [pageData,setPageData]=useState([]);
  const [page,setPage]=useState(1);
  const [pageCount,setPageCount]=useState(0);
  const navigate = useNavigate();
  // const [selectedItem, setSelectedItem] = useState(null);
  
 

  useEffect(() => {
    handleData();
  }, [page]);
  useEffect(()=>{
             const pagedataCount = Math.ceil(data.length/3);
             setPageCount(pagedataCount);
             if(page){
                const LIMIT = 3;
                const skip = LIMIT * page;
                const dataskip = data.slice(page===1? 0 : skip- LIMIT,skip);
                setPageData(dataskip);
             }
  },[data])


  const handleData = async () => {
    const response = await fetchData();
    setData(response.data[0].products);
  };

  const handleClick = (catItem) => {

    if (selectedCategories.includes(catItem)) {
      setSelectedCategories((prevCategories) =>

        prevCategories.filter((category) => category !== catItem)
      );
      console.log(catItem);
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, catItem]);
    }
  };

  const filterData = () => {
    if (selectedCategories.length === 0 && selectBrand.length === 0 && selectPrice.length === 0) {
      return data;
    }

    return data.filter((item) => {
      const isCategoryMatched =
        selectedCategories.length === 0 ||
        selectedCategories.includes(item.category);

      const isBrandMatched =
        selectBrand.length === 0 || selectBrand.includes(item.name);

      const isPriceMatched =
        selectPrice.length === 0 ||
        selectPrice.some((range) => {
          if (range === "5000") {
            return item.price < 5000;
          }
          if (range === "10000") {
            return item.price >= 5000 && item.price < 10000;
          }
          if (range === "15000") {
            return item.price >= 10000 && item.price <= 15000;
          }
          if (range === "25000") {
            return item.price >= 15000 && item.price <= 50000;
          }
          if (range === "50000") {
            return item.price >= 50000;
          }
          return false;
        });

      return isCategoryMatched && isBrandMatched && isPriceMatched;
    });
  };


  //handleBrands
  const handleBrand = (brand) => {
    if (selectBrand.includes(brand)) {
      setSelectBrand((prevBrands) =>
        prevBrands.filter((selectBrand) => selectBrand !== brand)

      );
    }
    else {
      setSelectBrand((prevBrands) => [...prevBrands, brand])
    }

  }
  //handlePrice
  const handlePrice = (event) => {
    const priceRange = event.target.value;

    if (selectPrice.includes(priceRange)) {
      setSelectPrice((prevPrice) =>
        prevPrice.filter((range) => range !== priceRange)
      );
    } else {
      setSelectPrice((prevPrice) => [...prevPrice, priceRange]);
    }
  };

  const handleAddData = async (item) => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      try {
        const formData = new FormData();
        formData.append("name", item.name);
        formData.append("about", item.about);
        formData.append("price", item.price);
        formData.append("category", item.category);
        formData.append("warranty", item.warranty);

        const imageBlob = await fetch(item.image).then((response) => response.blob());
        const imageFile = new File([imageBlob], "image.jpg", { type: "image/jpeg" });

        formData.append("image", imageFile);

        const resp = await SavePurchase(formData);
        console.log(resp.data._id);
        console.log(user.userPurchase[0].id);
        // console.log(user[0].id);
        const data = await SavePurchaseUpdate(user.userPurchase[0].id, resp.data._id);
        if (data) {
          alert("added");
        }


      } catch (error) {
        console.log(error);
      }

    }
    else {
      navigate("/signin");

    }

  };
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };
  
  const handlePrev = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };
  
  const filteredData = filterData();
  const combinedData = page === pageCount ? filteredData.slice((page - 1) * 3) : pageData;
  return (


    <>
      <div className="mt-4">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="checkbox-list ps-3">
                <div>
                  <h6 className="pt-3">Category</h6>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      name="type"
                      label="Smartphone"
                      value="Smartphone"
                      onClick={() => handleClick("mobile")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Laptop"
                      id="checkbox2"
                      name="type"
                      value="Laptop"
                      onClick={() => handleClick("laptop")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Headphone"
                      name="type"
                      value="Headphone"
                      onClick={() => handleClick("Headphone")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Speaker"
                      name="type"
                      value="Speaker"
                      onClick={() => handleClick("Speaker")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Television"
                      name="type"
                      value="Television"
                      onClick={() => handleClick("Television")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Tablet"
                      name="type"
                      value="Tablet"
                      onClick={() => handleClick("Tablet")}

                    />
                  </Form>

                </div>
                <hr></hr>
                <div className="checkBox-list">
                  <h6 className="pt-3">Price</h6>
                  <Form id="form1" onClick={handlePrice}>
                    <Form.Check
                      type="radio"
                      label="Less Than $5000"
                      name="price"
                      value="5000"


                    />
                    <Form.Check
                      type="radio"
                      label="Less Than $10000"
                      name="price"
                      value="10000"


                    />
                    <Form.Check
                      type="radio"
                      label="Less Than $25000"
                      name="price"
                      value="25000"


                    />
                    <Form.Check
                      type="radio"
                      label="Less Than $50000"
                      name="price"
                      value="50000"


                    />

                  </Form>
                  <hr></hr>

                </div>
                <div>
                  <h6 className="pt-3">Brands</h6>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      label="Samsung"
                      name="name"
                      value="Samsung"
                      onClick={() => handleBrand("Samsung")}



                    />
                    <Form.Check
                      type="checkbox"
                      label="Asus"
                      name="name"
                      value="Asus"
                      onClick={() => handleBrand("Asus")}


                    />
                    <Form.Check
                      type="checkbox"
                      label="LG"
                      name="name"
                      value="LG"
                      onClick={() => handleBrand("LG")}


                    />
                    <Form.Check
                      type="checkbox"
                      label="Sennheiser"
                      name="name"
                      value="Sennheiser"
                      onClick={() => handleBrand("Sennheiser")}


                    />
                    <Form.Check
                      type="checkbox"
                      label="OnePlus"
                      name="name"
                      value="OnePlus"
                      onClick={() => handleBrand("onePlus")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Dell"
                      name="name"
                      value="Dell"
                      onClick={() => handleBrand("Dell")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Bose"
                      name="name"
                      value="Bose"
                      onClick={() => handleBrand("Bose")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Sony"
                      name="name"
                      value="Sony"
                      onClick={() => handleBrand("Sony")}

                    />

                    <Form.Check
                      type="checkbox"
                      label="HP"
                      name="name"
                      value="HP"
                      onClick={() => handleBrand("HP")}

                    />
                    <Form.Check
                      type="checkbox"
                      label="Lenovo"
                      name="name"
                      value="Lenovo"
                      onClick={() => handleBrand("Lenovo")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Apple"
                      name="name"
                      value="Apple"
                      onClick={() => handleBrand("Apple")}

                    />

                  </Form>
                </div>
                <hr></hr>
              </div>

            </Col>
            <Col lg={8}>

              {combinedData.map((item) => (
                <>
                  <div className="divcard_1">
                    <Card className="mt-2 cardInside" style={{ border: "2px solid #ab232333", backgroundColor: "#ced4da21" }}>
                      <div style={{ display: 'flex' }}>
                        <div style={{ flex: '50%', padding: 5 }}>
                          <Card.Img src={item.image} variant="top" style={{ width: '100%', height: '250px' }} />
                        </div>
                        <div style={{ flex: '50%' }}>
                          <Card.Body className="">
                            <Card.Title className="cardtitle">{item.name}</Card.Title>
                            <h5>{item.modelname}</h5>
                            <h6 className="">{item.about}</h6>
                            <p>{item.warranty}</p>

                            <h5>₹ {item.price}</h5>
                            <p>Emi Available</p>
                            <Button className="btn btn-sm mt-2" onClick={() => handleAddData({ ...item, image: item.image })} style={{ backgroundColor: "#0e816a", borderRadius: 50 }}>ADD</Button>
                            <Button className="btn btn-sm mt-2 ms-1" style={{ backgroundColor: "blueviolet", borderRadius: 50 }}>Buy</Button>
                          </Card.Body>
                        </div>
                      </div>
                    </Card>
                  </div>

                </>
              ))}




            </Col>
          </Row>
          <div className="d-flex justify-content-center  mt-2">
            <Pagination >
              <Pagination.Prev onClick={handlePrev} disabled={page===1}/>
                {
                  Array(pageCount).fill(null).map((ele,index)=>{
                       return(
                        <>
                         <Pagination.Item active={page===index+1?true:false} onClick={()=>setPage(index+1)} >{index + 1}</Pagination.Item>    
                            
                        </>
                       )
                  })
                }
              

              <Pagination.Next onClick={handleNext} disabled={page===pageCount}/>

            </Pagination>

          </div>
        </Container>

      </div>
    </>
  )
}