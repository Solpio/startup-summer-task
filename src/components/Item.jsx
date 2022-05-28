function Item({repo}) {
    console.log(repo);
    return (
      <li className="repositories__table--item">
        <h3 className="repo_name">
          <a href={repo.html_url} target="_blank">{repo.name}</a>
        </h3>
        <p className="repo_description">
          {repo.description}
        </p>
      </li>
    );
  }
  
  export default Item;