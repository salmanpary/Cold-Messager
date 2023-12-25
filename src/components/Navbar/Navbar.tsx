"use client";
import React, { useState } from "react";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { signIn, useSession } from "next-auth/react";
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

const Navbar = () => {
	const { data: session } = useSession();
	console.log(session);

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
				fontWeight: 600,
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
										sx={{
											fontWeight: "600px !important",
											typography: "fontWeightBold",
											"& .MuiTypography-root": {
												fontWeight: "600 !important",
											},
										}}
									/>
								</ListItemButton>
							</ListItem>
						</Link>
					</React.Fragment>
				))}
			</List>
		</Box>
	);

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
								sx={{
									fontSize: 18,
									fontWeight: 600,
									textTransform: "none",
								}}
							>
								Home
							</Button>
						</Link>
						<Link href="/pricing">
							<Button
								color="inherit"
								sx={{
									fontSize: 18,
									fontWeight: 600,
									textTransform: "none",
								}}
							>
								Pricing
							</Button>
						</Link>
						{/* <Link href="/contact">
            <Button
              color="inherit"
              sx={{ fontSize: 18, fontWeight: 600, textTransform: "none" }}
            >
              Contact
            </Button>
            </Link> */}
						<Link href="/blog">
							<Button
								color="inherit"
								sx={{
									fontSize: 18,
									fontWeight: 600,
									textTransform: "none",
								}}
							>
								Blog
							</Button>
						</Link>

						{!session?.user ? (
							<button onClick={() => signIn()}>Sign in</button>
						) : (
							<>
								<Button
									aria-controls={
										open ? "basic-menu" : undefined
									}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleClick}
									sx={{
										fontSize: 18,
										fontWeight: 600,
										textTransform: "none",
										color: "black",
									}}
									endIcon={<ArrowDropDownIcon />}
									startIcon={<ManageAccountsIcon />}
								>
									Profile
								</Button>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									MenuListProps={{
										"aria-labelledby": "basic-button",
									}}
								>
									<Link href="/profile/new-template">
										<MenuItem
											onClick={handleClose}
											sx={{ fontWeight: 600 }}
										>
											New Template
										</MenuItem>
									</Link>
									<Link href="/profile/saved-templates">
										<MenuItem
											onClick={handleClose}
											sx={{ fontWeight: 600 }}
										>
											Saved Templates
										</MenuItem>
									</Link>
									<MenuItem
										onClick={handleClose}
										sx={{ fontWeight: 600 }}
									>
										Logout
									</MenuItem>
								</Menu>
							</>
						)}
					</div>
					<DownloadButton
						variant="contained"
						endIcon={<DownloadDoneRoundedIcon />}
						size="large"
					>
						Download
					</DownloadButton>
					<div></div>
				</div>
				<Hidden smUp>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 0.3 }}
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
