import { useHistory } from "react-router-dom"
import './EditProfileScreen.scss'

export default function EditProfileScreen(props) {
    const history = useHistory()
    const navigateBack = () => history.push('/')

    return (
        <div className="signUp-container">
            <form onSubmit="">
                <ul className="signUp-form">
                    <li>
                        <h2>Editar perfil</h2>
                    </li>
                    <li>
                        <label htmlFor="name">
                            Nome
                        </label>
                        <input type="text" name="name" id="name"/>
                    </li>
                    <li>
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email"/>
                    </li>
                    <li>
                        <label htmlFor="birthdate">
                            Data de nascimento
                        </label>
                        <input type="date" name="birthdate" id="birthdate"/>
                    </li>
                    <li>
                        <label htmlFor="phone">
                            Telefone
                        </label>
                        <input type="tel" name="phone" id="phone"/>
                    </li>
                    <li className="inline-label">
                        <p>Gênero:</p>
                        <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="male">Masculino</label><br/>
                        <input type="radio" id="female" name="gender" value="female"/>
                        <label htmlFor="female">Feminino</label><br/>
                        <input type="radio" id="other" name="gender" value="other"/>
                        <label htmlFor="other">Outro</label>
                    </li>

                    <li className="inline-label">
                        <input type="checkbox" id="notify" name="notify" value="Bike"/>
                        <label htmlFor="notify">Desejo receber notificações de novas promoções</label>
                    </li>

                    <li>
                        <button type="submit" onClick={navigateBack}>Salvar</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}