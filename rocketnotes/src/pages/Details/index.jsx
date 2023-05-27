import {Container, Links, Content} from "./styles"

import {Header} from '../../components/Header'
import {Button} from '../../components/buttons'
import {Section} from '../../components/Section'
import {Tag} from '../../components/Tag'
import {ButtonText} from '../../components/ButtonText'

export  function Details(){
  

  return(
    <Container>
            <Header/>

            <main>
              <Content>

            <ButtonText title="Excluir Nota"/>

            <h1>
              Introdução ao React
            </h1>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
               Sapiente quos ut accusamus similique molestiae? Non odio 
               reprehenderit similique numquam voluptatem voluptatibus 
               necessitatibus illum quo quibusdam veritatis voluptates 
               sunt, deleniti temporibus.
            </p>

            <Section title="Links uteis">
                <Links>
                  <li><a href="#">https://www.rocketseat.com.br</a></li>
                  <li><a href="#">https://www.rocketseat.com.br</a></li>
                </Links>
              </Section>

              <Section title="Marcadores">
                <Tag title="Express"/>
                <Tag title="Node"/>
              </Section>
            <Button title="Voltar" />

            </Content>
            </main>

    </Container>
    
  )
}