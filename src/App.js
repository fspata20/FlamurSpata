import './App.css';
import Card from './Card';
import epoka from './images/epoka.jpg'
import unyt from './images/unyt.jpg'
import politekniku from './images/politekniku.jpg'

function App(){
  const universities=[{
    title:"Epoka University",
    text:"Uni in Rinas",
    foto:epoka
  },
  {
    title:"New York Uni",
    text:"Uni in Kodra e Diellit",
    foto:unyt
  },
  {
    title:"Politekniku",
    text:"Uni in Tirana center",
    foto:politekniku
  }
  ]
  return(
    <div className="app">
      <div className="card-container">
        {universities.map((el) => (<Card title={el.title} text={el.text} foto={el.foto}/>
        ))}
      </div>
    </div>
  )
}

export default App;
