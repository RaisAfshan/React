import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";


function SignUp() {
  const {Formik} = formik; 
  const navigate = useNavigate();
  const schema = yup.object().shape({
    firstname : yup.string().required("enter your first name"),
    username : yup.string().required("enter your username").min(3),
    gender : yup.string().required("enter gender"),
  })

  const handleForSubmit = (data)=>{
    console.log(data);
    navigate("/profile");
    toast.success("you successfully create your account");
    
  } 
 

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
                <Formik
                  validationSchema={schema}
                  onSubmit = {handleForSubmit}
                  initialValues={{
                    firstname:'',
                    username:'',
                    gender:''
                  }}
                >
                {({handleSubmit, handleChange, values, touched, errors }) =>(
                <Form noValidate onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        name="firstname"
                        onChange={handleChange}
                        isValid={touched.firstname && !errors.firstname}
                        isInvalid={errors.firstname}
                        values = {values.firstname}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.firstname}
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
                          onChange={handleChange}
                          isValid={touched.username && !errors.username}
                          isInvalid={errors.username}
                          values = {values.username}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.username}
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
                        onChange={handleChange}
                        isValid={touched.gender && !errors.gender}
                        isInvalid={errors.gender}
                        values = {values.gender}
                        required
                        feedback={errors.gender}
                        feedbackType="Invalid"

                      />  
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        id="formHorizontalRadios2"
                        value="female"
                        onChange={handleChange}
                        isValid={touched.gender && !errors.gender}
                        isInvalid={errors.gender}
                        values = {values.gender}
                        feedback={errors.gender}
                        feedbackType="Invalid"
                        required                        
                      />
                    </Col>
                  </Form.Group>
                  </Row>
                  <Button type="submit" className="mb-3">Submit form</Button>
                </Form>
                )}
                </Formik>
                <Link to="/profile"> if you have already an account click me!!</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SignUp;
