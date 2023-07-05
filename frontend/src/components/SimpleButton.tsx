import React from 'react'
import Button from '@mui/material/Button';

function SimpleButton({isGold = false, onClick = () => {}, children = '', className = '', sx = {}, ...props}) {
    return (
        <Button className={className} onClick={onClick} variant="contained" color="primary" size="small" sx={
            isGold ? {
                backgroundColor: '#e29b00',
                boxShadow: 'none',
                textShadow: 'none',
                borderRadius: '10px',
                margin: '7px',
                fontSize: '15px',
                fontWeight: 'bold',
                padding: '8px 30px',
            
                '&:hover': {
                    backgroundColor: '#ffb30f',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                },
                ...sx
            } : {
                backgroundColor: '#7227ff',
                boxShadow: 'none',
                borderRadius: '10px',
                textShadow: 'none',
                margin: '7px',
                fontSize: '15px',
                fontWeight: 'bold',
                padding: '8px 30px',

                '&:hover': {
                    backgroundColor: '#8d4fff',
                    boxShadow: 'none',
                },
                '&:active': {
                    boxShadow: 'none',
                },
                ...sx
            }
        }>
            {children}
        </Button>
    )
};
 
export default SimpleButton