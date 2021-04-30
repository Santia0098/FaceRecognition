import React from 'react'
import { Link } from 'react-router-dom'
import '../components/inicio.css'

export const Inicio = () => {
    return (
        <div>
            <section className="bg-primary" style={{ height:'100vh', width:'100%'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="imagen">
                  <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Mobile_apps_re_3wjf.svg"
                  style={{ width: '500px', height: '500px' }}
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
                    <form>
                      <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                        <input className="form-control mt-5 mb-3" type='text' placeholder='Usuario' style={{ height: '45px' }}></input>
                      </div>
                      <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}>
                        <input className="form-control" type='password' placeholder="Contraseña" style={{ height: '45px' }}></input>
                      </div>
                      <div className="mt-5 mb-5 registrate" style={{ fontFamily: 'Poppins', fontSize: '15px' }}>
                      <a>¿Aún no tienes cuenta?</a> &nbsp;
                        <Link to="/registro">
                        <span style={{ color: 'blue' }}>Registrate</span>
                          
                        </Link>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary btn-block" type="submit" style={{ width: '90%', height:'45px', borderRadius: '40px', fontFamily: 'Poppins', fontSize: '20px' }}> Iniciar </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="row">
                  <div className="icon">
                      <Link to="/acerca">
                          <i className="fas fa-edit">hola</i>
                      </Link>
                  </div>
              </div>
            </div>
          </section>
        </div>
    )
}
