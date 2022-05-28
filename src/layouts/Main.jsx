import React from 'react';
import Start from '../components/Start';
import Profile from '../components/Profile';
import NotFound from '../components/NotFound';
import NoRepos from '../components/NoRepos';
import ReposTable from '../components/ReposTable';

function Main({ user }) {
  // console.log(user.repos)
  if (user.username) {
    if(!user.profile) {
      return <NotFound username={user.username} />;
    }
    return (
      <main className="main">
        <div className="main__wrapper">
          <Profile profile={user.profile} />
          {user.profile.public_repos > 0 ? <ReposTable user={user} /> : <NoRepos username={user.username}/>}
        </div>
      </main>
    );
  }  else{
    return <Start />;
  }
}

export default Main;
