import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

 async handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.search);
    this.props.search.setUsername(this.state.value);
    await this.props.search.getProfilePage();
    await this.props.search.getAllRepos();
    const profile = this.props.search.profile.profile;
    const repos = this.props.search.profile.repos;
    this.props.updateData({profile, repos});
  }
  
  render() {
    return (
      <form className="navigation__form" onSubmit={this.handleSubmit}>
        <span className="github_logo"></span>
        <input
          type="text"
          name="username"
          className="search_area"
          autoCapitalize="off"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;
