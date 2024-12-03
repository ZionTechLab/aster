import React, { useState, useEffect } from "react";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { Button } from "react-bootstrap";
import { Div } from "../../assets/FormControls/div";
import { TextField, Password, Select } from "../../assets/FormControls";
// import ActionButton from "../actionButtons";
function Organization(props) {
    return (
        <form>
            <Div>
                <h2 className="uppercase">Organization / Company Registration</h2>
            </Div>
            <Div m0>
                <hr />
            </Div>
            <Div>
                <Select id="Country" Caption="Title" dataCode="TitleID" dataName="Title" />
            </Div>
            <Div>
            <TextField id="LastName" Caption="Date" />            
            </Div>
             <Div>
            <TextField id="LastName" Caption="  Initial/s with the Preferred Name (Auto)" />            
            </Div>
             <Div>
            <TextField id="LastName" Caption="  Business Owner's Email (Auto)" />            
            </Div>
             <Div>
            <TextField id="LastName" Caption="  Business Owner's Mobile Phone# (Auto)" />            
            </Div>
             <Div>
            <TextField id="LastName" Caption="  Organization/Business Registered Country (Mandatory)" />            
            </Div>
             <Div>
            <TextField id="LastName" Caption="  Organization/Business Registered Province/State (Mandatory)" />            
            </Div>
             <Div>
            <TextField id="LastName" Caption="  Organization/Business Address in 1 line (without Country)*" />            
            </Div>
              <Div>
            <TextField id="LastName" Caption=" Organization/Business Address Line-1*" />            
            </Div>
              <Div>
            <TextField id="LastName" Caption=" Website Address/URL (optional)" />            
            </Div>
              <Div>
            <TextField id="LastName" Caption=" General/Public Email Address (optional)" />            
            </Div>
              <Div>
            <TextField id="LastName" Caption=" General/Hotline Phone Number (optional)" />            
            </Div>
        </form>
    );
}
export default Organization;
