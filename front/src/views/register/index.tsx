import styles from './index.module.css'
import { Link } from 'react-router-dom'


export default function Register(){
    return(
        <section className={styles.section}>
        <h1>Cadastro</h1>
        <form className={styles.form}>
            <div className='container-md text-start'>
                <label htmlFor='InputEmail' className="form-label">Email:</label>
                <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" />
            </div>

            <div className='container-md text-start'>
                <label htmlFor='InputName' className="form-label">Nome:</label>
                <input type="text" className="form-control" id="InputName" />
            </div>

            <div className='row container-md d-flex justify-content-between'>
                <div className='col text-start'>
                    <label htmlFor='InputYear' className="form-label">Data de Nascimento:</label>
                    <input type="date" className="form-control" id="InputYear" />
                </div>

                <div className='col text-start'>
                    <label htmlFor='InputYear' className="form-label">Tipo de Usuário:</label>
                    <input type="date" className="form-control" id="InputYear" />
                    <select name="" id=""></select>
                </div>
            </div>

            <div className='container-md text-start'>
                <label htmlFor='InputPass' className="form-label">Senha:</label>
                <input type="password" className="form-control" id="InputPass" />
            </div>

            <div className='container-md text-start'>
                <label htmlFor='InputPass' className="form-label">Repita sua senha:</label>
                <input type="password" className="form-control" id="InputPass" />
            </div>

            <div className='container-md row text-start'>
                <button className='btn btn-primary'>Fazer Cadastro</button>
                <span>Já possui uma conta? <Link to='/'>Vá para o Login.</Link></span>
            </div>
        </form>
      </section>
    )
}