import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik'



const Form = () => {
    const formik = useFormik({
      initialValues: {
        firstname:'',
        lastname:'',
        idnumber:'',
        gender:'',
        date:'',
        birthplace:'',
        adress:'',
        
      }
    })
  console.log(formik.values)
  return (
    <>
    <form >
      <TextField value={formik.values.firstname} onChange={formik.handleChange} name='firstname'  fullWidth placeholder='სახელი'  style={{marginBottom:'1rem'}}  />
      <TextField value={formik.values.lastname} onChange={formik.handleChange} name='lastname'  fullWidth placeholder='გვარი'  style={{marginBottom:'1rem'}}  />
      <TextField value={formik.values.idnumber} onChange={formik.handleChange} name='idnumber'  type='number' fullWidth placeholder='პირადი ნომერი'  style={{marginBottom:'1rem'}} />
      
        {/* <DropDown  /> */}
    <select value={formik.values.gender} onChange={formik.handleChange} name='gender'  className="form-select" aria-label="Default select example" style={{marginBottom:'1rem'}}>
  <option>სქესი</option>
  <option value="მამრობითი">მამრობითი</option>
  <option value="მდედრობითი">მდედრობითი</option>
      </select>
      {/* date */}
  <TextField value={formik.values.date} onChange={formik.handleChange} name='date'  type='date' fullWidth placeholder='პირადი ნომერი'  style={{marginBottom:'1rem'}} />
  <TextField value={formik.values.birthplace} onChange={formik.handleChange} name='birthplace'  type='text' fullWidth placeholder='დაბადების ადგილი'  style={{marginBottom:'1rem'}} />
  <TextField value={formik.values.adress} onChange={formik.handleChange} name-='adress'  type='text' fullWidth placeholder='მისამართი'  style={{marginBottom:'1rem'}} />

  <Button variant="contained">შენახვა</Button>
  
      
    </form>

    </>
  )
}

export default Form