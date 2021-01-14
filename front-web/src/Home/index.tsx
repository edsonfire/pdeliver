import './styles.css';

import {ReactComponent as Img1} from './img-home.svg';

function Home(){

    return (
    
        <div className="home-container">
                <div className="home-content">

                    <div className="home-actions">
                            <h1 className="home-title">
                                    faça seu pedido <br/> que entregamos <br/> pra você!!!
                            </h1>
                            <h3 className="home-subtitle">
                                Escolha seu pedido e em poucos minutos <br />
                                levaremos na sua porta

                            </h3>
                            <a href="#" className="home-btn-order">

                                FAZER PEDIDO
                            </a>

                    </div>

                    <div className="home-imagens">
                        <Img1></Img1>
                    </div>


               
                </div>

        </div>
        )
}

export default Home;