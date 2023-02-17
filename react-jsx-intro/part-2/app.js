const App = () => {
  return (
    <div>
      <Tweet
        name="Elizabeth"
        username="MsNurse"
        date="02-16-2022"
        message="Excited for my new job!"
      />
      <Tweet
        name="Ali"
        username="CoderGuy"
        date="02-16-2022"
        message="Learning React!"
      />
      <Tweet name="Oakley" username="Bubba" date="02-16-2022" message="Woof!" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
