import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLayout } from '../reducers/layoutSlice';
import { Box, Button, Sheet, Stack } from '@mui/joy';
import { useForm } from 'react-hook-form';
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify';

export default function ChangeCatalogue() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate= useNavigate()
  const dispatch = useDispatch()


  const updateHandler = async (data) => {

dispatch(changeLayout(data))
navigate("/home")
toast.success("Filter Applied")
  }


  return (
    <Sheet>
    <Box sx={{display : "flex", justifyContent : 'center',gap : '2vmax',flexDirection : 'column', alignItems : 'center', height : '100vh'}}>

    <Box  >
 <Typography flexDirection={ {md : 'row', xs : 'column'} } display={'flex'} gap={'.6vmax'} variant="h4" color="initial">Select <Typography variant="h4" color="red">Rows</Typography> & <Typography variant="h4" color="blueviolet">Columns</Typography> for Catalogue</Typography></Box>


      <Stack  sx={{display : 'flex', flexDirection : {xs : 'column', md : 'row', alignItems : 'center', gap : '2vmax'}}} component={'form'}   onSubmit={handleSubmit(updateHandler)} alignItems="flex-start">
        <Select
        {...register("rows", {required : true})}
    
          sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
        indicator=<KeyboardArrowDown/>
          placeholder="no. of rows"
          name='rows'
          required
        
        >
           <Option value={1}>1</Option>
    <Option value={2}>2</Option>
    <Option value={3}>3</Option>
    <Option value={4}>4</Option>
    <Option value={5}>5</Option>
    <Option value={6}>6</Option>
        </Select>
        <Select sx={{
        width: 240,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
        indicator=<KeyboardArrowDown/>       {...register("columns", {required : true})}  placeholder="no. of columns"
          name='columns'
          required >
     
      <Option value={3}>3</Option>
      <Option value={4}>4</Option>
      <Option value={5}>5</Option>
      <Option value={6}>6</Option>
      <Option value={7}>7</Option>
      <Option value={8}>8</Option>
      <Option value={9}>9</Option>
    </Select>
        <Button type="submit">Submit</Button>
      </Stack>
    </Box>
    </Sheet>
  );
}

