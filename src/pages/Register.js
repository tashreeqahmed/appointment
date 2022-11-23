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
                navigate("/login");
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
                <h1>Student Register</h1>

                <Form layout = 'vertical' onFinish = {onFinish}>
                    <Form.Item label = 'Name:' name = 'name'>
                        <Input placeholder = 'Enter Your Full Name'/>
                    </Form.Item>

                    <Form.Item label = 'Email:' name = 'email'>

                        <Input placeholder = 'Enter Your Email Address'/>
                    </Form.Item>

                    <Form.Item label = 'Student Number:' name = 'studentNum'>
                        <Input placeholder = 'Enter Your Student Number'/>
                    </Form.Item>

                    <Form.Item label = 'Password:' name = 'password'>
                        <Input placeholder = 'Enter Your Password' type = 'password'/>
                    </Form.Item>

                    <DropdownButton className = "dropd" title="Register As:  ">
                        <Button className = 'log-stu' htmlType = 'submit'><p>Student</p></Button>
                        <br></br>
                        <Link to = '/RegisterLec'><Button className='log-lec'>Lecturer</Button></Link>
                    </DropdownButton>
                    <Link to ='/login' className = 'anchor'>CLICK HERE TO LOGIN</Link>
                </Form>

            </div>
        </div>
    );
};

export default Register;