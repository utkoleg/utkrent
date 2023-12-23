import React from 'react';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter} from "react-icons/fa";
import Sas from "./sas.jpeg"
import "./Footer.css"

function Footer() {
    return (
        <div>
            <div className="d-flex flex-column bg-black">
                <div className="container-fluid flex-grow-1 flex-shrink-0">
                    <div className="px-lg-5">
                        <div className="row py-5">
                            <div className="col-lg-12 mx-auto text-white text-center">
                                <h1 className="display-4">[ ]</h1>
                                <p className="lead mb-0">Find your dream apartment</p>
                                <p className="lead">made by <a href="https://www.instagram.com/utkoleg/"
                                                               className="text-white">
                                    <u>utkoleg</u></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <footer className="bg-white" style={{height: "50%"}}>
                    <div className="container py-5">
                        <div className="row py-4">
                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src={Sas} alt="" width="180"
                                                                                 className="mb-3"/>
                                <p className="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur
                                    adipisicing
                                    elit, sed do eiusmod tempor incididunt.</p>
                                <ul className="list-inline mt-4">
                                    <li className="list-inline-item"><a href="https://twitter.com/utkolegg"
                                                                        target="_blank" title="twitter"><FaTwitter/></a>
                                    </li>
                                    <li className="list-inline-item"><a
                                        href="https://www.facebook.com/profile.php?id=100013179972113" target="_blank"
                                        title="facebook"><FaFacebook/></a></li>
                                    <li className="list-inline-item"><a href="https://www.instagram.com/utkoleg/"
                                                                        target="_blank" title="instagram"><FaInstagram/></a>
                                    </li>
                                    <li className="list-inline-item"><a href="https://ru.pinterest.com/utkoleg/"
                                                                        target="_blank" title="pinterest"><FaPinterest/></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Navigation</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="/" className="text-muted">Home</a></li>
                                    <li className="mb-2"><a href="/about" className="text-muted">About utkomanager</a>
                                    </li>
                                    <li className="mb-2"><a href="/contacts" className="text-muted">Out investors</a>
                                    </li>
                                    <li className="mb-2"><a href="/feedback" className="text-muted">Contact us</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Lorem</h6>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-2"><a href="#" className="text-muted">Ipsum</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Dolor</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Sit amet</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Consec</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-lg-0">
                                <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                                <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    At
                                    itaque temporibus.</p>
                                <div className="p-1 rounded border">
                                    <div className="input-group">
                                        <input type="email" placeholder="Enter your email address"
                                               aria-describedby="button-addon1"
                                               className="form-control border-0 shadow-0"/>
                                        <div className="input-group-append">
                                            <button id="button-addon1" type="submit" className="btn btn-link"><i
                                                className="fa fa-paper-plane"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-light py-4">
                        <div className="container text-center">
                            <p className="text-muted mb-0 py-2">© 2023 All rights reserved.</p>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
}

export default Footer;