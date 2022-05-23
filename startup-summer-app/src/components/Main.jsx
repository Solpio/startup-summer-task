import Profile from "./Profile";
import RepoTable from "./RepoTable";
import Start from "./Start";
import NotFound from "./Not_found";

function Main(props){
    if (props?.profile){
        if (props.profile?.message){
            return (
                <main className="main">
                <div className="main__wrapper">
                    <NotFound />
                </div>
                </main>
            )
        } else{
            return (
                <main className="main">
                <div className="main__wrapper">
                <Profile profile={props.profile}/>
                    <div className="repositories">
                        <RepoTable itemsPerPage={4} items={props.repos}/>
                    </div>
                </div>
                </main>
            )
        }
    } else{
        return (
            <main className="main">
            <div className="main__wrapper">
                <Start />
            </div>
            </main>
        )
    }
}

export default Main;