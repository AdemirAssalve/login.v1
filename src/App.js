
import { useState } from 'react';

import jpIMG from './assets/login.png';

import './style.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <div className='container'>
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title"> Bem vindo <span/>
            <span className="login-form-title">  </span>
             <img src={jpIMG}   alt="img"/>
             
             <div className='wrap-input'>
               <input 
               className= {email !== '' ? 'has-val input' : 'input'}
               type='email'
               value={email} 
               onChange= {e => setEmail(e.target.value)}/>
               <span className='focus-input' data-placeholder='Email'></span>
             </div>

             <div className='wrap-input'>
               <input 
               className={password !== '' ? 'has-val input' : 'input'}
               type='password'
               value={password} 
               onChange= {e => setPassword(e.target.value)} />
               <span className='focus-input' data-placeholder='Password'></span>
             </div>

             <div className='container-login-form-btn'>
               <button className='login-form-btn'>Login</button>
             </div>
             
             <div className='text-center'>
               <span className='txt1'>Não Possui conta?</span>

               <a className='txt2' href='#'>Criar conta</a>
               </div>


            </span>
          </form> 
         </div>    
        </div>
      </div>
    
    

  );
}

export default App