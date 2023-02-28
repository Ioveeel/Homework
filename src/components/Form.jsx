import React, {  useContext, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import UsersContext from '../Context/usersContext';
import {  useForm } from 'react-hook-form';
import { useParams, useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
 

  
  const {setUsers,users,addUser, updateUser} = useContext(UsersContext)
  
   const { register,handleSubmit,formState:{errors} } = useForm({})


   function  onSubmit(data){
   
    data.idNumber = Math.floor(Math.random() * 10000) + 1;
    
  if(data.idnumber === users.idnumber){
      alert('სისტემაში უკვე არსებობს პიროვნება მითითებული პირადი ნომრით')
    }
     setUsers(prev => [...prev, data])
     navigate("/");
  }
  
  
  

  return (
    
 
    <form className='mt-8 mx-16' onSubmit={handleSubmit(onSubmit)}>
      <TextField  {...register('firstname',{required:'ველის შევსება აუცილებელია'})} name='firstname'  fullWidth placeholder='სახელი'  style={{marginBottom:'1rem'}}  />
      <p className='text-red-500 mb-2'>{errors.firstname?.message}</p>
      <TextField  {...register('lastname',{required:'ველის შევსება აუცილებელია'})} name='lastname'  fullWidth placeholder='გვარი'  style={{marginBottom:'1rem'}}  />
      <p className='text-red-500 mb-2'>{errors.lastname?.message}</p>
      <TextField  {...register('idnumber',{required:'ველის შევსება აუცილებელია',minLength:{value:11,message:'ციფრები უნდა შედგებოდეს მინიმუმ მინ.11 სიმბოლო'}})} name='idnumber'  type='number' fullWidth placeholder='პირადი ნომერი'  style={{marginBottom:'1rem'}} />
      <p className='text-red-500 mb-2'>{errors.idnumber?.message}</p>

         <select  name='gender' {...register('gender',{required:'ველის შევსება აუცილებელია'})}   className="form-select" aria-label="Default select example" style={{marginBottom:'1rem'}}>
       <option></option>
       <option value="მამრობითი">მამრობითი</option>
       <option value="მდედრობითი">მდედრობითი</option>
           </select>
           <p className='text-red-500 mb-2'>{errors.gender?.message}</p>
       <TextField {...register('date',{required:'ველის შევსება აუცილებელია'})}  name='date'  type='date' fullWidth  style={{marginBottom:'1rem'}} />
       <p className='text-red-500 mb-2'>{errors.date?.message}</p>
       <TextField {...register('birthplace',{required:'ველის შევსება აუცილებელია'})} name='birthplace'  type='text' fullWidth placeholder='დაბადების ადგილი'  style={{marginBottom:'1rem'}} />
       <p className='text-red-500 mb-2'>{errors.birthplace?.message}</p>
       <TextField {...register('adress',{required:'ველის შევსება აუცილებელია'})}   name-='adress'  type='text' fullWidth placeholder='მისამართი'  style={{marginBottom:'1rem'}} />
       <p className='text-red-500 mb-2'>{errors.adress?.message}</p>


      <Button type='submit' variant="contained">შენახვა</Button>
      </form>

  

  // 
  
  
  
  ) 
 
}

export default Form