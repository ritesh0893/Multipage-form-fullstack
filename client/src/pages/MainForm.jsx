import React from 'react'
import Logo from '../assets/logo1.png'
import { useState } from 'react'
import SignUpPart from '../components/SignUpPart';
import PersonalPart from '../components/PersonalPart';
import MainInfo from '../components/MainInfo';
import axios from 'axios'
const MainForm = () => {
    const [page, setpage] = useState(0);
    const [data, setdata] = useState({
        username:"",
        email:"",
        password:"",
        cpassword:"",
        design:"",
        fullname:"",
        Company:"",
        address:"",
        userprofile:"",
        listRadio:"",
        Budget:"",
        reference:'',
        formFile:"",
        timeline:""
    })
    const RegisterUser= async(e)=>{
        const {username,email,password,cpassword,design,fullname,Company,address,userprofile,listRadio,Budget,reference,formFile,timeline} =data;
        e.preventDefault()
        try {
            await axios.post('/register',{
                username,
                email,
                password,
                cpassword,
                design,
                fullname,
                Company,
                address,
                userprofile,
                listRadio,
                Budget,
                reference,
                formFile,
                timeline
            })
            alert("registration successfull")
        } catch (error) {
            alert("registrattion failed");
            console.log(error);
        }
        
    }
    const pageDisplay = ()=>{
        if(page === 0){
            return <SignUpPart data={data} setdata={setdata}/>
        }else if(page === 1){
            return<PersonalPart data={data} setdata={setdata}/>
        }else{
            return<MainInfo data={data} setdata={setdata}/>
        }
    }
    const titles =["Sign Up", "Personal Info", "WEBSITE Info"]
  return (
    <div className='bg-gradient-to-r from-slate-400 to-green-500 w-full h-full min-h-full flex flex-col justify-center py-36 sm:px-6 lg:px-8 z-100 mf:h-screen'>
        <div>
            <div>Progress Bar</div>
        </div>
        <div className='sm:mx-auto mb-4 sm:w-full sm:max-w-md'>
            <img className="mx-auto h-24 w-auto" src={Logo} alt="/" />
            <h1 className='mt-6 text-center text-2xl font-bold tracking-tight text-green-900'>{titles[page]}</h1>
        </div>
        <div className='mx-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm-px-10'>
                <div>
                    {pageDisplay()}
                </div>
                <div className='flex flex-row pt-8 gap-3'>
                    <button 
                    disabled={page===0}
                    onClick={()=>{
                        setpage((current)=>current - 1)
                    }}
                    className='flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white hover:bg-green-400 focus:ring-offset-2'>Prev</button>
                    <button
                    onClick={(e)=>{
                        if (page === titles.length-1) {
                            alert("form submitted");
                            RegisterUser(e)
                            console.log(data);
                        }
                        else{
                            setpage((current)=>current +1)
                        }
                    }}
                    className='flex cursor-pointer w-full justify-center rounded-md border border-transparent bg-green-700 py-2 px-4 text-sm font-medium text-white hover:bg-green-400 focus:ring-offset-2'>{page===titles.length - 1?"Submit":"Next"}</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MainForm
