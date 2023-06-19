import React from 'react'
import Button from '@mui/material/Button';

function SimpleButton({isGold = false, onClick = () => {}, children = '', className = '', sx = {}, ...props}) {
    return (
        <Button className={className} onClick={onClick} variant="contained" color="primary" size="small" sx={
            isGold ? {
                backgroundColor: '#e29b00',
                boxShadow: 'none',
                textShadow: 'none',
                margin: '7px',
                fontSize: '15px',
                fontWeight: 'bold',
                padding: '6px 20px',
            
                '&:hover': {
                    backgroundColor: '#ffb30f'
                },
                ...sx
            } : {
                backgroundColor: '#7227ff',
                boxShadow: 'none',
                textShadow: 'none',
                margin: '7px',
                fontSize: '15px',
                fontWeight: 'bold',
                padding: '6px 20px',

                '&:hover': {
                    backgroundColor: '#8d4fff'
                },
                ...sx
            }
        }>
            {children}
        </Button>
    )
};
 
export default SimpleButton