import { Button, Col, Container, Form, Row } from "react-bootstrap"
import "./Signin.css"
import { useState } from "react"
import { Link } from "react-router-dom";
function Signin(){
  const [validate,setValidated] = useState(false);
  const [loginData,setLogin] = useState({
    email:'',
    password:''
  })
  const handleonChange = (event)=>{
    const {name,value} = event.target;
    setLogin((prev)=>{
        const updateData ={...prev};
        updateData[name] = value;
        return updateData
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    const form = event.currentTarget;
    if(form.checkValidity()=== false){
      event.stopPropagation()
    }
    else{
      console.log(loginData);
    }
    setValidated(true)
  }
    return (
        <>
            <Container>
                <Row className="mt-3">
                    <Col className="text-center">
                    <p className=" text-body fs-3"><img src="/img/sclogo.png"width="40"height="40"className="d-inline-block align-top"alt="E-Cart" /> E-Cart</p>
                    </Col>
                </Row>

                <Row className="my-4 justify-content-center">
                    <Col xsm={12} md={6} lg={4} className="border p-5 rounded">
                        <Form noValidate validated={validate} onSubmit={handleSubmit}>
                          <Form.Group className="mb-3" controlId="formBasicEmail"  >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleonChange}/>
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                            </Form.Text>
                          </Form.Group>

                          <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleonChange} />
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                        <div className="mt-2">
                      <Link to={"/signup"}>if you don't have account, click here</Link>
                    </div>
                    </Col>
                    
                </Row>
            </Container>
           
        </>
    )
}
export default Signin