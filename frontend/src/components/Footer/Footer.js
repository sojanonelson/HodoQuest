import React from "react";
import Logo from "../../Image/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram} from 'react-icons/fa';

const Footer = () => {


  return (
    <div className="flex flex-col lg:flex-row items-center p-10 justify-between border-[#094944] border-t">
      <div>
      <Link to='/' className="flex flex-col items-center">
        
        <img src={Logo} alt="logo" className="w-52 cursor-pointer"></img>
       
        

      </Link>
      <a href="https://www.instagram.com/hodoq4cbp/" className="flex p-1"><FaInstagram  color="gray" size={30} /></a>

      </div>

      <div className="quick-links flex flex-col lg:flex-row gap-10  lg:w-4/5 justify-between ">

        

        <div className="About  ">
          <h1 className="poppins-bold">About</h1>
          <p className="poppins-regular text-sm">
          Videos
          </p>
          <p className="poppins-regular text-sm">
          Gallery
          </p>
          <p className="poppins-regular text-sm">
          Join Our Team
          </p>
        </div>

        <div className="Support ">
          <h1 className="poppins-bold">Support</h1>
          <p className="poppins-regular text-sm">
          Cancellation Policy
          </p>
          <p className="poppins-regular text-sm">
          Report a Complaint
          </p>
          <p className="poppins-regular text-sm">
          Customer Care
          </p>
        </div>

        <div className="Contact ">
          <h1 className="poppins-bold">Contact</h1>
          <p className="poppins-regular text-sm">
          info@hodoq.com
          </p>
          <p className="poppins-regular text-sm">
          hodoqtourism@gmail.com
          </p>
          <p className="poppins-regular text-sm">
          +91 70125 75518
          </p>
        </div>

        

        <div className="Addess  ">
          <h1 className="poppins-bold">Address</h1>
          <p className="poppins-regular text-sm">
            BUILDING NUMBER 60/49 E 3RD FLOOR JC CHAMBERS PANAMPILLY NAGAR,
            ERNAKULAM KERALA - 682036
          </p>
        </div>

      </div>
    </div>
  );
};

export default Footer;
