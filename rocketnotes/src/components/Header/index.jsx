import { RiShutDownLine} from 'react-icons/ri'
import { useAuth } from '../../hooks/Auth'
import {Container, Profile, Logout} from './styles'


export function Header(){
    const {signOut} = useAuth()
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

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}
