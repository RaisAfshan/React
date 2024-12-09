import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

function SignUp() {
  const [validated, setValidated] = useState(false);
  const [firstname, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState("false");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget ;
   if (form.checkValidity()=== false){
        event.stopPropagation()
   }
   else{
        const contactData ={
          firstname,
          username,
          gender,
          agree  
        }

        console.log(contactData)
   }
    setValidated(true);
  };

//   console.log(firstname);
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col>
            <Card className="rounded-1">
              <Card.Body>
                <Card.Title>Sign Up</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Enter your details
                </Card.Subtitle>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstname"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Enter your name
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Looks good!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          name="username"
                          onChange={(e)=>setUsername(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                      <Form.Label>City</Form.Label>
                      <Form.Control type="text" placeholder="City" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                      <Form.Label>State</Form.Label>
                      <Form.Control type="text" placeholder="State" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom05">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control type="text" placeholder="Zip" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group className="mb-3" as= {Col}>
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      name="agree"
                      value="done"
                      onChange={(e)=>setAgree(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3 d-inline p-2">
                    <Form.Label as="legend" column sm={2}>
                      Gender : 
                    </Form.Label>
                    <Col sm={10} >
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        id="formHorizontalRadios1"
                        value="male"
                        onChange={(e)=> setGender(e.target.value)}
                      />  
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        id="formHorizontalRadios2"
                        value="female"
                        onChange={(e)=> setGender(e.target.value)}
                        
                      />
                    </Col>
                  </Form.Group>
                  </Row>
                  <Button type="submit">Submit form</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SignUp;
