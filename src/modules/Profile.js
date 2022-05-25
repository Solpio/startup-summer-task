export default class Profile{
    constructor(profile, repos){
        this.profile = profile;
        this.repos = repos;
    }

    getProfile(){
        return this.profile;
    }
    setProfile(value){
        this.profile = value;
    }
    getRepos(){
        return this.repos;
    }
    setRepos(value){
        this.repos = value;
    }
}