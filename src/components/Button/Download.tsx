"use client"
import {styled} from '@mui/system'
import Button from "@mui/material/Button";
import ExtensionIcon from '@mui/icons-material/Extension';

const DownloadButton = styled(Button)(({ theme }) => ({
    width: "200px !important",
    height: "50px !important",
    backgroundColor: "#ff40a5 !important",
    color: "white",
    "&:hover": {
      backgroundColor: "#ffcc4b !important",
      transform: "scale(1.02)",
    },
    fontWeight: "bold",
    textTransform: "none",
  }));
  
  const Download = () => {
    return (
        <DownloadButton
        variant="contained"
        endIcon={<ExtensionIcon />}
        size="large"
      >
        Download
      </DownloadButton>
    )
  }
  
  export default Download