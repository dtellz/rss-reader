import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBar = (props) => {

    const handleSearch = (e) => {
        props.updateSearch(e.target.value)
    }


    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2rem',
                marginTop: '1rem'
            }}
            noValidate
            autoComplete="off"

        >
            <TextField id="standard-basic" label="Search news" variant="standard" onChange={handleSearch} />
        </Box>
    );
}

export default SearchBar;


