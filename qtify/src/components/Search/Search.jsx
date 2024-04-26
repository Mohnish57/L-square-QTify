import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'

export default function Search({placeholder, searchData}) {
  
  return (
    <Paper 
      className={styles.search}
      component="form"
      sx={{ display: 'flex', alignItems: 'center', width: 600 }}
    >
      <InputBase
        className={styles.input}
        sx={{ ml: 2, flex: 1 , borderRight:'1px solid black'}}
        placeholder={placeholder}
        inputProps={{ 'aria-label': 'search a maps' }}
      />
      <IconButton type="button" sx={{p: '10px' }} aria-label="search">

        <SearchIcon />
      </IconButton>
    </Paper>
  );
}