const App = () => {
  return (
    <div>
      <Person name="Elizabeth" hobbies={["reading", "ice-skating"]} age={23} />
      <Person
        name="Ali"
        hobbies={["playing video games", "playing tennis"]}
        age={29}
      />
      <Person
        name="Oakley"
        hobbies={["fetching toys", "chasing balls"]}
        age={1}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
