import React from "react";
import Logo from "../../assets/logo-dio.png";
import {GlobalStyle} from '../../styles/global'
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={Logo} alt="Logo Da DIO" />
          <BuscarInputContainer>
            <Input placeholder="Buscar..."></Input>
          </BuscarInputContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button>
        </Row>
      </Container>
    </Wrapper>
  );
};

export {Header}