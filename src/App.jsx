import { useState,useEffect} from 'react'
import './App.css'
const gameArray = [
  {
    cardid:1,
    fullname:"Usp-Genezis",
    gumname:"usp",
    skinname:"Genezis",
    gamename:"standoff2",
    img:"https://vozwooden.ru/wp-content/uploads/2022/11/1-19-1.png"
  },
  {
    cardid:2,
    fullname:"Desert Eagle-Orochi",
    gumname:"Desert Eagle",
    skinname:"Orochi",
    gamename:"standoff2",
    img:"https://vozwooden.ru/wp-content/uploads/2021/10/5-1.png"
  },
  {
    cardid:3,
    fullname:"karambit-Gold",
    gumname:"Karambit",
    skinname:"Gold",
    gamename:"standoff2",
    img:"https://vozwooden.ru/wp-content/uploads/2021/09/4-1.png"
  },
]
function App() {
  
  const [data , setData] = useState(gameArray)
  const [imgurl,setImgurl] = useState("")
  const [fullname,setFullname] = useState(``)
  const [gunname,setGunname] = useState(``)
  const [skinname,setSkinname] = useState(``)
  const [gamename,setGamename] = useState(``)
  const deletegun = (id) => {
    setData(data.filter(gun => gun.cardid !== id))
    console.log(id)
  }
  const guncreate = () => {
    if(imgurl && fullname && gunname && skinname && gamename) {
      setData([...data, {cardid:4,fullname,gunname,skinname,gamename,img: imgurl}])
      setFullname('');
      setImgurl('');
      setGunname('');
      setSkinname('');
      setGamename('');
    }else{
      alert('All fields are required')
    }
  }
  const [fonter,setfonter] = useState(true);
  const changFont = () => {
    setfonter(!fonter)
  } 
  const newfonter = fonter ? "" : "active"; 
  const newfontere = fonter ? "" : "bgofbody"; 
  return (
    <div className={`bodydy ${newfontere}`}>
    {
      // Header start
    }
    <header className={`${newfonter} ${newfontere}`}>
        <div className={`d-flex justify-content-between align-items-center container`}>
            <h3>create users </h3>

            <div>
                <h4>You have 3 card</h4>
            </div>


            
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" />
                    <label onClick={changFont} class="btn btn-outline-primary" for="btncheck3">Dark mode</label>
                </div>
        </div>
    </header>
    {
      // Header end
    }
    <div className={`container`}> 
      <div className="cards row justify-content-center">
        {data.map(gun => {
          return(
            <div key={gun.cardid} className={`card col-md-3 ${newfonter}`}>
            <img src={gun.img} alt="desert eagle Yakuza Geekroom" className={`images-card ${newfonter}`} />
            <h2 className='full-name'>full name :{gun.fullname}</h2>
            <h4 className='gan_name'>weapon type : {gun.gumname}</h4>
            <h4 className='skin_name gan_name'>skin name : {gun.skinname}</h4>
            <h4 className='game_name gan_name'>game name : {gun.gamename}</h4>
            <button onClick={() => deletegun(gun.cardid)} className='deelete-btn btn btn-danger'>delete</button>            
            </div>
          )
        })}
      </div>
      <button type="button" class="btn btn-danger btn-cerater" data-bs-toggle="modal" data-bs-target="#exampleModal">Create card</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="">

          
          <div className='my-2'>
            <label htmlFor="img">img url</label>
            <input value={imgurl} id='img' onChange={({ target }) => setImgurl(target.value)} class="form-control" type="text" placeholder="img url" aria-label="default input example"/>
          </div>

          <div className='my-2'>
            <label htmlFor="fullname">full name</label>
            <input value={fullname} id='fullname' onChange={({ target }) => setFullname(target.value)} class="form-control" type="text" placeholder="full name your gun" aria-label="default input example"/>
          </div>

          <div className='my-2'>
            <label htmlFor="gumname">gun name</label>
            <input value={gunname} id='gumname' onChange={({ target }) => setGunname(target.value)} class="form-control" type="text" placeholder="you gun name" aria-label="default input example"/>
          </div>

          <div className='my-2'>
            <label htmlFor="skinname">skin name</label>
            <input value={skinname} id='skinname' onChange={({ target }) => setSkinname(target.value)} class="form-control" type="text" placeholder="you skin name" aria-label="default input example"/>
          </div>

          <div className='my-2'>
            <label htmlFor="gamename">game name</label>
            <input value={gamename} id='gamename' onChange={({ target }) => setGamename(target.value)} class="form-control" type="text" placeholder="you game name" aria-label="default input example"/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button onClick={guncreate} type="button" data-bs-dismiss="modal" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}

export default App
