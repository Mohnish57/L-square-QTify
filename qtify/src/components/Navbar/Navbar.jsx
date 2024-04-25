import Logo from "../Logo/Logo";
import Search from '../Search/Search';
import Feedback from '../Feedback/Feedback';
import styles from './Navbar.module.css'
import { Box } from '@mui/material';
const Navbar = () => {
  return (
    <>
  <Box className={styles.navbar}>
  <Logo />
  <Search/>
  <Feedback/>
  </Box>

  </>
)
};
export default Navbar;
