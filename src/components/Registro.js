import '../components/registro.css'
import axios from 'axios';




function Registro() {

    // state = {
    //   usuario: '',
    //   correo: '',
    //   tipo: '',
    //   contrasena: ''
    // }

    // handleChange = event => {
    //   this.setState();
    // }



    // handleSubmit = event => {
    //   event.preventDefault();


    //   const info = {
    //     nombre: this.state.usuario,
    //     correo: this.state.correo,
    //     tipo: this.state.tipo,
    //     pass: this.state.contrasena
    //   };


    //   axios.post(``, { info }).then( res => {
    //     console.log(res);
    //   });
    // }
    
    return (
      
        <section className="bg-primary" style={{ height:'100vh', width:'100%'}}>
        <div className="container">
          <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center alig-items-center mt-5">
              <div className="iniciar" 
              style={{ width: '440px', backgroundColor: 'white', 
              padding:'30px 35px 20px 35px', borderRadius: '15px' }}>
                <div>
                  <span style={{ fontFamily: 'PoppinsBold', fontSize: '30px' }}>Registro</span>
                </div>
                <form>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-5 mb-3" type='text' placeholder='Usuario' style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}>
                    <input className="form-control" type='password' placeholder="Correo" style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                  <select class="form-select mb-3 mt-3" aria-label="Default select example" style={{ height: '45px' }}>
                    <option selected>Tipo de sistema</option>
                    <option value="1">Seguridad pandemia</option>
                    <option value="2">Comparación de rostros</option>
                    <option value="3">Seguridad fábricas</option>
                  </select>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control" type='text' placeholder='Contraseña' style={{ height: '45px' }}></input>
                  </div>
                  <div style={{ fontFamily: 'Poppins', fontSize: '30px' }}> 
                    <input className="form-control mt-3 mb-1" type='text' placeholder='Confirmar contraseña' style={{ height: '45px' }}></input>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <button className="btn btn-primary btn-block" type="submit" style={{ width: '90%', height:'45px', borderRadius: '40px', fontFamily: 'Poppins', fontSize: '20px' }}> Registrarse </button>
                  </div>
                </form>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="imagen ">
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Mobile_apps_re_3wjf.svg"
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