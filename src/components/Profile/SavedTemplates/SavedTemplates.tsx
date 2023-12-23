"use client";
import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
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

const SavedTemplates = () => {
  const [loading, setLoading] = useState({});

  const rows = [
    {
      id: 1,
      templateName: "Job Application",
    },
    {
      id: 2,
      templateName: "Product Sales",
    },
    {
      id: 3,
      templateName: "Referral Request",
    },
    {
      id: 4,
      templateName: "Hiring template",
    },
  ];

  const handleDelete = (id) => {
    setLoading((prevLoading) => ({ ...prevLoading, [id]: true }));

    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading((prevLoading) => ({ ...prevLoading, [id]: false }));
    }, 2000);
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="mt-32 px-10 py-5">
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
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.templateName}
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
