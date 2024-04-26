import Logo from "../Logo/Logo";
import Search from '../Search/Search';
import Feedback from '../Feedback/Feedback';
import styles from './Navbar.module.css'
import { Box } from '@mui/material';
import { Link } from 'react-router-dom'

const Navbar = ({searchData}) => {
  return (
    <>
  <Box className={styles.navbar}>
    <Link to="/">
  <Logo />
  </Link>
  <Search placeholder={"Search a new song of your choice"}
  searchData={searchData}/>
  <Feedback/>
  </Box>

  </>
)
};
export default Navbar;
