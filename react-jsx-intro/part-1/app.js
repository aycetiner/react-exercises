const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
