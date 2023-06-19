import React from 'react'
import Button from '@mui/material/Button';

function BigButton({isGold = false, children = '', sx = {}, ...props}) {

    return (
        <Button variant="contained" color="primary" size="small" sx={isGold ? {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '180px',
            backgroundColor: '#e29b00',
            textShadow: 'none',
            margin: '7px',
            fontSize: '22px',
            fontWeight: 'bold',
            padding: '10px 40px',
            borderRadius: '17px',
            boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.25)',
        
            '&:hover': {
                backgroundColor: '#ffb30f',
                boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.3), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.3)'
            },
            ...sx
        } : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '180px',
            backgroundColor: '#7227ff',
            textShadow: 'none',
            margin: '7px',
            fontSize: '22px',
            fontWeight: 'bold',
            padding: '10px 40px',
            borderRadius: '17px',
            boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.25), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.25)',
        
            '&:hover': {
                backgroundColor: '#8d4fff',
                boxShadow: 'inset 2px 2px 3px 0px rgba(255, 255, 255, 0.3), inset -2px -2px 3px 0px rgba(0, 0, 0, 0.3)'
            },
            ...sx
        }}>
            {children}
        </Button>
    )
};
 
export default BigButton