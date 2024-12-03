import React from "react";
import classes from "./drawer.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { navigationData } from "./menu.js";

const Drawer = (props) => {
  let sty = ["jw-drawer"];
  let sty2 = ["drawer"];
  if (props.isOpen) {
    sty.push("open");
    sty2.push("drawer-open");
  }

  return (
    <div>
      <div className={sty2.join(" ")} onClick={() => props.closeDrawer()} />
      <div className={sty.join(" ")}>
        <nav>
          <ul className={classes.tree}>
            {/* {navigationData.map((column) => (
              <li>
                <details open>
                  <summary className="level1">{column.title}</summary>

                  {column.children && (
                    <li>
                      {column.children.map((column1) => (
                        <details open>
                          <summary className="level2">{column1.title}</summary>

                          {column1.children.map((column2) => (
                            <li className="subList">
                              <Link
                                to={column2.title}
                                onClick={() => props.closeDrawer()}
                              >
                                {column2.title}
                              </Link>
                            </li>
                          ))}
                        </details>
                      ))}
                    </li>
                  )}
                </details>
              </li>
            ))} */}
{navigationData.map((column, index) => (
  <li key={index}>
    <details open>
      <summary className="level1">{column.title}</summary>

      {column.children && (
        <ul>
          {column.children.map((column1, index1) => (
            <li key={index1}>
              <details open>
                <summary className="level2">{column1.title}</summary>

                {column1.children && (
                  <ul>
                    {column1.children.map((column2, index2) => (
                      <li key={index2} className="subList">
                        <Link
                          to={column2.title}
                          onClick={() => props.closeDrawer()}
                        >
                          {column2.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            </li>
          ))}
        </ul>
      )}
    </details>
  </li>
))}
            <a href="aaa" onClick={() => props.closeDrawer()}>
              Neptune
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Drawer;
