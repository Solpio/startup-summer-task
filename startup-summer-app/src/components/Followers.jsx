function Followers(props) {
  return (
    <div className="followers">
      <span className="two_people_logo profile__logo"></span>
      <div className="follwers_count">{props.count} followers</div>
    </div>
  );
}

export default Followers;
