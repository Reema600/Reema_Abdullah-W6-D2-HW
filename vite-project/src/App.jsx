import Navbar from './component/Navbar'
import Body from './component/Body'
import Bootcamp from './component/Bootcamp'
import Img1 from '../public/location.png'
import Img2 from '../public/calendar.png'
import Img3 from '../public/appointment.png'
import End from './component/End'

import './App.css'
import Footer from './component/Footer'


function App() {
 

  return (
    <>
     <Navbar/>
     <Body/>
     <div className='card'>
<div className='card-1'>
     <Bootcamp name="برنامج" classname="البنية المؤسسية بمنهجية وإطار TOGAF" 
     Icon1={Img1} location="الرياض" Icon2={Img2} week="أسبوعان" Icon3={Img3} date="يبدأ في 11-06-2023"button=""></Bootcamp>
</div>
<div className='card-1'>
     <Bootcamp name="برنامج" classname="أمن المعلومات Security+" 
     Icon1={Img1} location="الرياض" Icon2={Img2} week="أسبوعان" Icon3={Img3} date="يبدأ في 11-06-2023"button=""></Bootcamp>
</div>
<div className='card-1'>
     <Bootcamp name="برنامج" classname="طويق للناشئين (عن بعد)" 
     Icon1={Img1} location="الرياض" Icon2={Img2} week="أسبوعان" Icon3={Img3} date="يبدأ في 28-05-2023
     "button=""></Bootcamp>
</div>
</div>
<End></End>
<Footer></Footer>

    </>
  )
}

export default App
