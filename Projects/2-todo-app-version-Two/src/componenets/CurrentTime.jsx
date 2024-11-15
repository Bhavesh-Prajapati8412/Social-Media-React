function CurrentTime() {
  let time = new Date();

  return (
    <p calssName="lead">
      Current Time and Date: {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
