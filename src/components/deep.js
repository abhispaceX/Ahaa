import { useParams } from "react-router-dom";

function Deep(){
    const {id}=useParams();
  return(
    <div>Deep{id}</div>
  )
}
export default Deep;