'use client';

import './filtro.css'

import * as React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: '#E6F1FC',
    fontSize: '20px',
    fontWeight: '700',
  }));

export default function Filtro({ isOpen, changeFilter, listOptions }) {

    let styles;
    if(typeof isOpen == 'boolean'){
        styles = isOpen ?'filter-appearLeft' : 'filter-desaparecer';
    }
    

    return (
    <React.Fragment>
        <div className={`${styles} contain-filtro`}>
            <Box sx={{ border: '2px solid grey', backgroundColor: 'var(--principal)', }}
                display="flex" flexDirection={'column'}
                alignItems="start" gap={4} p={3} spacing={4}
            >
                <Stack direction="column" sx={{
                    width: '100%'
                }}
                    gap={4}
                >
                    {listOptions.map( ({ title, options }) => (
                        <Item key={title}>
                            <h2 className='text-start text-2xl pb-4'>{title}</h2>
                            <hr/>

                            {
                                options.map( ({ name, checked })=> (
                                    <FormGroup key={name}>
                                        <FormControlLabel control={
                                            <Checkbox checked={ checked } name={name} 
                                                onChange={changeFilter}
                                                color='info'
                                            />
                                        } label={name} />
                                    </FormGroup>
                                ))
                            }

                            <hr/>
                        </Item>
                    ))}
                </Stack>
            </Box>

        </div>
    </React.Fragment>
  );
}

