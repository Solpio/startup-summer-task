function RepoItem(props) {
  console.log('html_url', 'description');
  return (
    <li className="repositories__table--item">
      <h3 className="repo_name">
        <a href={props.url} target="_blank">{props.name}</a>
      </h3>
      <p className="repo_description">
        {props.description}
      </p>
    </li>
  );
}

export default RepoItem;
