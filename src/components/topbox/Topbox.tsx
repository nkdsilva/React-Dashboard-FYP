import "./topbox.scss";
import { topDealUsers } from "../../data.ts";

const Topbox = () =>{
    return(
        <div className="topbox">
            <h1>Recent</h1>
            <div className="list">
                {topDealUsers.map(user=>(
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            <img src={user.img} alt=""/>
                            <div className="userTexts">
                                <span className="username">{user.username}</span>
                                <br></br>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        <span className="code">{user.code}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Topbox;
