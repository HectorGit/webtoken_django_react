function DeskList(props){

    return (
        <div className="desklist">
            <ul>
            <li>primary_key={props.primary_key}</li>
            <li>user_id={props.user_id}</li>
            <li>hour={props.hour}</li>
            <li>date={props.date}</li>
            <li>time_active={props.time_active}</li>
            <li>time_total={props.time_total}</li>
            <li>calories={props.calories}</li>
            <li>timestamp={props.timestamp}</li>
            <li>movements={props.movements}</li>
            </ul>
            <br />
        </div>
    )
  }
  
  export default DeskList;