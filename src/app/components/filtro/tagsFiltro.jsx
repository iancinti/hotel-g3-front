
import './tagsFiltro.css';
import { Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function TagsFiltro({ maxWidth, tags, toogleFiltro }) {

    return (
        <div className='contain-tags'>
            <Container maxWidth={maxWidth}
                sx={{
                    background: 'var(--principal);',
                    padding: '1rem',
                    marginBottom: '2rem',
                    color: 'white',
                    display: 'flex',
                    gap: '15px'
                }}
            >
                <MenuIcon sx={{
                        cursor: 'pointer'
                    }} className='bars'
                    onClick={toogleFiltro}
                />
                <div className="flex gap-4">
                    <h1>Filtros: </h1>
                    { (tags) ? (
                        <div></div>
                    ) : (
                        <div>Ninguno</div>
                    ) }
                </div>
            </Container>
        </div>
    );
}

export default TagsFiltro;