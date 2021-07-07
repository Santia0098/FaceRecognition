import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../components/inicio.css'
import Swal from 'sweetalert2';
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom';


export const Inicio = () => {
  

  const history = useHistory();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

    const handleChangeCorreo = (e) => {
      setCorreo(e.target.value);
      console.log(correo);
    }

    const handleChangePass = (e) => {
      setContrasena(e.target.value);
      console.log(contrasena);
    }
    



    const handleSubmit = (event) => {
      event.preventDefault();

      if ( correo === '' || contrasena === '' ) { 
        Swal.fire({
          title: 'Completa toda la información',
          icon: 'warning'
        })
      } else {
        const body = {
          correo: correo,
          pass: contrasena,
        };
    
        console.log(body);
          axios.post('https://api-facerecog.herokuapp.com/usuarios/login',  body ).then( res => {
            if( res.data.status === 200 ) {
              Swal.fire({
                title: 'Success',
                icon: 'success',
                text: 'Iniciado correctamente'
              });
              history.push('/deteccion');              
            } else {
              Swal.fire({
                title: 'Ocurrió un error al iniciar sesión',
                icon: 'question',
              })
            }
            console.log(res);
          });
      }    
    }

    const handleClick = () => {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign('https://github.com/Santia0098/FaceRecognition');
    }
    const handleClick2 = () => {
      // do something meaningful, Promises, if/else, whatever, and then
      window.location.assign('https://www.tensorflow.org/js?hl=es-419');
    }


  
    return (
        <div>
            <section className="bg-primary" style={{ height:'100vh', width:'100%'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="imagen">
                  <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Mobile_apps_re_3wjf.svg"
                  style={{ width: '500px', height: '500px' }}
                  alt="imagen de apreciacion"
                  >
                  </img>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center alig-items-center mt-5">
                  <div className="iniciar" 
                  style={{ width: '440px', backgroundColor: 'white', 
                  padding:'40px 35px 20px 35px', borderRadius: '15px' }}>
                    <div>
                      <span style={{ fontFamily: 'PoppinsBold', fontSize: '30px' }}>Iniciar Sesión</span>
                    </div>
                    <form onSubmit={ handleSubmit }>
                      <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                        <input className="form-control mt-5 mb-3" type='text' name="correo" placeholder='Correo' onChange={ handleChangeCorreo } style={{ height: '45px' }}></input>
                      </div>
                      <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}>
                        <input className="form-control" type='password' name="contrasena" placeholder="Contraseña" onChange={ handleChangePass } style={{ height: '45px' }}></input>
                      </div>
                      <div className="mt-5 mb-5 registrate" style={{ fontFamily: 'Poppins', fontSize: '15px' }}>
                      <a href="">¿Aún no tienes cuenta?</a> &nbsp;
                        <Link to="/registro">
                        <span style={{ color: 'blue' }}>Regístrate</span>
                          
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary btn-block" type="submit" style={{ width: '90%', height:'45px', borderRadius: '40px', fontFamily: 'Poppins', fontSize: '20px' }}> Iniciar </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                  <div className="icon d-flex" style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                      <Link className="icons" onClick={handleClick2}>
                          <FontAwesomeIcon icon={faDev} style={{ fontSize: '30px' }} />
                      </Link>
                      &nbsp;
                      &nbsp;
                      <Link className="icons" onClick={handleClick}>
                          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '30px' }} />
                      </Link>
                      &nbsp;
                      &nbsp;
                      <Link className="icons" to="/acerca" >
                          <FontAwesomeIcon icon={faEdit} style={{ fontSize: '30px' }} />
                      </Link>
                  </div>
              </div>
            </div>
          </section>
        </div>
    )
}
