import { Link } from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <p>Copirights &copy; 2022</p>
            <Link to='/about' text-indigo-400 underline>About</Link>
        </footer>
    )
}

export default Footer;