"use client"
import React,{useState,useEffect,useRef,useLayoutEffect} from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
import Loading from '../../../../app/loading'
import { TextField } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { redirect } from 'next/navigation'
type TemplateType={
  default_template:boolean,
  template_name:string,
  template_string:string
}
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

const EditTemplate = () => {
  const [isPageLoading,setIsPageLoading] = useState(true)
  useLayoutEffect(()=>{
    setIsPageLoading(true)
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){
     redirect("/")
      
    }
    setIsPageLoading(false)
  },[])
  const params = useParams();
  const [loading ,setLoading] = useState(false)
  const [isContetLoading,setIsContentLoading] = useState(true)
  const [templateContent, setTemplateContent] = useState("");
  const [templateName,setTemplateName] = useState("")
  const templateRef = useRef(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [templateContentServer,setTemplateContentServer] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const prefixText =
    "Type your template and enclose the variables in double curly braces. For example, ";
  const postfixText =
    ". You can use the following variables: name, location,latest_company_name, latest_company_role, latest_company_years_of_experience, first_top_skill, second_top_skill, latest_volunteering_experience";
    const insertTemplateVariable = (variable) => {
      setTemplateContent((prev) => prev + variable);
      templateRef.current.focus();
      
    }
   const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      
      // Append a newline character to the template content
     setTemplateContentServer((prev)=>{
        return prev+"\\n"
     })
     
      // Prevent the default behavior of the Enter key
    }

   }
   const saveTemplate = async() => {
    try{
      setLoading(true)
      const user= JSON.parse(localStorage.getItem("user"))
      const data = {
        user,
        id:params.slug,
        template_name:templateName,
        template_string:templateContentServer,
        default_template:checked
      }
      
      const resp= await axios.patch("/api/edittemplate",data)
      

    }catch(err){
      console.log(err)
    }finally{
      setLoading(false)
    
    }
   }
  const getTemplate = async () => {
    try{
      setIsContentLoading(true)
      const user= JSON.parse(localStorage.getItem("user"))
      const data = {
        user,
        id:params.slug
      }
      const resp= await axios.post("/api/template",data)
      
      setTemplateName(resp.data.selectedTemplate.template_name)
      setTemplateContent(resp.data.selectedTemplate.template_string)
      setTemplateContentServer(resp.data.selectedTemplate.template_string)
      setChecked(resp.data.selectedTemplate.default_template)
    }
    catch(err){
      console.log(err)
    }finally{
      setIsContentLoading(false)
    
    }
  }
  useEffect(()=>{
    getTemplate()
  },[])
 

  if (isContetLoading||isPageLoading) {
    return <Loading />;
  }

  return (
    <div>
      {/* <Navbar /> */}
      <div className="mt-32 p-5">
        <div className="flex flex-col gap-y-3">
          <div className="text-3xl font-bold">Edit Template</div>
          <div className="font-medium">
            {prefixText}
            {/* {highlightedVariable()} */}
            {postfixText}
          </div>
          <div className="flex flex-wrap gap-6">

<CssTextField label="Template Name" placeholder="Template Name,Eg:sales-template" sx={{width:"30ch"}} onChange={(e)=>{
  setTemplateName(e.target.value)
}} value={templateName}></CssTextField>
   <FormControlLabel control={<Checkbox
   checked={checked}
    onChange={handleChange}
   sx={{

// color:"#ff40a5"
'&.Mui-checked': {
  color: '#ffcc4b',
},
   }}/>} label="Default Template" />
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
  sx={{ width:{xs:"100%", sm:"70%"}, height: "100%" }}
  rows={10}
  value={templateContent}
  onChange={(e) => {
    setTemplateContentServer(e.target.value)
    setTemplateContent(e.target.value)

  
  }}
  // ref={templateRef}
  inputRef={templateRef}
  onKeyDown={handleKeyDown}
></CssTextField>
         
          <div className="w-[100%] sm:w-[70%]  flex justify-end">
            <LoadingButton
              loading={loading}
              onClick={saveTemplate}
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


export default EditTemplate