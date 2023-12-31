"use client";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import axios from "axios";
import Skeleton from "@mui/material/Skeleton";
import { redirect } from "next/navigation";
const SavedTemplates = () => {
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      redirect("/");
    }
  } ,[]);
  const [loading, setLoading] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [rows,setRows]=useState([])
  const handleDelete =async (id) => {
    try{
    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));
    const user = await JSON.parse(localStorage.getItem("user"));
    const data = {
      user,
      id,
    };
    const resp =await  axios.patch("/api/deletetemplate", data);
    console.log(resp);
    setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    getTemplates()

    }catch(err){
      console.log(err)
    }

  };
  const getTemplates = async () => {

    try{
    setIsLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const data = {
      user,
    };
    const resp = await axios.post("/api/gettemplates", data);
    console.log(resp.data.templateIndexes)
    setRows(resp.data.templateIndexes)
  }catch(err){
    console.log(err)
  }finally{
    setIsLoading(false)
  }

  }
  useEffect(() => {
    getTemplates()

  }
  ,[])
  const TableTest=()=>{
      return(
        <>
        <TableRow>
          <TableCell>
            <Skeleton variant="text" width={400} height={40}/>
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={100}  height={40}/>
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width={100} height={40} />
          </TableCell>
        </TableRow>
         <TableRow>
         <TableCell>
           <Skeleton variant="text" width={400} height={40}/>
         </TableCell>
         <TableCell>
           <Skeleton variant="text" width={100} height={40} />
         </TableCell>
         <TableCell>
           <Skeleton variant="text" width={100} height={40}/>
         </TableCell>
       </TableRow>
        </>
      )
    

  }
  return (
    <div>
      {/* <Navbar /> */}
      <div className="mt-32 px-10 py-5 min-h-[80vh]">
        <div className="text-3xl font-bold">Saved Templates</div>
        <div className="mt-10">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>Template Name</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                    Edit
                  </TableCell>
                  <TableCell align="right" sx={{ fontWeight: 600 }}>
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  isloading && <TableTest/>
                }
                {!isloading && rows?.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.template_name}
                      <span className="px-2 text-[#ff40a5]">{row.default_template&&"(default template)" }</span>
                    </TableCell>
                    <TableCell align="right">
                      <Link href={`/profile/saved-templates/edit/${row.id}`}>
                        <LoadingButton sx={{ color: "#ff40a5" }}>
                          <EditIcon />
                        </LoadingButton>
                      </Link>
                    </TableCell>
                    <TableCell align="right">
                      <LoadingButton
                        sx={{ color: "#ff40a5" }}
                        onClick={() => handleDelete(row.id)}
                        loading={loading[row.id]}
                      >
                        <DeleteIcon />
                      </LoadingButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default SavedTemplates;
