import './style.css'
import teslaLogo from '../../assets/tesla.png'


const Header = () => {
    return (
        <header className='header__main'>
            <img src={teslaLogo} className='header__logo' />
        </header>
    )
}

export default Header;