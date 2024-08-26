import {BrowserRouter , Routes , Route} from "react-router-dom"
import MentorAbout from "./components/MentorAbout/MentorAbout"
import BecomeMentor from "./components/BecomeMentor/BecomeMentor"
import MentorGuidance from "./components/MentorGuidance/MentorGuidance"
import FilterSection from "./components/MentorGuidance/Sections/Filters"


function App() {


  return (
    <BrowserRouter>
    
    {/*Header to be placed ...*/}


    <Routes>
      <Route path="/" element={<MentorGuidance/>}/>
      <Route path="/mentor-about" element={< MentorAbout />}/>
      <Route path="/become-mentor" element={< BecomeMentor/>}/>
    </Routes>

   {/*Footer to be placed ...*/}

    </BrowserRouter>
  )
}

export default App
