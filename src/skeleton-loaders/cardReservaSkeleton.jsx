
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Card } from '@mui/material';

export default function CardReservaSkeleton() {
    return (
        
        <Card sx={{
            width: { xl: '54em', md: '45em', sm: '30em' },
            height: { xl: '25em', md: '20em', sm: '15em' },
            background: 'transparent', display: 'flex', gap: '0.5rem'
        }}>
            <Skeleton
                variant="rounded"
                sx={{
                    width: '40%',
                    height: '100%'
                }}
            >
            </Skeleton>
            <Skeleton
                variant="rounded"
                sx={{
                    flexGrow: 1,
                    height: '100%',
                }}
            >
            </Skeleton>
        </Card>
    );
}