"use client";
import React,{useState,useRef,useEffect} from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#ffcc4b",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: "#ffcc4b",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffcc4b",
    },
  },
});
const NewTemplate = () => {
  // Text before {{name}}
  const [loading ,setLoading] = useState(false)
 const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);

 }
  const [templateContent, setTemplateContent] = useState("");
  const templateRef = useRef(null);
 
  const prefixText =
    "Type your template and enclose the variables in double curly braces. For example, ";
  const postfixText =
    ". You can use the following variables: name, location,latest_company_name, latest_company_role, latest_company_years_of_experience, first_top_skill, second_top_skill, latest_volunteering_experience";
    const insertTemplateVariable = (variable) => {
      setTemplateContent((prev) => prev + variable);
      templateRef.current.focus();
      console.log(templateRef);
    }
  
  return (
    <div>
      {/* <Navbar /> */}
      <div className="mt-32 p-5">
        <div className="flex flex-col gap-y-3">
          <div className="text-3xl font-bold">New Template</div>
          <div className="font-medium">
            {prefixText}
            {/* {highlightedVariable()} */}
            {postfixText}
          </div>
          <div>

<CssTextField label="Template Name" placeholder="Template Name,Eg:sales-template" sx={{width:"30ch"}}></CssTextField>
</div>
          <div>
            <Button sx={{ textTransform: "none",color:"#ff40a5" }}   onClick={() => insertTemplateVariable("{{name}}")} >{`{{name}}`}</Button>
            <Button sx={{ textTransform: "none",color:"#ff40a5" }} onClick={()=>{
              insertTemplateVariable("{{location}}")
            }}>{`{{location}}`}</Button>
            <Button
             sx={{ textTransform: "none",color:"#ff40a5" }}
             onClick={()=>{
              insertTemplateVariable("{{latest_company_name}}")
             }}
            >{`{{latest_company_name}}`}</Button>
            <Button
              sx={{ textTransform: "none",color:"#ff40a5" }}
              onClick={()=>{
                insertTemplateVariable("{{latest_company_role}}")
              }}
            >{`{{latest_company_role}}`}</Button>
            <Button
              sx={{ textTransform: "none",color:"#ff40a5" }}
              onClick={()=>{
                insertTemplateVariable("{{latest_company_years_of_experience}}")
              }}
            >{`{{latest_company_years_of_experience}}`}</Button>
          </div>
      
          <div>
            <Button
            sx={{ textTransform: "none",color:"#ff40a5" }}
            onClick={()=>{
              insertTemplateVariable("{{first_top_skill}}")
            }}
            >{`{{first_top_skill}}`}</Button>
            <Button
            sx={{ textTransform: "none",color:"#ff40a5" }}
            onClick={()=>{
              insertTemplateVariable("{{second_top_skill}}")
            }}
            >{`{{second_top_skill}}`}</Button>
            <Button
              sx={{ textTransform: "none",color:"#ff40a5" }}
              onClick={()=>{
                insertTemplateVariable("{{latest_volunteering_experience}}")
              }}
            >{`{{latest_volunteering_experience}}`}</Button>
          </div>
         
          
          <CssTextField
  id="outlined-multiline-flexible"
  label="Template"
  placeholder={`Eg:Hi {{name}}, Saw that you are working at {{latest_company_name}}.I am currently looking for a full stack developer role at {{latest_company_name}}. Thank you`}
  multiline
  sx={{ width: "70%", height: "100%" }}
  rows={10}
  value={templateContent}
  onChange={(e) => setTemplateContent(e.target.value)}
  // ref={templateRef}
  inputRef={templateRef}
></CssTextField>
         
          <div className="w-[70%] flex justify-end">
            <LoadingButton
              loading={loading}
              onClick={handleButtonClick}
              variant="contained"
              sx={{
                backgroundColor: "#ffcc4b !important",
                color: "black",
                width: "200px",
                textTransform: "none",
                marginTop: "10px",
                fontWeight: "bold",
              }}
              size="large"
              startIcon={<SaveIcon />}
            >
              Save Template
            </LoadingButton>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default NewTemplate;
