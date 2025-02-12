import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";
import { IoIosMenu } from "react-icons/io";
import { AuthContext } from "../../Contexts/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    // console.log(user)

    const path = useLocation().pathname;
    const navigate = useNavigate()
    // console.log(path)

    // signout
    const handleSignOut = async (e) => {
        e.preventDefault();

        try {
            await signOutUser()
            navigate('/auth/login')
        }
        catch { /* empty */ }
    }

    // links
    const links = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/allCampaigns"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                All Campaigns
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/addCampaign"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                Add Campaign
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myCampaigns"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                My Campaign
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/myDonations"
                className={({ isActive }) => isActive ? "font-bold" : "hover:font-semibold"}
            >
                My Donation
            </NavLink>
        </li>

    </>

    return (
        <div className="bg-[#E5F1FF] ">
            <div className="w-[95%] lg:w-[90%] mx-auto flex justify-between items-center py-2 md:py-2 lg:py-3   text-black">
                {/* for small device only */}
                <div className="md:hidden">
                    <div className="dropdown ">
                        <div tabIndex="0" role="button" className="text-3xl m-1"><IoIosMenu></IoIosMenu></div>
                        <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-40 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                </div>

                {/* left */}
                <h2 className="text-lg lg:text-2xl font-bold ">FundFusion</h2>
                {/* for md middle */}
                <div className="hidden list-none md:flex items-center gap-5 text-sm lg:text-base">
                    {links}
                </div>
                {/* right side */}
                {/* <div className="flex items-center gap-2 md:gap-5 ">
                    <Link to="/auth/login"><button className={`px-2 md:px-4 py-2 rounded-lg text-sm md:text-base  font-medium ${path === '/auth/login' ? "text-white bg-[#6C5B1D]" : "bg-[#FFF2C2] text-base"}`}>  Login </button></Link>
                    <Link to="/auth/register">   <button className={`px-2 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium ${path === '/auth/register' ? "text-white bg-[#6C5B1D]" : "bg-[#FFF2C2] text-base"}`}> Register </button></Link>
                </div> */}

                <div className="flex items-center gap-2 md:gap-8 ">
                    {
                        user ?
                            <div className="flex items-center gap-2 md:gap-4 ">
                                <div>
                                    <img className="rounded-full w-9 h-9 lg:w-10 lg:h-10" src={user.photoURL} alt="" />
                                </div>
                                <div>
                                    <Link>
                                        <button
                                            onClick={handleSignOut}
                                            className={`px-2 md:px-4 py-2 rounded-lg text-sm md:text-base font-medium ${path === '/auth/login'
                                                    ? 'text-white bg-[#6C5B1D]'
                                                    : 'bg-[#BAC2CA] text-black hover:bg-gray-700 hover:text-white'
                                                }`}
                                        >
                                            Logout
                                        </button>
                                    </Link>
                                </div>

                            </div>
                            :
                            <div className="flex items-center gap-2 md:gap-5 ">
                                <Link to="/auth/login"><button className={`px-2 md:px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-sm md:text-base  font-medium ${path === '/auth/login' ? "text-white bg-[#4B5563] hover:bg-gray-700" : "bg-[#BAC2CA] text-black"}`}>  Login </button></Link>
                                <Link to="/auth/register">   <button className={`px-2 md:px-3 lg:px-4 py-1 lg:py-2 rounded-lg text-sm md:text-base font-medium ${path === '/auth/register' ? "text-white bg-[#4B5563] hover:bg-gray-700" : "bg-[#BAC2CA] text-black"}`}> Register </button></Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;