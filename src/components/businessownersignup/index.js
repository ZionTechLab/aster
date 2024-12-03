import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import {
  TextField,
  TextArea,
  Password,
  Select
} from "../../assets/FormControls";
import ActionButton from "../actionButtons";

function BusinessOwnerSignup(props) {
  const [selectedRow, setSelectedRow] = useState({});
  const [ModalStatus, setModalStatus] = useState({
    isopen: false,
    isEditMode: false
  });
  const [titleDataSet, settitleDataSet] = useState([]);

  useEffect(() => {
    settitleDataSet(JSON.parse(localStorage.getItem("title")));
  }, []);

  const validationSchema = Yup.object().shape({
    Title: Yup.string().required("Title is required"),
    FullName: Yup.string()
      .required("Full Name is required")
      .max(84, "Maximum characters 84")
      .min(10, "Minimam characters 10"),
    FirstName: Yup.string()
      .max(25, "Maximum characters 25")
      .required("First Name is required"),
    LastName: Yup.string()
      .max(25, "Maximum characters 25")
      .required("Last Name is required"),
      FamilyName: Yup.string()
      .max(25, "Maximum characters 25")
      .required("Family Name is required"),
    Province: Yup.string().required("Province is required"),
    City: Yup.string().required("City is required"),
    Address: Yup.string()
      .min(25, "minimum characters 25")
      .required("Address is required"),
    Email: Yup.string().required("Email is required")
  });

  let formik = useFormik({
    initialValues: {
      Title: ModalStatus.isEditMode ? selectedRow.Title : "",
      FullName: ModalStatus.isEditMode ? selectedRow.FullName : "",
      FirstName: ModalStatus.isEditMode ? selectedRow.FirstName : "",
      LastName: ModalStatus.isEditMode ? selectedRow.LastName : "",
      FamilyName: ModalStatus.isEditMode ? selectedRow.FamilyName : "",
      Initial: ModalStatus.isEditMode ? selectedRow.Initial : "",
      InitialPreferred: ModalStatus.isEditMode
        ? selectedRow.InitialPreferred
        : "",

      Province: ModalStatus.isEditMode ? selectedRow.Province : "",
      City: ModalStatus.isEditMode ? selectedRow.City : "",
      Postal: ModalStatus.isEditMode ? selectedRow.Postal : "",
      Address: ModalStatus.isEditMode ? selectedRow.Address : "",
      Email: ModalStatus.isEditMode ? selectedRow.Email : ""
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // const combinedData = `${values.Country}${values.UnlocCode}`;
      // dispatch(saveLocations({ formik: values, additionalData: combinedData }))
      //   .then(() => {
      //     handleClose();
      //     dispatch(getLocations());
      //   })
      //   .catch((error) => {
      //     console.error("Error saving location:", error);
      //   });
    }
  });

  return (
    <form>
      <Row>
        <h2>BUSINESS OWNER SIGNUP</h2>
      </Row>
      <Row>
        <hr />
      </Row>
      <Row>
        <Col md="3" className="mb-3">
          <Select
            id="Title"
            Caption="Title"
            dataCode="TitleID"
            dataName="Title"
            data={titleDataSet}
            value={selectedRow.Title || ""}
            Binding={formik}
          />
        </Col>
        <Col md="9" className="mb-3">
          <TextField
            id="FullName"
            Caption="Business Owner's Full Name"
            CaptionSub="as per the Government Issued Birth Certificate (BC), Citizenship Certificate (CC), National ID Card (NIC), Driving License (DL), or Passport (PP)"
            value={selectedRow.FullName || ""}
            Binding={formik}
          />
        </Col>
      </Row>
      <Row>
        <div class="file-upload-container">
          <label for="profilePic" class="file-label">
            Upload Profile Picture:
          </label>
          <div>
            <input
              type="file"
              id="profilePic"
              name="profilePic"
              class="file-input"
            ></input>
            <Button class="upload-button" id="profilePic">
              Upload
            </Button>
          </div>
        </div>
      </Row>
      <Row>
        <Col md="9" className="mb-3">
          <TextField
            id="LastName"
            Caption="Citizenship / Birth Certificate Number"
            value={selectedRow.LastName || ""}
            Binding={formik}
          >
            <Button variant="warning" id="button-addon2">
              Verification Pending
            </Button>
          </TextField>
          <TextField
            id="LastName"
            Caption="National ID Card Number (NIC / NID)"
            value={selectedRow.LastName || ""}
            Binding={formik}
          >
            <Button variant="warning" id="button-addon2">
              Verification Pending
            </Button>
          </TextField>
          <TextField
            id="LastName"
            Caption="Passport Number (PP)"
            value={selectedRow.LastName || ""}
            Binding={formik}
          >
            <Button variant="warning" id="button-addon2">
              Verification Pending
            </Button>
          </TextField>
        </Col>
        {/* </InputGroup> */}
        {/* </Form.Group> */}

        <Col md="3" className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label> Colour Photo</Form.Label>
            <div className="image"></div>
          </Form.Group>
        </Col>
      </Row>
      <a href="/">Click Here for our Privacy Policy Statement</a>
      <Row className="mb-3"></Row>
      <Row>
        <Col md="3" sm="6" className="mb-3">
          <TextField
            id="FirstName"
            Caption="First Name"
            value={selectedRow.FirstName || ""}
            Binding={formik}
          />
        </Col>
        <Col md="3" sm="6" className="mb-3">
          <TextField
            id="LastName"
            Caption="Last Name"
            value={selectedRow.LastName || ""}
            Binding={formik}
          />
        </Col>
        <Col md="6" sm="12" className="mb-3">
          <TextField
            id="FamilyName"
            Caption="Family Name / Surname"
            value={selectedRow.FamilyName || ""}
            Binding={formik}
          />
        </Col>
      </Row>
      <Row>
        <Col md sm="6" className="mb-3">
          <TextField
            id="Initial"
            Caption="Initial of the Given name"
            value={selectedRow.Initial || ""}
            Binding={formik}
          />
        </Col>
        <Col md sm="6" className="mb-3">
          <TextField
            id="InitialPreferred"
            Caption="Initial(s) with the Preferred Name"
            value={selectedRow.InitialPreferred || ""}
            Binding={formik}
          />
        </Col>
      </Row>
      <Row>
        <Col md sm="6" className="mb-3">
          <TextField
            id="Country"
            Caption="Country"
            value={selectedRow.Country || ""}
            Binding={formik}
          />
        </Col>
        <Col md sm="6" className="mb-3">
          <TextField
            id="Province"
            Caption="Province"
            value={selectedRow.Province || ""}
            Binding={formik}
          />
        </Col>
        <Col md sm="6" className="mb-3">
          <TextField
            id="City"
            Caption="City"
            value={selectedRow.City || ""}
            Binding={formik}
          ></TextField>
        </Col>
        <Col md sm="6" className="mb-3">
          <TextField
            id="Postal"
            Caption="Postal / ZIP Code"
            value={selectedRow.Postal || ""}
            Binding={formik}
          />
        </Col>
      </Row>
      <Row>
        <TextArea
          id="Address"
          Caption="Official Postal / Mailing Address"
          value={selectedRow.Address || ""}
          Binding={formik}
        />
      </Row>
      <Row>
        {" "}
        <Col md="6" className="mb-3">
          <TextField
            id="Email"
            Caption="Personal Email Address"
            value={selectedRow.Email || ""}
            Binding={formik}
          >
            <Button variant="warning" id="button-addon2">
              Verification Pending
            </Button>
          </TextField>
        </Col>
        <Col md="6" className="mb-3">
          <TextField
            id="LastName"
            Caption="Personal CDMA/Mobile Phone Number"
            value={selectedRow.LastName || ""}
            Binding={formik}
          >
            <Button variant="warning" id="button-addon2">
              Verification Pending
            </Button>
          </TextField>
        </Col>
      </Row>
      <Row>
        <Col md="6" className="mb-3">
          <Password
            id="LastName"
            Caption="Password"
            value={selectedRow.LastName || ""}
            Binding={formik}
          ></Password>
        </Col>
        <Col md="6" className="mb-3">
          <Password
            id="LastName"
            Caption="Re-enter Password"
            value={selectedRow.LastName || ""}
            Binding={formik}
          ></Password>
        </Col>
      </Row>
      CAPTCHA
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
export default BusinessOwnerSignup;
