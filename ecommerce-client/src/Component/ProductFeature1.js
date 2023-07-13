import { Form } from "react-bootstrap";

export function ProductFeature()
{
    return(
    <>
                    <div className="checkbox-list ps-3">
                <div>
                  <h6 className="pt-3">Category</h6>
                  <Form>
                    <Form.Check
                      type="checkbox"
                      name="type"
                      label="Smartphone"
                      value="Smartphone"
                      onClick={("Smartphone")}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Laptop"
                      id="checkbox2"
                      name="type"
                      value="Laptop"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Headphone"
                      name="type"
                      value="Headphone"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Speaker"
                      name="type"
                      value="Speaker"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Television"
                      name="type"
                      value="Television"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Tablet"
                      name="type"
                      value="Tablet"

                    />
                  </Form>

                </div>
                <hr></hr>
                <div className="checkBox-list">
                  <h6 className="pt-3">Price</h6>
                  <Form id="form1">
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


                    />
                    <Form.Check
                      type="checkbox"
                      label="Asus"
                      name="name"
                      value="Asus"


                    />
                    <Form.Check
                      type="checkbox"
                      label="LG"
                      name="name"
                      value="LG"
                      

                    />
                    <Form.Check
                      type="checkbox"
                      label="Sennheiser"
                      name="name"
                      value="Sennheiser"
                    

                    />
                    <Form.Check
                      type="checkbox"
                      label="OnePlus"
                      name="name"
                      value="OnePlus"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Dell"
                      name="name"
                      value="Dell"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Bose"
                      name="name"
                      value="Bose"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Sony"
                      name="name"
                      value="Sony"

                    />
                    <Form.Check
                      type="checkbox"
                      label="JBL"
                      name="name"
                      value="JBL"

                    />
                    <Form.Check
                      type="checkbox"
                      label="HP"
                      name="name"
                      value="HP"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Lenovo"
                      name="name"
                      value="Lenovo"
                    />
                    <Form.Check
                      type="checkbox"
                      label="Apple"
                      name="name"
                      value="Apple"

                    />
                    <Form.Check
                      type="checkbox"
                      label="Google"
                      name="name"
                      value="Google"

                    />
                  </Form>
                </div>
                <hr></hr>
              </div>


    
    </>

    )
}