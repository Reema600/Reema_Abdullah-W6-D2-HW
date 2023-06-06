

export default function Bootcamp(props) {
  return (
    <div> 

        <p>{props.name}</p>
        <p>{props.classname}</p>
      
        <img className="icon-1" src={props.Icon1}></img>
        <p>{props.location}</p>
        <img className="icon-2" src={props.Icon2}></img>
        <p>{props.week}</p>
        <img className="icon-3" src={props.Icon3}></img>
        <p>{props.date}</p>
       
         <button> {props.button}التفاصيل</button>
         
    </div>
  )
}
