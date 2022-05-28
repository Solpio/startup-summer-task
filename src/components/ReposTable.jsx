import Pagination from './Pagination';
import React, { useEffect } from 'react';
import Item from './Item';

function ReposTable({ user }) {
  const numerItemsPerPage = 4;
  const [currPage, setCurrPage] = React.useState(1);
  const [repos, setRepos] = React.useState(0);
  const maxPages = Math.ceil(user.profile.public_repos / numerItemsPerPage);
  useEffect(() => {
    user.getRepos(currPage, numerItemsPerPage).then(() => {
      setRepos(user.repos);
    });
  }, [currPage]);
  return (
    <div className="repositories">
      <ul className="repositories__table">
        {repos &&
          repos.map((repo) => {
            return <Item key={repo.id} repo={repo} />;
          })}
      </ul>
      <div className="pagination__wrapper">
        <Pagination
          page={currPage}
          onClickPage={(value) => setCurrPage(value)}
          maxPages={maxPages}
          maxRepos={user.profile.public_repos}
        />
      </div>
    </div>
  );
}

export default ReposTable;
