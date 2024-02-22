import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';



const Header= ()=>{
    const [dropdown,setdropdown] = useState(false)
    console.log(dropdown)
    const navigate = useNavigate();
    // const [cookies, removeCookie] = useCookies([]);
    // const [username, setUsername] = useState("");
    // useEffect(() => {
    //   const verifyCookie = async () => {
    //     if (!cookies.token) {
    //       navigate("/login");
    //     }
    //     const { data } = await axios.post(
    //       "http://localhost:5000/",
    //       {},
    //       { withCredentials: true }
    //     );
    //     const { status, user } = data;
    //     setUsername(user);
    //     return status
    //       ? toast(`Hello ${user}`, {
    //           position: "top-right",
    //         })
    //       : (removeCookie("token"), navigate("/login"));
    //   };
    //   verifyCookie();
    // }, [cookies, navigate, removeCookie]);
    const handleLogout = () => {
      //removeCookie("token");
      navigate("/");
    };
    
    return(
        <Head>
            <Logo>
              <LogImg src='https://i.pinimg.com/736x/75/4b/d6/754bd63153fce377e99705412867c394.jpg' alt='logo'/>
            </Logo>
            <Searchbar>
                <Input type='text' defaultValue="Movie Name"/>
                <Searchicons>
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </Searchicons>
            </Searchbar>
            <Avatar>
                <AvatarImg onClick={()=>setdropdown(!dropdown)} src='https://images.rawpixel.com/image_png_social_square/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjAyLTU3LXAucG5n.png' alt='logo' />
                 {dropdown && (
                    <Dropdown onClick={()=>setdropdown(!dropdown)}>
                    <ul>
                        <Link to="/myprofile" className='nav-link'><li>My Profile</li></Link>
                        <li onClick={handleLogout}>Logout</li>
                    </ul>
                 </Dropdown>
                 )}
            </Avatar>
        </Head>
    )
}

export default Header

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    height:50px;
    margin-bottom: 20px;
    padding : 0 30px;
`
const Logo = styled.div`

`
const Searchbar = styled.div`
    margin:5px;
    width:40%;
    position: relative;
`
const Avatar = styled.div`
  position: relative;
    
`
const Input = styled.input`
    background-color:#2a72e6;
    height: 40px;
    border-radius:15px;
    width:100%;
    padding:5px 10px;
    border: none;
    padding-right:40px;
`
const LogImg = styled.img`
    width: 50px;
    height: 50px;
`
const AvatarImg = styled.img`
    width: 40px;
    height: 40px;
   border-radius:50%;
`
const Searchicons = styled.span`
    position: absolute;
    right:15px;
    top: 12px;
`
const Dropdown = styled.div`
    position: absolute;
    width: 80px;
    right:-25px;
    bottom:-50px;
    background-color:white;
    color:black;
    padding:5px;
    border-radius:3px;
`