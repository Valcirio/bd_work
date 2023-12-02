import { Link } from 'react-router-dom'
import styles from './App.module.css'

export default function App() {

  return (
    <section className={styles.section}>
      <h1>Bem vindo ao FiestaFinder!</h1>
      <div className={`row text-center ${styles.container}`}>
        <h2>Faça o login.</h2>
        <form className={styles.form}>
          <div className='container-md text-start'>
            <label htmlFor='InputEmail' className="form-label">Email:</label>
            <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" />
          </div>

          <div className='container-md text-start'>
            <label htmlFor='InputPass' className="form-label">Senha:</label>
            <input type="password" className="form-control" id="InputPass" />
          </div>

          <div className='container-md row text-start'>
            <button className='btn btn-primary'>Entrar</button>
            <span>Ainda não possui uma conta? <Link to='/cadastro'>Cadastre-se</Link></span>
          </div>
        </form>
      </div>
    </section>
  )
}
