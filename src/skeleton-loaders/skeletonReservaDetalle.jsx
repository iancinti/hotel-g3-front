
import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Stack } from '@mui/system';

export default function SkeletonDetalle() {
    return (
        
        <Stack spacing={2} margin={4}>
            <Skeleton
                variant="rectangular" width={120} height={40} 

            >
            </Skeleton>
            <Skeleton
                variant="rectangular" width={210} height={40}
            >
            </Skeleton>
            <Skeleton
                variant="rectangular" width={800} height={100}
            >
            </Skeleton>
            <Skeleton
                variant="rectangular" width={210} height={40}
            >
            </Skeleton>
            <Skeleton
                variant="rectangular" width={800} height={100}
            >
            </Skeleton>
            <Skeleton
                variant="rectangular" width={210} height={40}
            >
            </Skeleton>
            <Skeleton
                variant="rectangular" width={800} height={70}
            >
            </Skeleton>
        </Stack>
    );
}