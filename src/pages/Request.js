import React from 'react';
import '../Layout.css';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "antd";
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form, Input } from "antd";

const Layout = () => {

    const location = useLocation();
    const { user } = useSelector((state) => state.user);

    const userMenu = [];
    const navigate = useNavigate();
    const removeToken = async (userToken) => {
        try {
            const response = await axios.post('/api/user/request', userToken);
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Logged Out");
                localStorage.setItem("token", response.data.data);
                navigate("/login")
            }
        } catch (error) {
            toast.success("Successfully Logged Out");
        }
        localStorage.clear("token");
        userToken(null);
    };
    const menuToBeRendered = userMenu;
    return (
        <div className='main'>
            <div className='d-flex layout'>
                <div className='sidebar'>
                    <div className='sidebar-header'>
                        <h1>MyBoard</h1>
                        <p><b>For Students</b></p>
                    </div>

                    <Link to="/"><Button className='home-word my-1' htmlType='submit'><i class="home-but ri-home-line"></i>HOME</Button></Link>
                    <Link to="/consultations"><Button className='con-word my-1' htmlType='submit'><i class="con-but ri-file-list-line"></i>CONSULTATIONS</Button></Link>
                    <Link to="/request"><Button className='req-word my-1' htmlType='submit'><mark><i class="req-but ri-hospital-line"></i>SUBMIT REQUEST</mark></Button></Link>
                    <Link to="/profile"><Button className='prof-word my-1' htmlType='submit'><i class="prof-but ri-user-line"></i>PROFILE</Button></Link>
                    <Link><Button className='log-word my-1' variant="danger" onClick={removeToken} htmlType='submit'><i className="log-but ri-login-box-line"></i>LOGOUT</Button></Link>

                    <div className='menu'>
                        {menuToBeRendered.map((menu => {
                            const isActive = location.pathname === menu.pathreturn
                            return <div className={`d-flex menu-item ${isActive && 'active-menu-item'}`}>
                            </div>
                        }))}
                    </div>
                </div>

                <div className = 'content'>

                    <div className = "header">
                        <div className = 'profile-icn'>
                            <i className = "ri-notification-line header-action-icon mr-2"></i>
                            <Link className = 'anchor-prof' to = '/profile'>{user?.name}</Link>
                        </div>
                    </div>

                    <div className = "body">
                        <h1>Submit Your Request</h1>
                        <div className='authentication-log-req'>
                            <div className='authentication-form p-5'>

                                <Form layout = 'vertical'>
                                    <Form.Item label = 'Student Number:' name = 'studentNum'>
                                        <Input className = 'message-box' placeholder='Enter Your Student Number' />
                                    </Form.Item>

                                    <Form.Item label = 'Full Name:' name = 'name'>
                                        <Input className = 'message-box' placeholder = 'Enter Your Full Name' />
                                    </Form.Item>

                                    <Form.Item label = 'Message:' name = 'message'>
                                        <Input className = 'message-box' placeholder='Enter Your Message' />
                                    </Form.Item>

                                    <Button className = 'log-stu' htmlType = 'submit'><p>Submit Request</p></Button>
                                </Form>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );

};

export default Layout;