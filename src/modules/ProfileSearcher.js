export default class ProfileSearcher {
  constructor(username) {
    this.username = username;
  }

  async getProfile() {
    await fetch(`https://api.github.com/users/${this.username}`).then((value) =>
      value.json().then((value) => {
        if (value.message) {
          this.profile = null;
        } else {
          this.profile = value;
        }
      })
    );
    // await this.getRepos();
  }

  async getRepos(pageNumber, countPerPage) {
    if (this.profile){
      await fetch(`https://api.github.com/users/${this.username}/repos?page=${pageNumber}&per_page=${countPerPage}`).then((value) =>
        value.json().then((value) => {
          this.repos = value;
        })
      );
    } else{
      this.repos = null;
    }
  }


  static get profile(){
    return this.profile;
  }

  // static get repos(){
  //   return this.repos;
  // }

}
