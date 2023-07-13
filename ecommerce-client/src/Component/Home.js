import { TbTruckDelivery } from 'react-icons/tb';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { AiFillGift, AiTwotoneCustomerService, AiOutlineShoppingCart } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
const firstimg = new URL('../AllImages/CarousalImages/laptop1.png', import.meta.url);
const secondimg = new URL('../AllImages/CarousalImages/tv1.jpg', import.meta.url);
const thirdimg = new URL('../AllImages/CarousalImages/mobile1.jpg', import.meta.url);
const lenovo = new URL('../AllImages/CarousalImages/lenovo.jpg', import.meta.url)
const ipad = new URL('../AllImages/CarousalImages/ipad.jpg', import.meta.url)
const smart = new URL('../AllImages/CarousalImages/smartwatch.jpg', import.meta.url)
const airpods = new URL('../AllImages/CarousalImages/airpods.webp', import.meta.url)
const camera = new URL('../AllImages/CarousalImages/cam1.jpg', import.meta.url)
const television = new URL('../AllImages/CarousalImages/stv1.jpg', import.meta.url)
const swatch = new URL('../AllImages/CarousalImages/swatch.jpg', import.meta.url)
const iphone = new URL('../AllImages/CarousalImages/iphon.png', import.meta.url)
const airpods1 = new URL('../AllImages/CarousalImages/airpods1.webp', import.meta.url)
const portspeaker = new URL('../AllImages/CarousalImages/portspeaker.jpg', import.meta.url)
const philips = new URL('../AllImages/CarousalImages/philips.jpg', import.meta.url)
const samsung = new URL('../AllImages/CarousalImages/smipad.jpg', import.meta.url)
const swatch1 = new URL('../AllImages/CarousalImages/swatch1.webp', import.meta.url)
const zomo = new URL('../AllImages/CarousalImages/zomo.jpg', import.meta.url)
const Applewatch = new URL('../AllImages/CarousalImages/applewatch.jpg', import.meta.url);
const cam2 = new URL('../AllImages/CarousalImages/cam2.jpg', import.meta.url);
const pers = new URL('../AllImages/CarousalImages/pers.jpg', import.meta.url);
const fire = new URL('../AllImages/CarousalImages/fire.jpg', import.meta.url);
const vrBox = new URL('../AllImages/CarousalImages/vrBox.jpg', import.meta.url);
export function Home() {

      const navigate = useNavigate();
  return (
    <>
      <div className="pt-5">
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <Carousel nextIcon={null} prevIcon={null}>
                  <Carousel.Item>
                    <img src={firstimg}
                      className="d-block w-100"
                      height="350"
                      alt="#"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={secondimg}
                      className="d-block w-100"
                      height="350"
                      alt="#"
                    />

                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={thirdimg}
                      className="d-block w-100"
                      height="350"
                      alt="#"
                    />

                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col lg={6} className="pt-2">
              <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <Col key={idx}>
                    <Card className={`custom-card bg-color-${idx}`} onClick={()=>navigate("/features")}>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">

                          <Card.Body>
                            {idx === 0 ? (
                              <>
                                <p className="h6">Best Sale</p>
                                <p className="h6">Laptops</p>
                                <p>From $145955 </p>


                              </>
                            ) : idx === 1 ? (
                              <>
                                <p>New Arrival</p>
                                <p className="h5">IdeaPad</p>
                                <p>From $145955</p>
                              </>

                            ) : idx === 2 ? (
                              <>
                                <p>15% off</p>
                                <p className="h6">Smart Watches</p>
                                <p>Shop the latest Brand</p>
                              </>

                            ) : idx === 3 ? (
                              <>
                                <p>20% off</p>
                                <p className="h6">AirPods</p>
                                <p>High Fidentity</p>
                              </>

                            ) : null}


                          </Card.Body>
                        </div>
                        <div>
                          <Card.Img variant="top" width={350} height={150} src={idx === 0 ? lenovo : idx === 1 ? ipad : idx === 2 ? smart : idx === 3 ? airpods : null} />
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>

            </Col>
          </Row>
        </Container>

        <div id="topFeatures" className="mt-5 pb-4">
          <Container>
            <Row>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div>
                    <TbTruckDelivery size={30} />

                  </div>
                  <div className="ms-3 pt-4">
                    <h6>Free Shipping</h6>
                    <p className='pb-2 text-secondary'>From all orders from</p>
                  </div>
                </div>
              </Col>

              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div>
                    <AiFillGift size={30} />

                  </div>
                  <div className="ms-3 pt-4">
                    <h6>Daily Surprises Offers</h6>
                    <p className='pb-2 text-secondary'>save upto 25%</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div>
                    <AiTwotoneCustomerService size={30} />

                  </div>
                  <div className="ms-3 pt-4">
                    <h6>Support 24/7</h6>
                    <p className='pb-2 text-secondary'>Shop with an expert</p>
                  </div>
                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div>
                    <FaAmazonPay size={30} />

                  </div>
                  <div className="ms-3 pt-4">
                    <h6>Secure Payment</h6>
                    <p className='pb-2 text-secondary'>100% Protected Payments</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className='p-3 contain1'>
            <Row>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Computers & Laptops</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-3'>
                    <img src={lenovo}
                      className="d-block w-100"
                      height="100"

                      alt="#"
                    />

                  </div>

                </div>

              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3 pb-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Cameras & Videos</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-3'>
                    <img src={camera}
                      className="d-block w-100"
                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>

              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Smart Watches</h6>
                    </LinkContainer>

                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-3'>
                    <img src={swatch}
                      className="d-block w-100"

                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Smart Televisions</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-3'>
                    <img src={television}
                      className="d-block w-100"
                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3 mt-3 pb-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Mobiles & Tablets</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-4'>
                    <img src={iphone}
                      className="d-block w-100"
                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3 mt-3 pb-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Accessories</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-4'>
                    <img src={airpods}
                      className="d-block w-100"
                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>
              <Col lg={3}>
                <div className="d-flex align-items-center ms-3 mt-3 pb-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Headphones</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-4'>
                    <img src={airpods1}
                      className="d-block w-100"
                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>

              <Col lg={3}>
                <div className="d-flex align-items-center ms-3 mt-3  pb-3">
                  <div className="pt-4">
                    <LinkContainer to="/features">
                      <h6 className='head6'>Portable Speakers</h6>
                    </LinkContainer>
                    <p className='pb-2 text-secondary'>8 items</p>
                  </div>
                  <div className='ms-4'>
                    <img src={portspeaker}
                      className="d-block w-100"
                      height="100"
                      alt="#"
                    />

                  </div>

                </div>
              </Col>
            </Row>
          </Container>
          <Container className='mt-4'>
            <h3 className='pb-3'>Featured Collections</h3>
            <Row>
              <Col lg={3}>
                <Card className='card1' onClick={()=>navigate("/features")}>
                  <AiOutlineHeart style={{ position: 'absolute', top: 10, right: 25 }} size="25" />
                  <Card.Img src={iphone} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Apple</h6>
                    <h6 className='feattext'>Apple iPhone 14 (128 GB) - Starlight</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$200.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={3}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={philips} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Bajaj</h6>
                    <h6 className='feattext'>Bajaj Audio Channel 80W USB</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$10.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={3}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={swatch} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Fire Bolt</h6>
                    <h6 className='feattext'>Fire-Boltt Ninja 3 Smartwatch</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$13.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={3}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={samsung} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>SamSung</h6>
                    <h6 className='feattext'>Samsung Galaxy Tab S6 Lite 26.31 </h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$100.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={4}>
                <Card className='mt-4 card1' bg='dark'onClick={()=>navigate("/features")}>
                  <h6 className='ms-3 pt-3 heading6'>Pro Screen</h6>
                  <h5 className='ms-3 text-light'>Smart Watch Series 7</h5>
                  <h6 className='ms-3 heading6'>From $399 or s16 for 24*</h6>
                  <Card.Img src={swatch1} width={250} height={350} className='p-3 rounded'

                  ></Card.Img>


                </Card>
              </Col>
              <Col lg={4}>
                <Card className='mt-4 card1' onClick={()=>navigate("/features")}>
                  <h6 className='ms-3 pt-3 heading6'>Studio Display</h6>
                  <h5 className='ms-3 text-dark'>56 Nits of brightness </h5>
                  <h6 className='ms-3 heading6'>26 inch</h6>
                  <Card.Img src={lenovo} width={250} height={350} className='p-3 rounded'

                  ></Card.Img>


                </Card>
              </Col>
              <Col lg={4} >
                <Card className='mt-4 card1' onClick={()=>navigate("/features")}>
                  <h6 className='ms-3 pt-3 heading6'>Smart Phones</h6>
                  <h5 className='ms-3'>iphone 14 pro max</h5>
                  <h6 className='ms-3 heading6'>From $399 or s16 for 24*</h6>
                  <Card.Img src={iphone} width={250} height={350} className='p-3 rounded'

                  ></Card.Img>


                </Card>
              </Col>
            </Row>
          </Container>
          <Container className='mt-4'>
            <h3 className='pb-3'>Special Products</h3>
            <Row>

              <Col lg={6}>
                <div className='p-5 divSpecial'>

                  <Carousel nextIcon={null} prevIcon={null}>
                    <Carousel.Item onClick={()=>navigate("/features")}>
                      <img src={zomo}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                      />

                    </Carousel.Item>
                    <Carousel.Item onClick={()=>navigate("/features")}>
                      <img src={iphone}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                      />

                    </Carousel.Item>
                    <Carousel.Item onClick={()=>navigate("/features")}>
                      <img src={samsung}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                      />

                    </Carousel.Item>
                    <Carousel.Item onClick={()=>navigate("/features")}>
                      <img src={lenovo}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                      />

                    </Carousel.Item>
                    <Carousel.Item onClick={()=>navigate("/features")}>
                      <img src={thirdimg}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                      />

                    </Carousel.Item>
                    <Carousel.Item onClick={()=>navigate("/features")}>
                      <img src={swatch1}
                        className="d-block w-100"
                        height="350"
                        alt="#"
                      />

                    </Carousel.Item>
                  </Carousel>
                </div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={6}>
                    <Card className='card1' onClick={()=>navigate("/features")}>
                      <Card.Img src={iphone}
                        className="d-block w-100 p-3"
                        height="250"
                        alt="#"

                      >

                      </Card.Img>
                      <Card.Text className='ms-4'>
                        <h6 className='featHead'>Apple</h6>
                        <h6 className='feattext'>Apple iPhone 14 (128 GB) - Starlight</h6>

                        <div className='pb-2'>
                          <AiFillStar className='rating' />
                          <AiFillStar className='rating' />
                          <AiFillStar className='rating' />
                          <AiFillStar />
                          <Button className='btn-sm ms-3'>More images</Button>
                        </div>
                        <h6 className='featHead'>$200.00</h6>
                      </Card.Text>
                      <div className='ms-3 pb-3 d-flex align-items-center'>
                        <AiOutlineShoppingCart size={40} className='rating1' />
                        <MdLibraryAdd size={40} className='rating1 ms-2' />
                      </div>

                    </Card>
                  </Col>
                  <Col lg={6}>
                    <Card className='card1' onClick={()=>navigate("/features")}>
                      <Card.Img src={ipad}
                        className="d-block w-100 p-3"
                        height="250"
                        alt="#"

                      >

                      </Card.Img>
                      <Card.Text className='ms-4'>
                        <h6 className='featHead'>ipad</h6>
                        <h6 className='feattext'>Samsung 14 (128 GB) - Starlight</h6>

                        <div className='pb-2'>
                          <AiFillStar className='rating' />
                          <AiFillStar className='rating' />
                          <AiFillStar className='rating' />
                          <AiFillStar />
                          <Button className='btn-sm ms-3'>More images</Button>
                        </div>
                        <h6 className='featHead'>$20.00</h6>
                      </Card.Text>
                      <div className='ms-3 pb-3 d-flex align-items-center'>
                        <AiOutlineShoppingCart size={40} className='rating1' />
                        <MdLibraryAdd size={40} className='rating1 ms-2' />
                      </div>

                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>

          </Container>
          <Container className='mt-4'>
            <h3 className='pb-3'>Our Popular Products</h3>
            <Row>

              <Col lg={2}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={philips} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Bajaj</h6>
                    <h6 className='feattext'>Bajaj Audio Channel 80W USB</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$10.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={2}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={Applewatch} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Apple</h6>
                    <h6 className='feattext'>Apple Ninja 3 Smartwatch</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$130.00</h6>
                  </Card.Text>

                </Card>
              </Col>

              <Col lg={2}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={swatch} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Fire Bolt</h6>
                    <h6 className='feattext'>Fire-Boltt Ninja 3 Smartwatch</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$13.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={2}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={airpods} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Boat</h6>
                    <h6 className='feattext'>boAt Rockerz 450 Bluetooth Headphones</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$30.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={2}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={airpods1} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Mivi</h6>
                    <h6 className='feattext'>Mivi Duopods A25 Bluetooth Wireless</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$13.00</h6>
                  </Card.Text>

                </Card>
              </Col>
              <Col lg={2}>
                <Card className='card1' onClick={()=>navigate("/features")}>

                  <Card.Img src={cam2} width={250} height={350} className='p-3'

                  ></Card.Img>
                  <Card.Text className='ms-4'>
                    <h6 className='featHead'>Sony</h6>
                    <h6 className='feattext'>Olyme Plus pen E-PL With 9 kit</h6>
                    <div className='pb-2'>
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar className='rating' />
                      <AiFillStar />
                    </div>
                    <h6 className='featHead'>$13.00</h6>
                  </Card.Text>

                </Card>
              </Col>
            </Row>
          </Container>
          <Container className='mt-4'>
            <h3 className='pb-3'>Our Latest News</h3>
            <Row>
              <Col lg={4}>
                <Card className='card1' onClick={()=>navigate("/features")}>
                  <Card.Img src={vrBox}
                    className="d-block w-100 p-3"
                    height="250"
                    alt="#"

                  >

                  </Card.Img>
                  <Card.Text className='ms-4'>
                    <h6>Amzing Pro Shinecon Virtual Reality 3D Glasses Headset VRBOX
                      Head Mount (Smart Glasses, GLOSY White)
                      Head Mount (Smart Glasses, GLOSY White)
                    </h6>


                    <div className='pb-2'>
                      <Button className='btn-sm ms-1'>More read</Button>
                    </div>

                  </Card.Text>


                </Card>
              </Col>
              <Col lg={4}>
                <Card className='card1' onClick={()=>navigate("/features")}>
                  <Card.Img src={fire}
                    className="d-block w-100 p-3"
                    height="250"
                    alt="#"

                  >

                  </Card.Img>
                  <Card.Text className='ms-4'>
                    <h6>Fire-Boltt India's No 1 Smartwatch Brand Ring Bluetooth Calling with SpO2 & 1.7”
                      Metal Body with Blood Oxygen Monitoring,
                      Continuous Heart Rate
                    </h6>


                    <div className='pb-2'>
                      <Button className='btn-sm ms-1'>More read</Button>
                    </div>

                  </Card.Text>


                </Card>
              </Col>
              <Col lg={4}>
                <Card className='card1' onClick={()=>navigate("/features")}>
                  <Card.Img src={pers}
                    className="d-block w-100 p-3"
                    height="250"
                    alt="#"

                  >

                  </Card.Img>
                  <Card.Text className='ms-4'>
                    <h6>We called Gemini Roofing 24, they came out straight away
                      and gave me a reasonable price and the work commenced on the agreed date.
                    </h6>


                    <div className='pb-2'>
                      <Button className='btn-sm ms-1'>More read</Button>
                    </div>

                  </Card.Text>


                </Card>
              </Col>
            </Row>

          </Container>
        </div>

        <div className='footer'>
          <Container className='d-flex justify-content-center align-items-center p-4'>
            <Row>
              <Col lg={3}>
                <h6 className='headfooter'>Get to Know us</h6>
                <ul className='unorderlist'>
                  <li className='list'>About us</li>
                  <li className='list'>Careers</li>
                  <li className='list'>Press Releases</li>
                  <li className='list'>Amazon Science</li>
                </ul>
              </Col>
              <Col lg={3}>
                <h6 className='headfooter'>Connect with Us</h6>
                <ul className='unorderlist'>
                  <li className='list'>Facebook</li>
                  <li className='list'>Tiwtter</li>
                  <li className='list'>Instagram</li>
                  <li className='list'>Linkedin</li>
                </ul>
              </Col>

              <Col lg={3}>
                <h6 className='headfooter'>Make Money with Us</h6>
                <ul className='unorderlist'>
                  <li className='list'>Sell on Amazon</li>
                  <li className='list'>Protect and Build Your Brand</li>
                  {/* <li className='list'>Amazon Global Selling</li>
                  <li className='list'>Amazon Pay on Merchants</li> */}
                </ul>
              </Col>
              <Col lg={3}>
                <h6 className='headfooter'>Let Us Help You</h6>
                <ul className='unorderlist'>
                  <li className='list'>COVID-19 and Amazon</li>
                  <li className='list'>Returns Centre</li>
                  <li className='list'>100% Purchase Protection</li>
                  <li className='list'>Help Centre</li>
                </ul>
              </Col>
            </Row>

          </Container>
          <hr className='hr' />
          <Container className='d-flex justify-content-center align-items-center p-3'>

            <h6 className='text-light'>
              @2023  Developed by SUMIT RAJPUT.All rights reserved.
            </h6>




          </Container>


        </div>


      </div>

    </>
  )
}