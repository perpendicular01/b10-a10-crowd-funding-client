import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";


const HomeLayout = () => {
    return (
        <div className="font-poppins  min-h-screen">
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <Navbar></Navbar>
            </div>
            <div className="bg-[#F8FAFC]">
                <Outlet />
            </div>
            <div className="pt-[100px]"> {/* Add padding to account for fixed navbar height */}
                
                <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;