"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js
import Button from "@mui/material/Button";
import DownloadDoneRoundedIcon from "@mui/icons-material/DownloadDoneRounded";
import { styled } from "@mui/system";
import Hidden from "@mui/material/Hidden";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from "next/navigation";
import Image from 'next/image'
import Skeleton from '@mui/material/Skeleton';
import GoogleIcon from '@mui/icons-material/Google';
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import {auth} from "../../lib/auth/firebase"
import firebase from "firebase/app";
import { set } from "date-fns";
import axios from "axios";
const DownloadButton = styled(Button)(({ theme }) => ({
  width: "180px !important",
  height: "50px !important",
  backgroundColor: "#ff40a5 !important",
  color: "white",
  "&:hover": {
    backgroundColor: "#ffcc4b !important",
    transform: "scale(1.02)",
  },
  fontWeight: "bold",
  textTransform: "none",

  [theme.breakpoints.down("lg")]: {
    width: "130px !important",
    display: "none",
  },
}));

type Anchor = "right";
interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber: string | null;
  photoURL: string;
}

interface StsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

interface User {
  acessToken?: string;
  apiKey?: string;
  createdAt?: string;

  displayName: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt?: string;
  photoURL: string|null;
  providerData: ProviderData[];
  providerId: string;
  stsTokenManager?: StsTokenManager;
  tenantId?: string|null;
  uid: string;


}
const Navbar = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<User|null>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navbarItems = [
    {
      name: "Home",
      icon: <HomeIcon style={{ color: "#ff40a5" }} />,
      path: "/",
    },
    {
      name: "Pricing",
      icon: <AccountBalanceWalletIcon style={{ color: "#ff40a5" }} />,
      path: "/pricing",
    },
    {
      name: "Blog",
      icon: <MenuBookIcon style={{ color: "#ff40a5" }} />,
      path: "/blog",
    },
    {
      name: "Faq",
      icon: <QuestionAnswerIcon style={{ color: "#ff40a5" }} />,
      path: "/",
    },
    {
      name: "Contact",
      icon: <ContactMailIcon style={{ color: "#ff40a5" }} />,
      path: "/contact",
    },
  ];

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (
    <Box
      sx={{
        width: 250,
        fontWeight:600,
        height: "100vh",
        backgroundColor: "#fefcf3 !important",
      }}
      role="presentation"
    >
      <List>
        {navbarItems.map((item, index) => (
          <React.Fragment key={index}>
            <Link href={item.path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{ fontWeight:'600px !important',typography: 'fontWeightBold' , '& .MuiTypography-root': {
                        fontWeight: '600 !important',
                      }, }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
  const storeUser = async (user: User) => {
    try{
      setLoading(true)
      setUser(user)
      console.log(user.displayName)
      const response=await axios.post("/api/signin",user)
      console.log(response)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  const googleSignIn = async() => {
    const provider = new GoogleAuthProvider();
    const res=await signInWithPopup(auth, provider)
    const user=res.user
    if(user!=null){
      storeUser(user)
    }
   
  };

  const logOut = async() => {
    await signOut(auth);
  };
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      setUser(currentUser);

      localStorage.setItem("user", JSON.stringify(currentUser));
    });
    return () => unsubscribe();
  }, [user]);


  const handleSignIn = async () => {
    try {
     setLoading(true)
     setUser(null)
     setIsLogin(false)
      await googleSignIn();
      setIsLogin(true)
      


    } catch (error) {
      
      console.log(error);
      setIsLogin(false)
      setUser(null)
    }finally{
      setLoading(false)

    }
  };

  const handleSignOut = async () => {
    try {
      setLoading(true)
      await logOut();
      localStorage.removeItem("user");
      setUser(null);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLogin(false)
      setLoading(false)
    }
  };
const getUser=async()=>{
  setLoading(true)
  const user_details=await localStorage.getItem("user")
  const user_details_json=JSON.parse(user_details!)
  if(user_details_json!=null){
    setUser(user_details_json)
    setIsLogin(true)
  }
  setLoading(false)

}
useEffect(() => {
  getUser()
},[])
  const ProfileMenu=(loading:boolean,isLogin:boolean)=>{
    if(loading){
      return <Skeleton variant="rounded" width={100} height={40} />
    }
    else{
      if(isLogin&&user!=null){
        console.log(user)
        return <>
         <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ fontSize: 18, fontWeight: 600, textTransform: "none",color:"black" }}
        endIcon={<ArrowDropDownIcon />}
        startIcon={<Image src={user?.photoURL} alt="Profile Picture" width={30} height={30} className="rounded-full"/>}
      >
       {user?.displayName}
      </Button>
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
   
  >
    <Link href="/profile/new-template">
    <MenuItem onClick={handleClose}  sx={{fontWeight:600}}>New Template</MenuItem>
    </Link>
    <Link href="/profile/saved-templates">
    <MenuItem onClick={handleClose}  sx={{fontWeight:600}}>Saved Templates</MenuItem>
    </Link>
    <MenuItem onClick={()=>{
      handleClose()
      handleSignOut()
    }}  sx={{fontWeight:600}} >Logout</MenuItem>
  </Menu>
        </>
      }
      else{
        return <Button
          color="inherit"
          sx={{ fontSize: 18, fontWeight: 600, textTransform: "none",color:"#ff40a5" }}
          startIcon={<GoogleIcon sx={{fontSize:18,color:"#ff40a5"}}/>}
          onClick={handleSignIn}
        >
          Login
        </Button>
     
      }
    }
  
  }
  return (
  
    <nav>
      <div className="flex items-center justify-between py-3 pl-2 pr-8 shadow-lg fixed top-0 z-50 w-screen bg-[#fefcf3]">
        <Link href="/">
       
        <img
          src="/cold-messager-logo-2.png"
          alt="Vercel Logo"
          width={250}
          height={250}
          className="hidden sm:block"
        />
        <img
          src="/cold-messager-logo-2.png"
          alt="Vercel Logo Mobile"
          className="block sm:hidden"
          width={200}
          height={200}
        />
         </Link>
        <div className="flex items-center gap-x-11">
          <div className="hidden sm:flex gap-x-6">
            <Link href="/">
            <Button
              color="inherit"
              sx={{ fontSize: 18, fontWeight: 600, textTransform: "none",color:"black" }}
            >
              Home
            </Button>
            </Link>
            <Link href="/pricing">
            <Button
              color="inherit"
              sx={{ fontSize: 18, fontWeight: 600, textTransform: "none",color:"black"  }}
            >
              Pricing
            </Button>
            </Link>
            <Link href="/blog">
            <Button
              color="inherit"
              sx={{ fontSize: 18, fontWeight: 600, textTransform: "none",color:"black"  }}
            >
              Blog
            </Button>
            </Link>
            {
              ProfileMenu(loading,isLogin)
            }
          </div>
          <DownloadButton
            variant="contained"
            endIcon={<DownloadDoneRoundedIcon />}
            size="large"
          >
            Download
          </DownloadButton>
          <div>
     
    </div>

        </div>
        <Hidden smUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr:0.3 }}
            onClick={toggleDrawer("right", true)}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list}
        </Drawer>
      </div>
    </nav>
  
  );
};

export default Navbar;
