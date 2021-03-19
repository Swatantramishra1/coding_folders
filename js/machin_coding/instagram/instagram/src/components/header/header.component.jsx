
import "./header.css";
import { ProfileComponent } from "./profile/profile.component";
import { Search } from "./Search/search.component";

export const AppHeader = () => {
    return(
        <div className="Header">
           <div className="Header-Container">
           <div className="CompanyName"> Swatugram </div>
            <div className="Search-Header">
                <Search></Search>
            </div>
            <div className="Profile-Header">
                <ProfileComponent></ProfileComponent>
            </div>
           </div>
        </div>
     )
}