import React from "react";
import Logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './style';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
      <Row>
            <img src={Logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://github.com/duduzx02.png"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  );
};

export {Header}