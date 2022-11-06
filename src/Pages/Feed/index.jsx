
import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './style';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Eduardo Lima" image="https://github.com/duduzx02.png" percentual={82}/>
                <UserInfo nome="Eduardo Lima" image="https://github.com/duduzx02.png" percentual={72}/>
                <UserInfo nome="Eduardo Lima" image="https://github.com/duduzx02.png" percentual={62}/>
                <UserInfo nome="Eduardo Lima" image="https://github.com/duduzx02.png" percentual={52}/>
                <UserInfo nome="Eduardo Lima" image="https://github.com/duduzx02.png" percentual={32}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 
