import { Button, Col, Container, Form, Row } from "react-bootstrap"
import "./Signin.css"
import * as formik from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom";
function Signin(){
  const {Formik} = formik;
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required("enter you valid email "),
    password : yup.string().required("enter your password"),
  });
  
  const handleForSubmit =(data)=>{
    console.log(data);
    toast("Logged in successfully");
    navigate("/");
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
                    <Formik
                      validationSchema={schema}
                      onSubmit={handleForSubmit}
                      initialValues = {{
                        email:'',
                        password:''
                      }}
                    >
                       {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Form.Group className="mb-5 position-relative" controlId="formBasicEmail"  >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} isValid= {touched.email && !errors.email} values={values.email} isInvalid={errors.email}/>
                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.email}
                            </Form.Control.Feedback>
                          </Form.Group>

                          <Form.Group className="mb-5 mt-4 position-relative" controlId="formBasicPassword" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} isValid= {touched.password && !errors.password} values={values.password} isInvalid={errors.password}/>
                            <Form.Control.Feedback type="invalid" tooltip>
                              {errors.password}
                            </Form.Control.Feedback>
                          </Form.Group>
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Form>
                       )}
                        </Formik>
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