import React, { useEffect } from 'react';
import * as faceapi from 'face-api.js';
import '../components/deteccion.css'
import { Link } from 'react-router-dom'


export const Deteccion = () => {
    const [text, onChangeText] = React.useState("Sin reconocimiento");
    

    const inicioReconocimiento = () => {
        const video = document.getElementById('video');
        navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
        navigator.getUserMedia(
            { video: {} },
            stream => video.srcObject = stream,
            err => console.log(err)
        );
        reconocimiento(video);
    }

    const reconocimiento = async (video) => {
        const labels = ['migue', 'co1'];
        const labelFaceDescriptions = await Promise.all(
            labels.map(async label => {
                const imgLink = `${label}.jpg`;
                const imgName = await faceapi.fetchImage(imgLink);

                const fullFaceDescripcion = await faceapi.detectSingleFace(imgName).withFaceLandmarks().withFaceDescriptor();
                if (!fullFaceDescripcion) throw new Error(`no hay caras para ${label}`);
                const faceDescriptors = [fullFaceDescripcion.descriptor];
                return new faceapi.LabeledFaceDescriptors(label, faceDescriptors)
                
            })
        );

        const matcher = new faceapi.FaceMatcher(labelFaceDescriptions, 0.57);
        
        video.addEventListener('play', () => {
            const canvas = faceapi.createCanvasFromMedia(video);
            document.getElementById('main').append(canvas);
            const displaysize = { width: video.width, height: video.height };
            faceapi.matchDimensions(canvas, displaysize);
            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();
                const resizedDetections = faceapi.resizeResults(detections, displaysize);
                canvas.getContext('2d').clearRect(1, 1, canvas.width, canvas.height);
                const results = resizedDetections.map(fd => matcher.findBestMatch(fd.descriptor));
                results.forEach((bestMach, i) => {
                    const box = resizedDetections[i].detection.box;
                    const text = bestMach.toString();
                    //console.log(text.substr(0, 7));

                    if(text.substr(0, 7) === 'unknown' || text.substr(0, 7) === '') {
                        const drawBox = new faceapi.draw.DrawBox(box, { label: text });
                        onChangeText('Sin similitud');
                        drawBox.draw(canvas);
                    } else {
                        const drawBox = new faceapi.draw.DrawBox(box, { label: text });
                        onChangeText('Similitud');
                        drawBox.draw(canvas);
                    }    
                });
            }, 90);
        });
    }
    
    useEffect(() => {
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.mtcnn.loadFromUri('/models'),
            faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceLandmark68TinyNet.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ]).then(inicioReconocimiento).catch((err) => console.log(err));
    }, []);

    return (
       <div>
           <div className="container-fluid detex">
               <div className="row">
                   <div className="col-lg-9 col-md-9 col-sm-12 d-flex justify-content-center" style={{ marginTop: '150px', alignSelf: '80px', width: '900px', height: '500px' }}>
                       <div className="fondo d-flex justify-content-center align-items-center" id="main">
                            <video width="620" height="450" autoPlay muted id="video"></video>
                       </div>
                   </div>
                   <div className="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-center" style={{ marginTop: '90px'}}  >
                       <div className="row">
                            <div className="col-12">
                                <div className="fondo2 d-flex justify-content-left" style={{ flexDirection: 'column' }} >
                                    <div>
                                    <p className="d-flex justify-content-left align-items-left" style={{ fontSize: '20px',fontWeight: 'bold' }}>Situacion</p>  
                                    </div>
                                    
                                        {(() => {
                                            if(text === 'Similitud') {
                                                return (
                                                    <p className="d-flex justify-content-left align-items-left" style={{ fontSize: '24px',fontWeight: 'bold' }}> Detectado: &nbsp; <span style={{ color:'#32F00F' }}> { text } </span></p>  
                                                )
                                            } else {
                                                return (
                                                    <p className="d-flex justify-content-left align-items-left" style={{ fontSize: '24px',fontWeight: 'bold' }}> Detectado: &nbsp; <span style={{ color:'red' }}> { text } </span></p>  
                                                )
                                            }
                                        })()} 
                                                 
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="fondo3" style={{ flexDirection: 'column' }}>
                                    <div className="mb-4">
                                    <Link to="/pandemia" > <span className="btn btn-primary" style={{width: '360px', height: '80px'}}>Pandemia</span>  </Link>
                                    </div>

                                    <div className="mb-4">
                                    <Link to="/seguridad" > <span className="btn btn-primary" style={{width: '360px', height: '80px'}}>Seguridad Industrial</span>  </Link>
                                    </div>

                                    <div>
                                    <Link to="/deteccion" > <span className="btn btn-primary" style={{width: '360px', height: '80px'}}>Deteccion y comparacion</span>  </Link>
                                    </div>
                                </div>
                            </div>
                       </div>     
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Deteccion;