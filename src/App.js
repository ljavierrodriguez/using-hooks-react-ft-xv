import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';

export default function App() {

  const [state, setState] = useState({
    name: '',
    lastname: ''
  });
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  let nameInput = document.querySelector('#name');
  let nameRef = useRef();
  let lastnameRef = useRef();

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault();

    let data1 = {
      name,
      lastname
    }

    let data2 = {
      name: nameRef.value,
      lastname: lastnameRef.value
    }

    if (nameRef.value == '') {
      nameRef.classList.add('alert-danger');
    }
    console.log("Data1: ", data1);
    console.log("Data2: ", data2);


  }

  let iframeRef = useRef();

  const setVideo = (e, video) => {
    e.preventDefault();

    console.log(video);
    iframeRef.src = video;
    iframeRef.style.boxShadow = '2px 2px 5px #ccc';
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='text-center'>React Hooks</h1>
            </div>
            <div className="col-md-6 text-center">
              {name}
            </div>
            <div className="col-md-6 text-center">
              {lastname}
            </div>
            <div className="col-md-6 pb-2">
              <input type="text" className="form-control" placeholder='Insert name' name="name" value={name} onChange={e => {setName(e.target.value); handleChange(e);}} />
            </div>
            <div className="col-md-6 pb-2">
              <input type="text" className="form-control" placeholder='Insert lastname' name="lastname" value={lastname} onChange={e => {setLastname(e.target.value); handleChange(e);}} />
            </div>

            <div className="col-md-6 pb-2">
              <input type="text" className="form-control" placeholder='Insert name' ref={(elem) => nameRef = elem} />
            </div>
            <div className="col-md-6 pb-2">
              <input type="text" className="form-control" placeholder='Insert lastname' ref={(elem) => lastnameRef = elem} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="d-grid">
                <button className="btn btn-primary gap-2">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="list-group">
              <a className="list-group-item list-group-item-action" onClick={(e) => setVideo(e, 'https://www.youtube.com/embed/hTWKbfoikeg')}>
                Nirvana - Smells like teen spirit
              </a>
            </div>
          </div>
          <div className="col-md-6 offset-md-3">
            <iframe ref={(elem) => iframeRef = elem} width="100%" height="300" src="" title="YouTube video player"
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </>
  )
}