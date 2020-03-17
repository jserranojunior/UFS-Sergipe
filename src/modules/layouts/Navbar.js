

import React from 'react'
import styled from "styled-components";
import { useSpring, animated} from "react-spring";
import { Button, Icon } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import Brand from "./Brand";


const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });
  return (
    <header className="row">
<div className="container-fluid">
     <div className="col">
     <div className="row justify-content-center">
      <div className="col-12 col-sm-6 col-lg-6">
      <NavBar style={barAnimation}>
      <Brand />
      <div class="header">
      <Button circular color='blue'  animated='vertical'>
                <Button.Content visible>Audiências</Button.Content>
                <Button.Content hidden>
                  <Icon name='discussions' />
                </Button.Content>
              </Button>
              
              <Button circular color='blue' animated='vertical'>
                <Button.Content visible>Calendário</Button.Content>
                <Button.Content hidden>
                  <Icon name='calendar check' />
                </Button.Content>
              </Button>
             
              <Button circular color='blue'  animated='vertical'>
                <Button.Content visible>Ajuda</Button.Content>
                <Button.Content hidden>
                  <Icon name='question circle' />
                </Button.Content>
              </Button>
             
              <Button circular color='blue'  animated='vertical'>
                <Button.Content visible>Perfil</Button.Content>
                <Button.Content hidden>
                  <Icon name='user circle' />
                </Button.Content>
              </Button>
               
              <a href="login"> <Button circular color='red' animated>
               <Button.Content visible>Sair</Button.Content>
                <Button.Content hidden>
                  <Icon name='log out' />
                </Button.Content>
              </Button></a>
                 </div>
                 </NavBar>
             </div>
           </div>
        </div>
      </div>
      </header>
      
  )
}
export default withRouter(Navbar)

const NavBar = styled(animated.nav)`
  position: relative;
  height: 70px;
  width: 100%;
  top: 0;
  left: 0;
  background: #004694;
  z-index: 1;
  font-size: 1.4rem;
  width: 110, top: 15;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;
