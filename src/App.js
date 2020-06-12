import React from 'react';
import { Container } from 'react-bootstrap';
import logos from './image/logos.png';
import team_NE from './image/logo-new-england.png'
import team_Phi from './image/logo-philadelphia.png'
import content_logo from './image/logo-content.png'
import devices_logo from './image/devices.png'
import MaterialIcon from 'material-icons-react';
import logo_ESPN from './image/logo-espn.png'
import logo_EI from './image/logo-EI.png'
import leagues_1 from './image/leagues-1.png'
import leagues_2 from './image/leagues-2.png'
import mini_logo_ESPN from './image/mini-logo-espn.png'
import mini_logo_EI from './image/mini-logo-ei.png'
import logoFooter from './image/logo-uol-footer.png'
import logoBar from './image/logo-uol-init.png'
function App() {

  return (
    <div>
      <div className="bar-logo">
          <img src={logoBar} atl="logo UOL"/>
          <span>esporte clube</span>
      </div>
      <div className="content-initial">
        <Container>
            <div className="top-content">
                <div className="top-images">
                    <img src={logos} atl="logos"/>
                </div>
                <div className="remaining-content">
                    <div className="text">
                        <h1>Assista ao vivo <span>Aos jogos da NFL</span></h1>
                        <p>
                          Com o <strong>UOL Esporte Clube</strong>,
                          você assiste aos principais jogos do Monday
                          Night Football da NFL no <strong>ESPN Play</strong>.
                        </p>
                    </div>
                    <div className="teams-content">
                        <div className="teams">
                            <div className="team england">
                                <img src={team_NE} atl="New England"/>
                                New England Patriots
                            </div>
                            <div className="date-game">
                                <div className="when">Próximo jogo</div>
                                <div className="time">
                                    <strong>11/11</strong> | <strong>11h11</strong>
                                      <MaterialIcon icon="close"/>
                                </div>
                            </div>
                            <div className="team">
                                <img src={team_Phi} atl="Philadelphia"/>
                                Philadelphia Eagles
                            </div>
                        </div>
                        <button className="btn-sign">
                          Experimente por 1 mês
                        </button>
                        <p className="tiny-text">Após período, R$24/mês</p>
                    </div>
                </div>
            </div>
        </Container>
      </div>
      <div className="content-center">
          <Container>
              <div className="centralize">
                  <div className="image-text">
                      <img src={content_logo} atl="Logo de conteúdo"/>
                      <div className="division"></div>
                      <div className="break">
                          <span>Conteúdo disponível</span>
                          <span>a qualquer hora</span>
                          <span>e onde estiver</span>
                      </div>
                  </div>
                  <div className="image-text">
                      <MaterialIcon icon="sports_football" />
                      <div className="division"></div>
                      <div className="break">
                          <span>Acesso simultâneo</span>
                          <span>em até três dispositivos</span>
                      </div>
                  </div>
                  <div className="image-text">
                      <img src={devices_logo} atl="Logo de conteúdo"/>
                      <div className="division"></div>
                      <div className="break"> 
                          <span>Assista no seu celular,</span>
                          <span>tablet e computador</span>
                      </div>
                  </div>
              </div>
          </Container>
          <div className="draw-triangule"></div>
      </div>
      <div className="content-with-card">
            <Container>
              <h2>No UOL Esporte Clube você tem:</h2>
              <div className="centralize-cards">
                  <div className="card-team add-space">
                      <div className="divsion-logo espn">
                          <img src={logo_ESPN} atl="logo ESPN"/>
                      </div>
                      <img className="leagues-img" src={leagues_1} atl="leagues"/>
                      <div className="divsion-logo">
                          Conteúdo disponível no app 
                          <img src={mini_logo_ESPN} atl="logo ESPN"/>
                      </div>
                  </div>
                  <div className="card-team">
                      <div className="divsion-logo">
                          <img src={logo_EI} atl="logo Esporte interativo"/>
                      </div>
                      <img className="leagues-img" src={leagues_2} atl="leagues"/>
                      <div className="divsion-logo">
                          Conteúdo disponível no app 
                          <img src={mini_logo_EI} atl="logo Esporte interativo"/>
                      </div>
                  </div>
              </div>
            </Container>
      </div>
      <footer>
        <Container>
          <div className="centralize-content-bottom">
              <div className="first-content">
                  <div>
                      <img src={logoFooter} atl="logo UOL"/>
                  </div>
                  <span>&copy;1996 - 2018 - UOL - O melhor conteúdo. Todos os direitos reservados.</span>
              </div>
              <div className="second-content">
                <span>Universo online S/A</span>
                <span>CNPJ/MF 01.109.184/0001-95</span>
                <span>Av. Brigadeiro Faria Lima, 1.384, São Paulo/SP</span>
                <span>CEP 01452-02</span>
                <div className="last-text">
                  <MaterialIcon  icon="double_arrow" />
                  uol.com.br/<strong>sac</strong>
                </div>
              </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}

export default App;
