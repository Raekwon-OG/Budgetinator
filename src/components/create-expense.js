import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { FormControl, FormGroup, InputLabel, Input, Button, TextField, } from '@mui/material';
import { useState, useLayoutEffect } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


export default function CreateExpense () {
    
    const StyledButton = styled(IconButton)(({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
      }));
      const StyledDay = styled(PickersDay)(({ theme }) => ({
        borderRadius: theme.shape.borderRadius,
        color:
          theme.palette.mode === 'light'
            ? theme.palette.secondary.dark
            : theme.palette.secondary.light,
      }));

    const [summary, setSummary] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [currency, setCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(null);

    useLayoutEffect(()=>
      {
        axios.get('http://localhost:5000/category/')
        .then(resp => {
          if (resp.data.length > 0 ){
            setCategories(resp.data.map(categories=>categories.category));
            setCategory(categories[0]);
            console.log(categories);
            console.log(category);
          }
        })
        .catch(err => err)
      },[]
    );

    return(
    <>
    <div>
        <div>
        <center><h3>Start tracking </h3></center>
        </div>
        <br/>
        <div>
            <FormGroup 
            sx={{
                width:500,
                margin:"auto",
                padding:2,
                boxShadow:"0px 0px 10px rgba(6, 38, 42, 1)"
            }}>
                <FormControl>
                    <InputLabel sx={{padding:1}}>Summary</InputLabel>
                    <Input onChange={ (e)=>setSummary(e.target.value)} />
                </FormControl>
                <FormControl sx={{marginTop:2}}>
                    <InputLabel sx={{padding:1}}>Category</InputLabel>
                    <select value={category} onChange={ (e)=>setCategory(e.target.value)}>
                      { 
                      categories.map((category)=>{
                        return <option key={category} value={category}> {category} </option>
                      })
                      }
                    </select>
                </FormControl>
                <FormControl sx={{marginTop:2}}>
                    <InputLabel sx={{padding:1}}>Currency</InputLabel>
                    <Input onChange={ (e)=>setCurrency(e.target.value)}/>
                </FormControl>
                <FormControl sx={{marginTop:2}}>
                    <InputLabel sx={{padding:1}}>Amount</InputLabel>
                    <Input onChange={ (e)=>setAmount(e.target.value)}/>
                </FormControl>
                <FormControl sx={{marginTop:2}}>
                    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',width:200,}}>
                    {/* <div style={{width:80}}><InputLabel sx={{top:-10,marginLeft:1, }}>Date</InputLabel></div>
                    <div style={{width:100,paddingTop:5,marginLeft:0}}>
                    <DatePicker selected={date} onChange={(date)=>{setDate(date)}}/>
                    </div> */}

                    {/* Using DatePicker component from MaterialUI */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                    <DatePicker label="Date" value={date} onChange={(date)=>{setDate(new Date(date))}} 
                     sx={{left:5,}}
                     slots={{
                        openPickerIcon: EditCalendarRoundedIcon,
                        openPickerButton: StyledButton,
                        day: StyledDay,
                      }}
                      slotProps={{
                        openPickerIcon: { fontSize: 'medium' },
                        openPickerButton: { color: 'primary' },
                        textField: {
                          variant: 'filled',
                          focused: true,
                          color: 'primary',
                        },
                      }}/>
                    </DemoContainer>
                    </LocalizationProvider>

                    
                    </div>
                </FormControl>
                <Button onClick={()=>{alert(`${summary},${category},${currency},${amount},${date}`)}}
                variant="contained" 
                color="primary" 
                sx={{margin:2,marginLeft:27,width:70}}>Add</Button>
            </FormGroup>
            
        </div>
        {/* Msg after Add button: (Good job tracking your spending..) */}
    </div>
    </>
    )}