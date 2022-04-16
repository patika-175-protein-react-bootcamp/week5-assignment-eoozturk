import React, { useState, createContext } from 'react';
import {Formik} from 'formik';
import '../App.css';

import RegisterSchema from '../constants/controlSchema';
import Loading from '../constants/loading';
import Logo from '../images/logo.svg';
import Rect1 from '../images/Rect1.svg';
import Rect1Dark from '../images/Rect1Dark.svg';
import Rect2 from '../images/Rect2.svg';
import Rect2Dark from '../images/Rect2Dark.svg';

function Register(){

  const [wait, setWait] = useState(false)
  const [reg, setReg] = useState(false);
  const[theme, setTheme] =useState("light");

  const toggleTheme = () =>{
    setTheme((curr)=> (curr === "light" ? "dark" : "light"))
  };

  const setRegister = (control) =>{
      setWait(true)
      setTimeout(() => {
        setWait(false)
        setReg(true)
      }, 3000);
  }

return(
  <>
    <div id={theme}>
      <div className="container left">
        <img src={Logo} alt='Title Logo' className="logo"/>
    
        <p className="title">YAZILIM PATİKALARI</p>
        <span className="text-box">
          <p>
            Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir. 
            Ekibini büyütmek isteyen şirketler bir bootcamp'lere sponsor olurlar. 
            Teknik beceriler kazanmaya başlamış ancak işe girmeye hazır olmayan kişiler bootcamp'lere başvururlar. 
            Seçilen adaylar 4-8 haftalık ücretsiz ve yoğun eğitime kabul alırlar. 
            Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka şirketlere işe yerleşirler.
          </p>
        </span>
  
        <span className="rectangle rectangle-top">
          {
            theme === 'light' ?  <img src={Rect1}   alt="Rectangle 1" /> : 
          <img src={Rect1Dark}   alt="Rectangle 1" />
          }
        </span>
        <span className="rectangle rectangle-bottom">
          {
           theme === 'light' ?  <img src={Rect2} alt="Rectangle 2" /> : 
           <img src={Rect2Dark} alt="Rectangle 2" />
          }
        </span>
      </div>
        
      <div className="container right">
  
        <div className='formContainer'>
          <div className='form'>

            <h3 className='titleForm'><strong>Kayıt</strong> 
  
              <div className='mode' >
                {
                  theme === 'light' ? 
              
                  <svg onClick={toggleTheme} width="44" height="44" viewBox="0 0 44 48" fill="none">
                    <path d="M24.551 48C31.9537 48 38.7147 44.632 43.1939 39.1133C43.8565 38.2969 43.134 37.1042 42.1099 37.2992C30.4659 39.5168 19.7729 30.5889 19.7729 18.8348C19.7729 12.0639 23.3974 5.83772 29.2883 2.48531C30.1964 1.96856 29.968 0.591844 28.9362 0.40125C27.4897 0.134525 26.0219 0.000219032 24.551 0C11.3033 0 0.551025 10.7354 0.551025 24C0.551025 37.2477 11.2864 48 24.551 48Z" 
                    fill="#3C3C3C">
                    </path>
                  </svg>
                  :
                  <svg onClick={toggleTheme} width="44" height="44" viewBox="0 0 24 24" fill="none">
                    <path d="M12 7.5C9.52031 7.5 7.5 9.52031 7.5 12C7.5 14.4797 9.52031 16.5 12 16.5C14.4797 16.5 16.5 14.4797 16.5 12C16.5 9.52031 14.4797 7.5 12 7.5ZM23.55 11.2734L19.1109 9.05625L20.6813 4.35C20.8922 3.7125 20.2875 3.10781 19.6547 3.32344L14.9484 4.89375L12.7266 0.45C12.4266 -0.15 11.5734 -0.15 11.2734 0.45L9.05625 4.88906L4.34531 3.31875C3.70781 3.10781 3.10313 3.7125 3.31875 4.34531L4.88906 9.05156L0.45 11.2734C-0.15 11.5734 -0.15 12.4266 0.45 12.7266L4.88906 14.9437L3.31875 19.6547C3.10781 20.2922 3.7125 20.8969 4.34531 20.6813L9.05156 19.1109L11.2688 23.55C11.5688 24.15 12.4219 24.15 12.7219 23.55L14.9391 19.1109L19.6453 20.6813C20.2828 20.8922 20.8875 20.2875 20.6719 19.6547L19.1016 14.9484L23.5406 12.7313C24.15 12.4266 24.15 11.5734 23.55 11.2734ZM16.2422 16.2422C13.9031 18.5812 10.0969 18.5812 7.75781 16.2422C5.41875 13.9031 5.41875 10.0969 7.75781 7.75781C10.0969 5.41875 13.9031 5.41875 16.2422 7.75781C18.5813 10.0969 18.5813 13.9031 16.2422 16.2422Z" 
                    fill="#fdfdfd">
                    </path></svg>
                }
              </div>
  
            </h3>
  
            {
              reg ? <div ><p>Kayıt İşlemi Başarılı</p></div>
              :
              <Formik
              initialValues={{
                email: '',
                username: '',
                password: ''
              }}

              onSubmit={control =>{
                  setRegister(control)
                  console.log(control)
              }}

              validationSchema={RegisterSchema}
              >
            {
              ({values, handleChange, handleSubmit, errors}) =>

              <form>
                <div className='formGroup'>
                  <label className='labelTitle'>AD</label>
                  <input className='textarea'
                    type="text"
                    name="ad"
                    placeholder='Adınızı Giriniz'
                  />

                <label className='labelTitle'>SOYAD</label>
                    <input className='textarea'
                      type="text"
                      name="soyad"
                      placeholder='Soyadınızı Giriniz'
                    />
      
                </div>
                <div className='formGroup'>
                     <label className='required labelTitle'>E-MAİL</label>
                      <input className='textarea'
                    type="text"
                    name="email"
                    placeholder='Email Adresinizi Giriniz'
                    value={values.email}
                    onChange={handleChange}
                    />
                    <span className='formErrorText'>{errors.email}</span>
                </div>
                <div className='formGroup'>
                     <label className='required labelTitle'> KULLANICI ADI</label>
                      <input className='textarea'
                        type="text"
                        name="username"
                        placeholder='Kullanıcı Adınız'
                        value={values.username}
                        onChange={handleChange}
                      />
                    <span className='formErrorText'>{errors.username}</span>
                </div>
                <div className='formGroup'>
                  <label className='required labelTitle'>ŞİFRE</label>
                  <input className='textarea'
                    type="password"
                    name="password"
                    placeholder='Şifreniz'
                    value={values.password}
                    onChange={handleChange}
                    />
                  <span className='formErrorText'>{errors.password}</span>
                  </div>
                  <div className='formGroup'>
                  <label className='required labelTitle'>ŞİFRENİ TEKRAR GİR</label>
                  <input className='textarea'
                    type="password"
                    name="passwordConfirm"
                    placeholder='Şifrenizi Tekrar Giriniz'
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    />
                  <span className='formErrorText'>{errors.passwordConfirm}</span>
                </div>
                <input class="checkbox" type="checkbox"  name="checkbox" />
                <div class="checkboxLabel">Sözleşmeyi kabul ediyorum <br></br></div>

                <div className='formGroup formButton'>
                 <button className='loginButton' type='submit' onClick={handleSubmit} disabled={wait}>
                    {
                      wait ? <Loading/> : 'Kayıt Ol'  
                    }
                  </button>
                </div>
                </form> 
                }  
              </Formik>
            }
          </div>
        </div>    
      </div>
    </div>
  </>
  );
}
export default Register;