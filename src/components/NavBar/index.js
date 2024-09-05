import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
function NavBar() {
    return (
        <>
            <div className={styles.container}>
                <Link className={styles.Link} to={'/'}>Menu</Link>
                <Link className={styles.Link} to={'/About'}>About</Link>
            </div>
        </>
    );
}
export default NavBar