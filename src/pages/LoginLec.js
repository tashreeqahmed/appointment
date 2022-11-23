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
                navigate("/homeLec")
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    return (
        <div className='authentication-log'>
            <div className='authentication-form card p-5'>
                <h1>Lecturer Login</h1>

                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label = 'Email:' name = 'email'>
                        <Input placeholder = 'Enter Your Email'/>
                    </Form.Item>

                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Enter Your Password' type='password' />
                    </Form.Item>

                    <DropdownButton className = "dropd" title="Login As:  ">
                      <Link to = '/login'><Button className='log-stu'><p>Student</p></Button></Link>
                      <br></br>
                      <Button className='log-lec' htmlType='submit'>Lecturer</Button>
                    </DropdownButton>
                       <Link to='/RegisterLec' className='anchor mt-2'>CLICK HERE TO REGISTER</Link>
                </Form>

            </div>

        </div>
    );
};

export default Login;