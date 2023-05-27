import { RiShutDownLine} from 'react-icons/ri'
import {Container, Profile, Logout} from './styles'
import {Link} from 'react-router-dom'

export function Header(){
    return(

        <Container>
            <Profile to="/profile">
                <img
                 src='https://github.com/lldol10.png'
                 alt='Foto de Luan Lucas'
                 />

                 <div>
                    <span>Bem - Vindo</span>
                    <strong>Luan Lucas</strong>
                 </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}
