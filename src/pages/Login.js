import React from 'react';
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from "antd";

const Login = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            const response = await axios.post('/api/user/login', values);
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Redirecting you to the home page");
                localStorage.setItem("token", response.data.data);
                navigate("/")
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    return (
        <div className='authentication-log'>
            <div className='authentication-form card p-5'>
                <h1>Student Login</h1>

                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label = 'Student Number:' name = 'studentNum'>
                        <Input placeholder = 'Enter Your Student Number'/>
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Enter Your Password' type='password' />
                    </Form.Item>

                    <DropdownButton className = "dropd" title="Login As:  ">
                      <Button className='log-stu' htmlType='submit'><p>Student</p></Button>
                      <br></br>
                      <Link to = '/LoginLec'><Button className='log-lec'>Lecturer</Button></Link>
                    </DropdownButton>
                       <Link to='/Register' className='anchor mt-2'>CLICK HERE TO REGISTER</Link>
                </Form>

            </div>

        </div>
    );
};

export default Login;