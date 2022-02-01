import React, { useEffect, useState, useCallback } from 'react';
import useFetch from './hooks/useFetch';
import { useIterator } from './hooks/useIterator';
import ReactMarkdown from 'react-markdown';

// import faker from '@faker-js/faker';
// import { FixedSizeList } from 'react-window';

// const bigList = [...Array(5000)].map(() => ({
//   name: faker.name.findName(),
//   email: faker.internet.email(),
//   avatar: faker.internet.avatar(),
// }));

// function List({ data = [], renderItem, renderEmpty }) {
//   return !data.length ? (
//     renderEmpty
//   ) : (
//     <ul>
//       {data.map((item, i) => (
//         <li key={i}>{renderItem(item)}</li>
//       ))}
//     </ul>
//   );
// }

// function App() {
// const renderItem = (item) => (
//   <div style={{ display: 'flex' }}>
//     <img src={item.avatar} alt={item.name} width={50} />
//     <p>
//       {item.name} - {item.email}
//     </p>
//   </div>
// );
// return <List data={bigList} renderItem={renderItem} />;
// const renderRow = ({ index, style }) => (
//   <div style={{ ...style, ...{ display: 'flex' } }}>
//     <img src={bigList[index].avatar} alt={bigList[index].name} width={50} />
//     <p>
//       {bigList[index].name} - {bigList[index].email}
//     </p>
//   </div>
// );
// return (
//   <FixedSizeList
//     height={window.innerHeight}
//     width={window.innerWidth - 20}
//     itemCount={bigList.length}
//     itemSize={50}
//   >
//     {renderRow}
//   </FixedSizeList>
// );
// }

// export default App;

// function GithubUser({ login }) {
//   const { loading, data, error } = useFetch(
//     `https://api.github.com/users/${login}`
//   );

//   if (loading) return <h1>Loading...</h1>;
//   if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

//   return (
//     <div className="githubUser">
//       <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
//       <div>
//         <h1>{data.login}</h1>
//         {data.name && <p>{data.name}</p>}
//         {data.location && <p>{data.location}</p>}
//       </div>
//     </div>
//   );
// }

// function GithubUser({ login }) {
//   return (
//     <Fetch
//       uri={`https://api.github.com/users/${login}`}
//       renderSuccess={UserDetails}
//     />
//   );
// }

// function UserDetails({ data }) {
//   return (
//     <div className="githubUser">
//       <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
//       <div>
//         <h1>{data.login}</h1>
//         {data.name && <p>{data.name}</p>}
//         {data.location && <p>{data.location}</p>}
//       </div>
//     </div>
//   );
// }

function RepositoryReadme({ repo, login }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState('');

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);
    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then((res) => res.json());
    const markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdown);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!repo || login) return;
    loadReadme(login, repo).catch(setError);
  }, [repo]);

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (loading) return <p>Loading...</p>;

  return <ReactMarkdown source={markdown} />;
}

function RepoMenu({ repositories, login, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(repositories);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <>
      <div className={{ display: 'flex' }}>
        <button onClick={previous}>&lt;</button>
        <p>{name}</p>
        <button onClick={next}>&gt;</button>
      </div>
      <RepositoryReadme login={login} repo={name} />
    </>
  );
}

function UserRepositories({ login, selectedRepo, onSelect = (f) => f }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={({ data }) => (
        <RepoMenu
          repositories={data}
          selectedRepo={selectedRepo}
          onSelect={onSelect}
        />
      )}
    />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </div>
  );
}

function Fetch({
  uri,
  loadingFallback = <p>Loading...</p>,
  renderError = (error) => <pre>{JSON.stringify(error, null, 2)}</pre>,
  renderSuccess,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}

function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
    />
  );
}

export default function App() {
  return <GitHubUser login="moonhighway" />;
}
