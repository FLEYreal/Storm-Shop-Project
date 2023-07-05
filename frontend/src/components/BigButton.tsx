import React from 'react'
import Button from '@mui/material/Button';

function BigButton({ isGold = false, children = '', sx = {}, ...props }) {

    return (
        <Button variant="contained" color="primary" size="small" sx={isGold ? {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '180px',
            backgroundColor: '#e29b00',
            boxShadow: 'none',
            textShadow: 'none',
            margin: '7px',
            fontSize: '22px',
            fontWeight: 'bold',
            padding: '10px 40px',
            borderRadius: '10px',

            '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#ffb30f',
            },
            ...sx
        } : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '180px',
            backgroundColor: '#7227ff',
            boxShadow: 'none',
            textShadow: 'none',
            margin: '7px',
            fontSize: '22px',
            fontWeight: 'bold',
            padding: '10px 40px',
            borderRadius: '10px',

            '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#8d4fff',
            },
            ...sx
        }}>
            {children}
        </Button>
    )
};

export default BigButton