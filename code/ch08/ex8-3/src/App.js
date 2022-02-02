import React, { useState, useEffect } from 'react';
import GithubUser from './components/GithubUser';
import UserRepositories from './components/UserRepositories';
import RepositoryReadme from './components/RepositoryReadme';

// function List({ data = [], renderEmpty }) {
//   if (!data.length) return renderEmpty;
//   return <p>{data.length} items</p>;
// }

export default function App() {
  // return <List renderEmpty={<p>This list is empty</p>} />;

  const [login, setLogin] = useState('moonhighway');
  const [repo, setRepo] = useState('learning-react');

  return (
    <>
      {login && <GithubUser login={login} />}
      {login && (
        <UserRepositories
          login={login}
          repo={repo}
          onSelect={setRepo}
          Virtualized
        />
      )}
      {login && repo && <RepositoryReadme login={login} repo={repo} />}
    </>
  );
}
