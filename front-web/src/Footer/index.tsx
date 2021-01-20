import {ReactComponent as Instagram} from './Instagram.svg';
import {ReactComponent as Youtube} from './Youtube.svg';
import './styles.css';

function Footer (){
 return (
        <footer className="main-footer">

                App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
                <div className="footer-icons">
                        <a href="https://youtube.com" target="_new">
                                <Instagram></Instagram>
                        </a>
                        <a href="https://youtube.com" target="_new">
                                <Youtube></Youtube>
                        </a>
                        <a href="https://youtube.com" target="_new">
                        <Youtube></Youtube>
                        </a>

                </div>
        </footer>


 )
 }


export default Footer;