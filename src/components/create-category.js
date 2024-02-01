import { useState } from 'react';
import axios from 'axios';
import { FormControl, FormGroup, InputLabel, Input, Button, TextField, } from '@mui/material';
import { json } from 'react-router-dom';

export default function CreateCategory () {

    const [category, setCategory] = useState('');
    const onSubmit = e =>{
        e.preventDefault();
        const formData = {
            category,
        }

        axios.post('http://localhost:5000/category/add',formData)
        .then(category => console.log(category.data))
        .catch(err => console.log(err))

    };

    return(
    <>
    <div>
        <div>
        <center><h3>Start tracking </h3></center>
        </div>
        <br/>
        <div className='parent-category-div'>
            <div className='list-category-div'>
                <h3>Categories</h3>
                <h6>Categorize your expenses : </h6>

            </div>
            <div className='new-category-div'>
            <form onSubmit={onSubmit}>   
            <FormGroup 
            sx={{
                width:400,
                margin:"auto",
                padding:2,
                boxShadow:"0px 0px 10px rgba(6, 38, 42, 1)"
            }}>
                
                <FormControl sx={{marginTop:2}}>
                    <InputLabel sx={{padding:1}}>Enter Category</InputLabel>
                    <Input onChange={ (e)=>setCategory(e.target.value)}/>
                </FormControl>
                
                <Button 
                type='submit'
                onClick={()=>{alert(`${category}`)}}
                variant="contained" 
                color="primary" 
                sx={{margin:2,marginLeft:27,width:70}}>Save</Button>
            </FormGroup>
            </form> 
            </div>
        </div>
        {/* Msg after Add button: (Good job tracking your spending..) */}
    </div>
    </>
    )}