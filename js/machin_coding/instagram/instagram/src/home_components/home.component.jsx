import "./home.css";
import { AppFeed } from "./components/feed/feed.component";

export const AppHome = () => {
    return(
        <div className="Home-Container">
            <AppFeed></AppFeed>
            <AppFeed></AppFeed>
            <AppFeed></AppFeed>
            <AppFeed></AppFeed>
            <AppFeed></AppFeed>
        </div>
    )
}