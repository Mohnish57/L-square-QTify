import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.css'

export default function Search() {
  return (
    <Paper 
      className={styles.search}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 ,borderRight:'1px solid black'}}
        placeholder="Search a song of your choice"
        inputProps={{ 'aria-label': 'search a maps' }}
      />
      <IconButton type="button" sx={{p: '10px' }} aria-label="search">

        <SearchIcon />
      </IconButton>
    </Paper>
  );
}