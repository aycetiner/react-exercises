const Tweet = ({ username, name, date, message }) => {
  return (
    <div>
      <p>
        {message} - <span>{date}</span>
      </p>
      <p>
        <b>{name}</b> - {username}
      </p>
      <br></br>
    </div>
  );
};
