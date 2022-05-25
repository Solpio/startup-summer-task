import Profile from './Profile';

export default class GithubSearcher {
  constructor(username = "") {
    this.username = username;
    this.profile = new Profile(null, null);
    this.state = null;
  }

  async getProfilePage() {
    return await fetch(`https://api.github.com/users/${this.username}`).then(
      (value) => value.json().then((value) => this.profile.setProfile(value))
    );
  }

  async getAllRepos() {
    return await fetch(
      `https://api.github.com/users/${this.username}/repos`
    ).then((value) =>
      value.json().then((value) => this.profile.setRepos(value))
    ).catch((res)=>{
        console.log(res);
    });
  }
  setUsername(value){
      this.username = value;
  }
  setstate(){
      const pr = this.profile;
      this.setState({pr});
  }
}
