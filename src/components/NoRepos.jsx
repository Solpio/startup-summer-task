function NoRepos({username}) {
    console.log(username)
    return (
        <h1 className="article">
            <span>{username} has no repositories yet</span>
        </h1>
    );
  }
  
  export default NoRepos;
  