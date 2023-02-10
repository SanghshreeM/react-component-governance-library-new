import React, { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from "@mui/material/FormHelperText";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '../../images/Branding/09 Icon Library/PNG/info.png';
import ErrorIcon from '../../images/Branding/09 Icon Library/PNG/icon-alert.png';
import eyeOffIcon from '../../images/Branding/09 Icon Library/PNG/eye-off.png';
import eyeOnIcon from '../../images/Branding/09 Icon Library/PNG/eye-off.png';
import './BrspdInputField.scss';
import InputAdornment from '@mui/material/InputAdornment';


export interface InputFieldProps {
  label?: string;
  error?: boolean;
  inputType?: 'Password' | 'Number' | 'Email' | 'PhoneNumber';
  isRequired?: boolean;
  isTooltip?: boolean;
  errorMessage?: string;
  onClick?: () => void;
  handleChange?: () => void;
}

const BrspdInputField = ({ label, error, inputType, isRequired = false, errorMessage, isTooltip = false, ...props }: InputFieldProps) => {


  return (
    <>
      <Box>
        {isRequired ? (<> <div style={{ display: 'flex' }}><InputLabel className='input-label' id='input-label'> {label}</InputLabel ><span style={{ color: 'red', fontSize: 14 }}>*</span> </div></>)
          : <InputLabel className='input-label' id='input-label'> {label}</InputLabel>}
        {inputType === 'Password' ? <TextField
          type={inputType}
          required={isRequired}
          error={error}
          className='input-field' id='input-field'
          InputProps={{

            endAdornment: (
              <InputAdornment position="end">
                <img src={eyeOffIcon} className='img-eye-small'></img>
              </InputAdornment>
            ),
          }}>
        </TextField> : <TextField
          required={isRequired}
          type={inputType}
          error={error}
          className='input-field' id='input-field'></TextField>}
        {isTooltip ? <Tooltip title="Info" placement="right">
          <img src={InfoIcon} className='img-info-small' />
        </Tooltip> : ''}
      </Box>
      <span>{error && isRequired && (<div style={{ display: 'flex', marginTop: 14 }}> <img src={ErrorIcon} className='error-img' /> <FormHelperText className='error-text'>{errorMessage}</FormHelperText></div>)}</span>
    </>
  );

};


export default BrspdInputField;