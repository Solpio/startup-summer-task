import './scss/style.scss';
import React from 'react';
import Header from './layouts/Header';
import Main from './layouts/Main';
import ProfileSearcher from './modules/ProfileSearcher';

function App() {
  const [requestValue, setRequestValue] = React.useState('');
  const [profileValue, setProfileValue] = React.useState('');
  const user = new ProfileSearcher(requestValue);

  async function Find(user) {
    await user.getProfile();
  }
  React.useEffect(() => {
    if (requestValue) Find(user).then(() => setProfileValue(user));
  }, [requestValue]);
  return (
    <>
      <Header setRequestValue={setRequestValue} />
      <Main user={profileValue} />
    </>
  );
}
export default App;
