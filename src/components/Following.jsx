function Following(props) {
    return (
        <div className="following">
        <span className="one_people_logo profile__logo"></span>
        <div className="following__count">{props.count} following</div>
      </div>
    );
  }
  
  export default Following;
  