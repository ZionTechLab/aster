import React, { useState, useEffect } from "react";
import styles from "./FormControls.module.css";
import { New, Save } from "../../Components/Icons";

function Button(props) {
  const sty = ([] = [`${styles.btn}`]);

  //   const btns = [{ BtnStyle: "Add" }, { BtnStyle: "Save" }];

  if (props.BtnStyle == "Add") sty.push(`${styles.btnAdd}`);

  return (
    <button
      className={sty.join(" ")}
      onClick={() => (props.onClick ? props.onClick() : "")}
    >
      {props.children}
    </button>
  );
}

function SaveButton(props) {
  return (
    <Button
      type="button"
      onClick={() => (props.onClick ? props.onClick() : "")}
    >
      <Save /> Save
    </Button>
  );
}
function AddButton(props) {
  return (
    <Button type="Add" onClick={() => (props.onClick ? props.onClick() : "")}>
      <New /> Save
    </Button>
  );
}
export { Button, SaveButton, AddButton };
