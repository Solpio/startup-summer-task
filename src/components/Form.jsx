import React from 'react';

function Form({ setRequestValue }) {
  const [value, setValue] = React.useState('');

  function submit(e) {
    e.preventDefault();
    setRequestValue(value);
  }

  return (
    <form className="navigation__form" onSubmit={submit}>
      <span className="github_logo"></span>
      <input
        type="text"
        name="username"
        className="search_area"
        autoCapitalize="off"
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </form>
  );
}

export default Form;
