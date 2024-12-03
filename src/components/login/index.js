import React, { useState,useEffect  } from 'react';
import { TextField, Password, } from "../../assets/FormControls";
import { Div } from "../../assets/FormControls/div";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loggin,init } from "../../redux/store";
import styles from "./login.module.css";

function Login(props) {

    useEffect(() => {

        console.log("Login init")
        dispatch(
            init()
        );
      }, []);

    const dispatch = useDispatch();

    const authState = useSelector((state) => {
        return state.auth;
    });

    const [selectedRow, setSelectedRow] = useState({});
    const [ModalStatus, setModalStatus] = useState({
        isopen: false,
        isEditMode: false,
    });

    const validationSchema = Yup.object().shape({
        user_id: Yup.string()
            .required("User Name is required"),
        password: Yup.string()
            .required("Password is required"),
    });

    let formik = useFormik({
        initialValues: {
            user_id: "",
            password: "",
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)

            dispatch(
                loggin({
                    user_id: values.user_id,
                    password: values.password,
                })
            );
        },
    });

    return (
        <div className={styles.loginCantainer}>
            <Div flex>
                <div className={styles.loginCantainerLeft}>
                    <img src={`${process.env.PUBLIC_URL}/image.jpg`} alt="Description of the image" />
                </div>
                <div className={styles.loginCantainerRight}>
                    <div className={styles.top}>
                        <Div center>
                            <img src={`${process.env.PUBLIC_URL}/omis.png`} alt="Description of the image" width="40%" height="40%" />
                        </Div>

                    </div>
                    <div className={styles.botom}>
                        <form onSubmit={formik.handleSubmit}>

                            <Div center><h2>LOGIN</h2></Div>
                            <Div sb>
                                <TextField id="user_id" Caption="User Name" value={selectedRow.FirstName || ""} Binding={formik} />
                            </Div>  
                               <Div sb>
                                <Password id="password" Caption="Password" value={selectedRow.LastName || ""} Binding={formik} />
                            </Div>
                            <Div center>
                                <button type="submit">
                                    Log In
                                </button>
                            </Div>
                            <Div><h6 className='Error'>{authState.err}</h6>  </Div>

                        </form>
                        <hr />

                        <Div center >   <h6>or</h6></Div>
                        <Div center >
                            <button className={styles.googleSSo}>

                                <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="Description of the image" />

                                Sign in with Google

                            </button>
                        </Div> <br />
                        <Div center >    <h6>Dont have an account? <a>Sign up now</a></h6></Div>
                    </div>
                </div>
            </Div>
        </div>
    );
}
export default Login;

//to do
//image  standadize
//SSo implementation