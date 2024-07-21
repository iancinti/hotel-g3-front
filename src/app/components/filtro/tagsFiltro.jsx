
import './tagsFiltro.css';
import { Chip, Container, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function TagsFiltro({ maxWidth, tags, toogleFiltro, onDeleteTag }) {

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
                <div className="flex gap-4 flex-wrap">
                    <h1>Filtros: </h1>
                    <Stack
                        display='flex'
                        direction="row"
                        flexWrap='wrap'
                        gap='.8rem'>
                        {
                            tags.map( (tag, index) => {
                                return (
                                    <Chip
                                        id={tag}
                                        key={index}
                                        color='info'
                                        label={tag}
                                        variant="outlined"
                                        onDelete={(e)=>{
                                            const name = e.target.ownerDocument.activeElement.textContent;
                                            onDeleteTag( name );
                                        }}
                                    />
                                )
                            })
                        }
                    </Stack>
                </div>
            </Container>
        </div>
    );
}

export default TagsFiltro;