import { Button } from '@mui/material';
import React from 'react'
import { ButtonProps } from './ButtonInterface';

const OutLineButton = ({ buttonName, color, size }: ButtonProps) => {
    return (
        <Button variant="outlined" color={color} size={size}>
            {buttonName}
        </Button>
    )
}

export default OutLineButton