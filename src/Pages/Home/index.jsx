import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import Banner from "../../assets/banner.png";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./style";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <div>
          <Title>
            <TitleHighlight>
              Implemente
              <br />
            </TitleHighlight>
            O seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button title='Começar agora' variant='secondary' onClick={() => null}></Button>
        </div>
        <div>
          <img src={Banner} alt="Imagem principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
export { Header };
