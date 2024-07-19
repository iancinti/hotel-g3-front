'use client'
import { Padding } from '@mui/icons-material';
import { useRouter, usePathname } from 'next/navigation';

const ActiveLink = ({ children, path }) => {
    const router = useRouter();
    const pathName = usePathname();

    const style = (pathName === path) ? {
        background: 'var(--principal)',
        color: 'white',
        padding: '5px 15px',
        borderRadius: '7px'
    } : { };

    return (
        <button
            type="button"
            onClick={() => router.push(path)}
            style={{
                color: "var('--principal')",
                fontWeight: 'bold',
                fontSize: '1.2em',
                ...style,
            }}
        >
            { children }
        </button>
    )
};

export default ActiveLink;
