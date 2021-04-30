import React from 'react'
import '../components/acerca.css'

export const Acerca = () => {
    return (
        <div>
            <section className="bg-primary" style={{ height:'100vh', width:'100%'}}>
        <div className="container">
          <div className="row">

          <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center alig-items-center mt-5">
              <div className="iniciar" 
              style={{ width: '800px', height: '495px', backgroundColor: 'white', 
              padding:'30px 35px 20px 35px', borderRadius: '15px' }}>
                <p className="d-flex justify-content-center align-items-center text-center" style={{ fontFamily: 'Poppins', fontSize: 20 }}>
                <br></br>
                Proyecto desarrollado por: Miguel Hernandez.
                <br></br>
                <br></br>
                <br></br>
                Miembro de TecDevs.
                <br></br>
                <br></br>
                Proyecto desarrollado en React.
                <br></br>
                <br></br>
                Utiliza Tensor Flow para el reconocimiento facial.
                </p>

                <p className="tecdevs">
                    <span style={{ color: 'green', fontFamily: 'Poppins', fontSize: '25px', fontWeight: 'bold'}}>/TecDevs</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>  
        </div>
    )
}
