import Followers from './Followers';
import Following from './Following';

function Profile(props) {
  console.log(props.profile)
  return (
    <aside className="profile">
      <img src={props.profile.avatar_url} alt="" className="profile__img" />
      <div className="profile__info">
        <h2 className="profile__name">{props.profile.name}</h2>
        <span className="profile__username">
          <a href={props.profile.html_url} target="_blank">{props.profile.login}</a>
        </span>
        <div className="profile__followers">
          <Followers count={props.profile.followers}/>
          <Following count={props.profile.following}/>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
