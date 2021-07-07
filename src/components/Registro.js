import '../components/registro.css';
import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';




const Registro = () => {
  
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [ap_paterno, setAp_paterno] = useState('');
  const [ap_materno, setAp_materno] = useState('');
  const [correo, setCorreo] = useState('');
  const [pass, setPass] = useState('');


    const handleChangeUsuario = (e) => {
      setUsuario(e.target.value);
      console.log(usuario);
    }
    const handleChangeAPP = (e) => {
      setAp_paterno(e.target.value);
      console.log(ap_paterno);
    }
    const handleChangeAPM = (e) => {
      setAp_materno(e.target.value);
      console.log(ap_materno);
    }
    const handleChangeCorreo = (e) => {
      setCorreo(e.target.value);
      console.log(correo);
    }
    const handleChangePass = (e) => {
      setPass(e.target.value);
      console.log(pass);
    }
    



    const handleSubmit = (event) => {
      event.preventDefault();



    if ( usuario === '' || ap_materno === '' || ap_paterno === ''  || correo === '' || pass === '' ) {
      Swal.fire({
        icon: 'error',
        text: 'Revisa que tus datos estén completos'
      })
    } else {
      const body = {
        nombre: usuario,
        ap_paterno: ap_paterno,
        ap_materno: ap_materno,
        correo: correo,
        pass: pass,
      };
  
      console.log(body);
        axios.post('https://api-facerecog.herokuapp.com/usuarios/registro',  body ).then( res => {
        if ( res.data.status === 200 ) {
          Swal.fire({
            title: 'Registro exitoso',
            icon: 'success'
          });
          history.push('/');
        } else {
          Swal.fire({
            title: 'Ha ocurrido un error',
            text: 'Revisa la información o tu conexión',
            icon: 'warning'
          })
        }
        });
        console.log(body);
    } 
    
    }
    
    return (
      
        <section className="bg-primary" style={{ height:'100vh', width:'100%'}}>
        <div className="container mb-5">
          <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center alig-items-center mt-5">
              <div className="iniciar" 
              style={{ width: '440px', backgroundColor: 'white', 
              padding:'30px 35px 20px 35px', borderRadius: '15px' }}>
                <div>
                  <span style={{ fontFamily: 'PoppinsBold', fontSize: '30px' }}>Registro</span>
                </div>
                <form onSubmit={ handleSubmit }>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-3 mb-3" type='text' name="usuario"  placeholder='Nombre del usuario' onChange={ handleChangeUsuario } style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-3 mb-3" type='text' name="ap_paterno" placeholder='Apellido paterno' onChange={ handleChangeAPP } style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-3 mb-3" type='text' name="ap_materno" placeholder='Apellido materno'onChange={ handleChangeAPM } style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}>
                    <input className="form-control" type='text' name="correo" placeholder="Correo" onChange={ handleChangeCorreo } style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-3" type='password' name="contrasena"placeholder='Contraseña' onChange={ handleChangePass } style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-3 mb-1" type='password' placeholder='Confirmar contraseña' style={{ height: '45px' }}></input>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <button className="btn btn-primary btn-block" type="submit" style={{ width: '90%', height:'45px', borderRadius: '40px', fontFamily: 'Poppins', fontSize: '20px' }}> Registrarse </button>
                  </div>
                </form>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="imagen ">
              <img alt="imagen decorativa" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Mobile_apps_re_3wjf.svg"
              style={{ width: '500px', height: '500px' }}>
              </img>
              </div>
            </div>

          </div>
        </div>
      </section>    
    );
        
}
export default Registro;