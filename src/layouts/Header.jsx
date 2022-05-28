import Form from "../components/Form"

function Header({setRequestValue}){
    return (
        <header className="header">
        <div className="header__wrapper">
          <div className="navigation">
            <Form setRequestValue={setRequestValue}/>
          </div>
        </div>
      </header>
    )
}

export default Header