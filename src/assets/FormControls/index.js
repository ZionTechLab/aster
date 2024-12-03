import React, { useState, useEffect } from "react";
import styles from "./FormControls.module.css";

function TextField(props) {
  return (
    <div className={styles.TextField}>
      <label className={styles.Caption} htmlFor={props.id}>
        {props.Caption} :{" "}
      </label>

      <div className={props.children == null ? "" : styles.controlContainer}>
        <input
          type="text"
          className={`${styles.FormTextBox} `} //${styles.errorTextBox}
          id={props.id}
          name={props.id}
          placeholder={props.Caption}
          // onChange={props.Binding.handleChange}
          onChange={props?.Binding?.handleChange || (() => {})}
          onBlur={props?.Binding?.handleBlur|| (() => {})}
          defaultValue={props?.Binding?.initialValues[props.id]}
        ></input>
        {props.children}
      </div>
      {/* <br /> */}
      <div id="fnameErr" className={styles.errorLabel}>
        {props?.Binding?.errors[props.id] && props?.Binding?.touched[props.id] ? (
          <div>
            {props?.Binding?.errors[props.id]}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function Password(props) {
  return (
    <div>
      <label className={styles.Caption} htmlFor={props.id}>
        {props.Caption} :{" "}
      </label>
      {/* <div className={props.children ==null?'':        styles.controlContainer}> */}
      <input
        type="Password"
        className={`${styles.FormTextBox} `} //${styles.errorTextBox}
        id={props.id}
        name={props.id}
        placeholder={props.Caption}
        onChange={props.Binding.handleChange}
        onBlur={props.Binding.handleBlur}
        defaultValue={props.Binding.initialValues[props.id]}
      ></input>
      {/* {props.children}
      </div> */}
      {/* <br /> */}
      <div id="fnameErr" className={styles.errorLabel}>
        {props.Binding.errors[props.id] && props.Binding.touched[props.id] ? (
          <div>{props.Binding.errors[props.id]}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
function TextArea(props) {
  return (
    <div className={styles.formTxtInput}>
      <label className={styles.Caption} htmlFor={props.id}>
        {props.Caption} :{" "}
      </label>
      <textarea
        // type="text"
        className={`${styles.FormTextBox} `} //${styles.errorTextBox}
        id={props.id}
        name={props.id}
        placeholder={props.Caption}
        onChange={props.Binding.handleChange}
        onBlur={props.Binding.handleBlur}
        defaultValue={props.Binding.initialValues[props.id]}
      ></textarea>
      <br />
      <div id="fnameErr" className={styles.errorLabel}>
        {props.Binding.errors[props.id] && props.Binding.touched[props.id] ? (
          <div>{props.Binding.errors[props.id]}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function Select(props) {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const selectedItem = props?.data?.find(
      (option) =>
        option[props?.dataCode] === props?.Binding?.initialValues[props.id]
    );
    setSelectedValue(selectedItem ? selectedItem[props?.dataName] : "");
    props?.Binding?.setFieldValue(
      props?.id,
      props?.Binding?.initialValues[props?.id]
    );
  }, [props?.Binding?.initialValues[props?.id]]);


  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
    const selectedItem = props?.data?.find(
      (option) => option[props.dataCode] === e.target.value
    );
    props.Binding.setFieldValue(
      props.id,
      selectedItem ? selectedItem[props?.dataCode] : ""
    );
  };

  return (
    <div className={styles.formTxtInput}>
      <label className={styles.Caption} htmlFor={props.id}>
        {props.Caption} :{" "}
      </label>

      <select
        className={`${styles.FormTextBox} `}
        id={props.id}
        name={props.id}
        onBlur={props?.Binding?.handleBlur|| (() => {})}
        onChange={handleSelectChange}
        value={selectedValue}
        // value={''}
      >
        {props?.data?.map((option, index) => (
          <option key={index} value={option[props?.dataCode]}>
            {option[props?.dataName]}
          </option>
        ))}
      </select>
      <br />
      <div id="fnameErr" className={styles?.errorLabel}>
        {props?.Binding?.errors[props.id] && props?.Binding?.touched[props.id] ? (
          <div>{props?.Binding?.errors[props?.id]}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function CheckBox(props) {
  const [selectedValue, setSelectedValue] = useState();
  // console.log(props.Binding.initialValues[props.id]);
  // console.log(props.id);

  // useEffect(() => {
  //   // console.log(props.Binding.initialValues[props.id]);
  //   setSelectedValue(props.Binding.initialValues[props.id]);
  //   props.Binding.setFieldValue(
  //     props.id,
  //     props.Binding.initialValues[props.id]
  //   );
  // }, []);

  useEffect(() => {
    // console.log(props.Binding.initialValues[props.id]);
    setSelectedValue(props.Binding.initialValues[props.id]);
    props.Binding.setFieldValue(
      props.id,
      props.Binding.initialValues[props.id]
    );
  }, [props.Binding.initialValues[props.id]]);

  return (
    <div className={styles.formTxtInput}>
      <input
        type="checkbox"
        name={props.id}
        onChange={(e) => {
          let s = e.target.checked ? "Y" : "";
          setSelectedValue(s);
          props.Binding.setFieldValue(props.id, s);
        }}
        checked={selectedValue === "Y" ? true : false}
      ></input>

      <label className={styles.Caption} htmlFor={props.id}>
        {props.Caption}
      </label>
    </div>
  );
}

function FormControl(props) {
  return <div className={styles.FormControl}>{props.children}</div>;
}

export { TextField, TextArea, Password, Select, CheckBox, FormControl };
