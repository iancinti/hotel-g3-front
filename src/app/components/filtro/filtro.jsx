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

export default function Filtro({ toogleMenu }) {


  return (
    <React.Fragment>
        <div className='contain-filtro'>
            <Box sx={{ border: '2px solid grey', backgroundColor: 'var(--principal)', }}
                width={250}
                height={700} display="flex" flexDirection={'column'}
                alignItems="start" gap={4} p={3} spacing={4}
            >
                <Stack direction="column"
                    gap={4}
                >
                    <Item>Filtro 1
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Opción 1" />
                            <FormControlLabel control={<Checkbox />} label="Opción 2" />
                            <FormControlLabel control={<Checkbox />} label="Opción 3" />
                        </FormGroup>
                    </Item>
                    <Item>Filtro 2
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Opción 1" />
                            <FormControlLabel control={<Checkbox />} label="Opción 2" />
                            <FormControlLabel control={<Checkbox />} label="Opción 3" />
                        </FormGroup>
                    </Item>
                    <Item>Filtro 3
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Opción 1" />
                            <FormControlLabel control={<Checkbox />} label="Opción 2" />
                            <FormControlLabel control={<Checkbox />} label="Opción 3" />
                        </FormGroup>
                    </Item>
                </Stack>
            </Box>

        </div>
    </React.Fragment>
  );
}

