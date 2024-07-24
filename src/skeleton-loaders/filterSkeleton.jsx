
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '@mui/system';

export default function FilterSkeleton() {
    const bgColor = 'gray';

    return (

        <>
            <Skeleton sx={{
                height: '5rem',
                width: '10rem',
                background: bgColor,
                margin: '0'
            }} />
            
            <Skeleton sx={{
                height: '10px',
                background: bgColor
            }}/>

            <div className='flex gap-4'>
                <Skeleton sx={{
                    background: bgColor,
                    width: '2rem',
                    height: '3rem'
                }}/>
                <Skeleton sx={{
                    background: bgColor,
                    flexGrow: 1
                }}/>
            </div>

            <div className='flex gap-4'>
                <Skeleton sx={{
                    background: bgColor,
                    width: '2rem',
                    height: '3rem'
                }} />
                <Skeleton sx={{
                    background: bgColor,
                    flexGrow: 1
                }} />
            </div>
            
            <Skeleton sx={{
                height: '10px',
                background: bgColor
            }} />
        </>
    );
}