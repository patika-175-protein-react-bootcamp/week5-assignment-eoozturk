import React, { useState, createContext } from 'react';
import {Formik} from 'formik';
import '../App.css';

import RegisterSchema from '../constants/controlSchema';
import Loading from '../constants/loading';
import Logo from '../images/logo.svg';
import Rect1 from '../images/Rect1.svg';
import Rect2 from '../images/Rect2.svg';

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
        <img src={Rect1} alt="Rectangle 1" />
    </span>
    <span className="rectangle rectangle-bottom">
        <img src={Rect2} alt="Rectangle 2" />
    </span>
</div>

<div className="container right">
<div className='formContainer'>
<div className='form'>
  <button onClick={toggleTheme}>Dark/Ligt Mod</button>
  <h3 className='titleForm'><strong>Kayıt</strong></h3>
  

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
      <span></span>

      <label className='labelTitle'>SOYAD</label>
          <input className='textarea'
        type="text"
        name="soyad"
        placeholder='Soyadınızı Giriniz'
        />
      <span></span>
        </div>
    <div className=''>
     
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