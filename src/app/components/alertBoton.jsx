import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertBoton({text, name}) {
  const [abre, setAbre] = React.useState(false);

  return (
    <Box sx={{ display: 'flex',  justifyContent: 'flex-end', width: '100%'  }}>
        <Box sx={{ 
               mb: '2em',
               mr: '3em',
               display: 'flex',
               flexDirection: 'column-reverse',
               alignItems: 'end',
               }}>
            <Collapse in={abre}>
                <Alert
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setAbre(false);
                        }}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                >
                {text}
                </Alert>
            </Collapse>
            <Button
                variant="contained"
                disabled={abre}
                onClick={() => {
                setAbre(true);
               
                }}
            >{name}

            </Button>
        </Box>
    </Box>
  );
}