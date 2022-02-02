import Layout from './Layout';
import fetch from 'isomorphic-unfetch';

export default function Pets(props) {
  return (
    <Layout>
      <h1>Hey pets!</h1>
      <ul>
        {props.pets.map((pet) => (
          <li key={pet.id}>{pet.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

Pets.getInitialProps = async function () {
  const res = await fetch(`http://pet-library.moonhighway.com/api/pets`);
  const data = await res.json();

  return {
    pets: data,
  };
};
