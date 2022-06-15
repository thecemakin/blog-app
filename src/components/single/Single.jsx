import Sidebar from "../sidebar/Sidebar";
import Singlepost from "../single-post/Singlepost";
import "./Single.css";

export default function Single() {
  return (
    <div className="single">
    {/* post */}
    <Singlepost/>   
    <Sidebar/>
    </div>
  )
}
