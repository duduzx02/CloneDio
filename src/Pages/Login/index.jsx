
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubTitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./style";

const Login = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/Feed");
  };

  return (
    <>
      <Header></Header>
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu Login e make the change._</SubTitleLogin>
            <form action="">
              <Input placeholder="E-mail"></Input>
              <Input placeholder="password" type="password"></Input>
              <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type='button'></Button>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
export { Header };
