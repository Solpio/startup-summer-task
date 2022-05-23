import Form from "./SearchForm";

function Header(props) {
  console.log(props)
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="navigation">
            <Form search={props.search} updateData={props.setValue}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
