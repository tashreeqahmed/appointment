import React from 'react';
import {Button, Form, Input} from "antd";
import axios from "axios";
import {Link} from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';

const Register = () => {
    const navigate = useNavigate();
    const onFinish = async(values) => {
        try {
            const response = await axios.post('api/user/register', values);
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Redirecting to the login page");
                navigate("/loginLec");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    return (
        <div className = 'authentication-reg'>
            <div className = 'authentication-form card p-3'>
                <h1>Lecturer Register</h1>

                <Form layout = 'vertical' onFinish = {onFinish}>
                    <Form.Item label = 'Name:' name = 'name'>
                        <Input placeholder = 'Enter Your Full Name'/>
                    </Form.Item>

                    <Form.Item label = 'Email:' name = 'email'>

                        <Input placeholder = 'Enter Your Email Address'/>
                    </Form.Item>

                    <Form.Item label = 'Password:' name = 'password'>
                        <Input placeholder = 'Enter Your Password' type = 'password'/>
                    </Form.Item>

                    <DropdownButton className = "dropd" title="Register As:  ">
                        <Link to = '/Register'><Button className = 'log-stu'><p>Student</p></Button></Link>
                        <br></br>
                        <Button className='log-lec'  htmlType = 'submit'>Lecturer</Button>
                    </DropdownButton>
                    <Link to ='/loginLec' className = 'anchor'>CLICK HERE TO LOGIN</Link>
                </Form>

            </div>
        </div>
    );
};

export default Register;