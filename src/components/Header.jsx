import './Header.css';
import { TbWorld } from "react-icons/tb";
import { FaListUl, FaUserPlus } from "react-icons/fa6";
import { TbPhotoStar } from "react-icons/tb";
import { GiGreenhouse,GiFamilyHouse } from "react-icons/gi";
import { LiaSwimmingPoolSolid } from "react-icons/lia";
import { PiBuildingApartmentFill, PiGolfBold ,PiKeyBold ,PiHandHeartDuotone , PiChefHatDuotone} from "react-icons/pi";
import { MdViewCompactAlt } from "react-icons/md";
import { FaHouseChimney ,FaMountainCity} from "react-icons/fa6";


function Header() {
    return (
        <>
            <div className="container">
                <div className="header-top">
                    <div className="top">
                        <div className="side">
                            <img src='https://www.edigitalagency.com.au/wp-content/uploads/airbnb-logo-png-transparent-background.png' className='image'></img>
                        </div>

                        <div className="center"><a>Stays</a>
                            <a>Experience</a></div>
                        <div className="last">
                            <a>Airbnb your home<span className='icon'><TbWorld /> </span><div className="box"><span className='icon1'><FaListUl/> <FaUserPlus /></span></div></a>
                        </div>
                    </div>
                </div>
                <div className="head-two">
                    <div className="bar">
                        <div className="destination">
                            <a>where<p>destination</p></a>

                        </div>
                        <div className="destination"><a>Check in<p>Add dates</p></a></div>
                        <div className="destination" > <a>Chack out<p>Add dates</p></a></div>
                        <div className="destination"><a>who<p>Add guest</p></a></div>
                        
                       
                        
                        <img src="https://as2.ftcdn.net/v2/jpg/02/32/88/57/1000_F_232885759_JSp9209ukM8WpAjJweVhP9j4lyUrkyNt.jpg" className='search'></img>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="head-three">
                 <div className="icons">
                 <div className="boxx">
                        <div className="boxicons"><a href='./Footer.jsx'><TbPhotoStar/></a></div>
                        <pre>All icons</pre>
                    </div>
                    <div className="boxx">
                        <div className="boxicons">< GiGreenhouse /></div>
                        <pre>Farms</pre>
                    </div>         
                        <div className="boxx">
                        <div className="boxicons"> <LiaSwimmingPoolSolid /></div>
                        <pre>Amazing pools</pre>
                    </div>             
                        <div className="boxx">
                        <div className="boxicons"><PiBuildingApartmentFill/></div>
                        <pre>Country side</pre>
                    </div>           
                          <div className="boxx">
                        <div className="boxicons"><PiGolfBold/></div>
                        <pre>Golfing</pre>
                    </div>           
                          <div className="boxx">
                        <div className="boxicons"><PiKeyBold /></div>
                        <pre>New</pre>
                    </div>
                    <div className="boxx">
                        <div className="boxicons">< MdViewCompactAlt/></div>
                        <pre>Amazing view</pre>
                    </div>               
                      <div className="boxx">
                        <div className="boxicons"><PiHandHeartDuotone/></div>
                        <pre>Luxe</pre>
                    </div>              
                       <div className="boxx">
                        <div className="boxicons"><FaHouseChimney /></div>
                        <pre>ddff</pre>
                    </div>
                    <div className="boxx">
                        <div className="boxicons"><FaMountainCity/></div>
                        <pre>Top of the world</pre>
                    </div>
                    <div className="boxx">
                        <div className="boxicons"><GiFamilyHouse /></div>
                        <pre>Historical house</pre>
                    </div>
                    <div className="boxx">
                        <div className="boxicons">< PiChefHatDuotone/></div>
                        <pre>Chef's kitchen</pre>
                    </div>
                 </div>
                </div>
            </div>
        </>
    )
}
export default Header;