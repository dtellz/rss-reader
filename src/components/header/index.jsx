import './style.css'
import teslaLogo from '../../assets/tesla.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {

    const navigate = useNavigate();

    return (
        <header className='header__main'>
            <img src={teslaLogo} alt='main__logo' className='header__logo' onClick={() => navigate('/home')} />
        </header>
    )
}

export default Header;