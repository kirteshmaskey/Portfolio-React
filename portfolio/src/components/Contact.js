import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const getValue = (val) => {
    const { name, value } = val.target;
    setInputValue(() => {
      return {
        ...inputValue,
        [name]: value,
      };
    });
  };

  const sentFeedback = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = inputValue;
    if (firstName === "") {
      toast.error("First Name is required");
    } else if (lastName === "") {
      toast.error("Last Name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid Email");
    } else if (phone === "") {
      toast.error("Mobile Number is required");
    } else {
      const res = await fetch(
        "https://portfoliobackend-371f.onrender.com/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            message,
          }),
        }
      );
      const data = await res.json();
      // console.log(data);

      if (data.status === 201) {
        toast.success("Your response submited");
        setInputValue({
          ...inputValue,
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    }
  };

  return (
    <>
      <div className="main-container py-5">
        {/* <div className="main-innerdiv"> */}
        {/* <div className="heading-container"></div> */}

        <Form className="col-lg-6 col-sm-12 mx-auto shadow form-container">
          <div className="heading text-center">
            <h2>Contact Me</h2>
          </div>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={inputValue.firstName}
              onChange={getValue}
              // placeholder="First Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={inputValue.lastName}
              onChange={getValue}
              // placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="phone"
              name="phone"
              value={inputValue.phone}
              onChange={getValue}
              // placeholder="Mobile Number"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={inputValue.email}
              onChange={getValue}
              // placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={inputValue.message}
              onChange={getValue}
              style={{ resize: "none", height:"6em"}}
              rows={3}
              // placeholder="Message"
            />
          </Form.Group>
          <div className="btn-container">
            <Button
              type="submit"
              className="btn btn-success submit-btn"
              style={{}}
              onClick={sentFeedback}
            >
              Submit
            </Button>
          </div>
        </Form>
        <ToastContainer />
        {/* </div> */}
      </div>
    </>
  );
};

export default Contact;
