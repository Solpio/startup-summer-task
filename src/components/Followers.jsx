function Followers({ count }) {
  return (
    <div className="followers">
      <span className="two_people_logo profile__logo"></span>
      <div className="follwers_count">{count} followers</div>
    </div>
  );
}

export default Followers;
