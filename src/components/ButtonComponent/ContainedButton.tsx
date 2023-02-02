import React from 'react'
import { Button } from '@mui/material';
import { ButtonProps } from './ButtonInterface';


export const ContainedButton = ({ buttonName, color, size }: ButtonProps) => {
    return (
        <Button variant="contained" color={color} size={size}>
            {buttonName}
        </Button>
    )
}
