function Following({ count }) {
  return (
    <div className="following">
      <span className="one_people_logo profile__logo"></span>
      <div className="following__count">{count} following</div>
    </div>
  );
}

export default Following;
