import feru from './assets/feru.jpeg'
import basil from './assets/basil.jpeg'
import hannad from './assets/hannad.jpeg'


function Card() {

    return(
    <>
    <div className='Container'>
        <div className="card">
            <img className='img' alt="feru" src={feru}></img>
            <h1>Name: feru</h1>
            <h1>job: Top</h1>
        </div> 
        <div className="card">
            <img className='img' alt="basil" src={basil}></img>
            <h1>Name: basil</h1>
            <h1>job: pro programmer</h1>
        </div>
        <div className="card">
            <img className='img' alt="hannad" src={hannad}></img>
            <h1>Name: hannad</h1>
            <h1>job: future ceo</h1>
        </div>
    </div>
    </>
        
        

    );
}

export default Card