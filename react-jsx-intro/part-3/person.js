const Person = ({ age, hobbies, name }) => {
  return (
    <div>
      <p>Learn some more about this person</p>
      <h3>{age > 18 ? "please go vote!" : "you must be 18"}</h3>
      <p>{name.length > 8 ? name.slice(0, 6) : name}</p>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
      <br></br>
    </div>
  );
};
