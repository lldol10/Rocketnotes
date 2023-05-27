import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {Section} from '../../components/Section'
import {Button} from '../../components/buttons'

import { Container, Form} from './styles'
import { NoteItem } from '../../components/Noteitem'
import {Link} from 'react-router-dom'

export function New(){
    return(
        <Container>
            <Header/>

        <main>
            <Form>
                <header>
                    <h1>Criar nota</h1>
                    <Link to="/">Voltar</Link>
                </header>

                <Input placeholder="Titulo" />

                <Textarea placeholder="Observações"/>

                <Section title="Links úteis">
                    <NoteItem value="https://google.com.br"/>
                    <NoteItem isNew placeholder="Novo link"/>
                </Section>

                <Section title="Marcadores">
                    <div className='tags'>
                        <NoteItem value="React"/>
                        <NoteItem isNew placeholder="Nova Tag"/>
                    </div>
                </Section>

                <Button title="Salvar" />
            </Form>
        </main>
            
        </Container>
    )
}