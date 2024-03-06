//import logo from './logo.svg';
import './App.css';
 import About1 from './components/About1';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React,{useState} from 'react'

 import { BrowserRouter, Route, Routes } from "react-router-dom";

//let name="<b>harry<b>"//React sanitised the external html i.e bold will not work ,displays it as string
//component
function App() {
const [mode, setMode] = useState("light")

const [alert,setAlert]=useState(null)

const showAlert=(message,type)=>{

  setAlert({
    msg : message,
    type : type
  })

  setTimeout(()=>{

    setAlert(null)
  },1500)
}


 const toggleMode=()=>{

  if(mode==="light"){

    setMode("dark")

    document.body.style.backgroundColor="#042743"//grey

    showAlert("Dark Mode has been enabled","success")

    document.title="TextUtilies-Dark Mode"

  }

  else{

    setMode("light")
    document.body.style.backgroundColor="white"

    showAlert("Light Mode has been enabled","success")

    document.title="TextUtilies-Light Mode"


  }
 }

 const removeBodyClasses=()=>{

  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-warning')
 }

 const palet=(cls)=>{

  removeBodyClasses()

  console.log(cls)
  document.body.classList.add('bg-'+cls)

 }
  return (
   // <h1> hi world</h1>//not valid , if want to use enclosed in jsx fragment <> h1 </>

   //<></> jsx fragment

   <> 

{/* BrowserRouter : Used to keep your UI in sync with the URL */}
<BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          palet={palet}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>

          {/* Routes acts as a container/parent for all the individual route that will be created in our app. */}
          
          <Routes>

            {/* Route is used to create a single route. It takes in two attributes:
                1)path: which specifies the URL path of the desired component.
                2)element: which specifies the component the route should render.  */}

            <Route path="/about" element={<About1 mode={mode} />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>

{/* can send any no. of props and if props are large then can grp it into obj and accesss each by value */}
{/* <Navbar title="TextUtils2" about="about TextUtils" mode= {mode} toggleMode={toggleMode}/> */}
{/* <Navbar /> */}

{/* <Alert alert={alert}/> */}

{/* <div className="container my-3" > */}
{/* <TextForm showAlert={showAlert} heading="Enter the text to analyz" mode={mode}/> */}


{/* </div> */}

{/* <About1/> */}


      
      
   
    </>
  );
}

export default App;



//Jsx:
//Its simply a html with some changes
//replace: "class" with "className", "for" with "htmlFor","tabindex" with "tabIndex"
//and whenever want to use js we ues "{}"
//In most cases we use function component and return it and anything in fun compo will be displayed



   {/* <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   </nav>

    //returns only One ele i.e div, other ele's must enclosed in div
    <div className="container">
      <h1> Hello {name}</h1>
      <p>paragraph...</p>
    </div> */}

    {/* textutil project  */}

    {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}