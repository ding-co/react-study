import React, {
  useState,
  useEffect,
  useMemo,
  useLayoutEffect,
  useReducer,
  memo,
} from 'react';

// function App() {
//   const [val, set] = useState('');
//   const [phrase, setphrase] = useState('example phrase');

//   const createPhrase = () => {
//     setphrase(val);
//     set('');
//   };

//   useEffect(() => {
//     console.log(`typing "${val}"`);
//   }, [val]);

//   useEffect(() => {
//     console.log(`saved phrase: "${phrase}"`);
//   }, [phrase]);

//   useEffect(() => {
//     return () => {
//       console.log(`either val or phrase has changed`);
//     };
//   }, [val, phrase]);

//   return (
//     <>
//       <label>Favorite phrase:</label>
//       <input
//         value={val}
//         placeholder={phrase}
//         onChange={(e) => set(e.target.value)}
//       />
//       <button onClick={createPhrase}>send</button>
//     </>
//   );
// }

// function Checkbox() {
//   const [checked, toggle] = useReducer((checked) => !checked, false);

//   return (
//     <>
//       <input type="checkbox" value={checked} onChange={toggle} />
//       {checked ? 'checked' : 'not checked'}
//     </>
//   );
// }

// export default Checkbox;

// export default App;

// const UseAnyKeyToRender = () => {
//   const [, forceRender] = useState();

//   useEffect(() => {
//     window.addEventListener('keydown', forceRender);
//     return () => window.removeEventListener('keydown', forceRender);
//   }, []);
// };

// function WordCount({ children = '' }) {
//   UseAnyKeyToRender();

//   const words = useMemo(() => children.split(' '), [children]);

//   useEffect(() => {
//     console.log('fresh render');
//   }, [words]);

//   return (
//     <>
//       <p>{children}</p>
//       <p>
//         <strong>{words.length} - words</strong>
//       </p>
//     </>
//   );
// }

// function App2() {
//   return <WordCount>You are not going to believe this but...</WordCount>;
// }

// export default App2;

// function App() {
//   useEffect(() => {
//     console.log('useEffect');
//   });
//   useLayoutEffect(() => console.log(useLayoutEffect));
//   return <div>ready</div>;
// }

// export default App;

// function Numbers() {
//   const [number, setNumber] = useReducer(
//     (number, newNumber) => number + newNumber,
//     0
//   );

//   return <h1 onClick={() => setNumber(30)}>{number}</h1>;
// }

// export default Numbers;

const Cat = ({ name, meow = (f) => f }) => {
  console.log(`rendering ${name}`);
  return <p onClick={() => meow(name)}>{name}</p>;
};

// const PureCat = memo(Cat);

const PureCat = memo(
  Cat,
  (prevProps, nextProps) => prevProps.name === nextProps.name
);

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  return (
    <>
      {cats.map((name, i) => (
        <PureCat
          key={i}
          name={name}
          meow={(name) => console.log(`${name} has meowed`)}
        />
      ))}
      <button onClick={() => setCats([...cats, prompt('name a cat')])}>
        Add a Cat
      </button>
    </>
  );
}

export default App;
