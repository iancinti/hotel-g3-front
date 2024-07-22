'use client';

import './filtro.css'

import * as React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterSkeleton from '@/skeleton-loaders/filterSkeleton';

const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: 4,
    color: '#E6F1FC',
    fontSize: '20px',
    fontWeight: '700',
  }));

export default function Filtro({ isOpen, changeFilter, listOptions, loading }) {

    let styles;
    if(typeof isOpen == 'boolean'){
        styles = isOpen ?'filter-appearLeft' : 'filter-desaparecer';
    }
    

    return (
    <React.Fragment>
        <div className={`${styles} contain-filtro`} style={{ backgroundColor: 'var(--principal)', border: '2px solid grey' }}>
            <Box
                display="flex" flexDirection={'column'}
                alignItems="start" gap={4} p={3} spacing={4}
            >
                <Stack direction="column" sx={{
                    width: '100%'
                }}
                    gap={4}
                >
                        {(!loading && listOptions)
                            ? listOptions.map(({ title, options }) => (
                                <Item key={title}>
                                    <h2 className='text-start text-4xl pb-8'>{title}</h2>
                                    <hr />

                                    {
                                        options.map(({ id, name, checked }) => (
                                            <FormGroup key={id} sx={{
                                                marginY: '1rem'
                                            }}>
                                                <FormControlLabel control={
                                                    <Checkbox checked={checked} name={name}
                                                        onChange={changeFilter}
                                                        color='info'
                                                    />
                                                } label={name} />
                                            </FormGroup>
                                        ))
                                    }

                                    <hr />
                                </Item>
                            ))

                            : <FilterSkeleton/>
                    }
                </Stack>
            </Box>

        </div>
    </React.Fragment>
  );
}

