import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import StyledInputBase from './StyledInputBase';
import SearchBar from './SearchBar';
import SearchIconWrapper from './SearchIconWrapper';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <SearchBar>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </SearchBar>
                    <Button className='text-transform-none' color="inherit">
                        <Link to='/about'> About </Link>
                    </Button>
                    <Button className='text-transform-none' color="inherit">
                        <Link to='/login'> Login </Link>
                    </Button>
                    <Button className='text-transform-none' color="inherit">
                        <Link to='/register'> Register </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavbarMenu;