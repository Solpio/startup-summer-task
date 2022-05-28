import Followers from './Followers';
import Following from './Following';

function Profile({ profile }) {
  return (
    <aside className="profile">
      <img src={profile.avatar_url} alt="" className="profile__img" />
      <div className="profile__info">
        <h2 className="profile__name">{profile.name}</h2>
        <span className="profile__username">
          <a href={profile.html_url} target="_blank">
            {profile.login}
          </a>
        </span>
        <div className="profile__followers">
          <Followers count={profile.followers}/>
          <Following count={profile.following}/>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
