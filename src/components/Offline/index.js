function Offline() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
        <h1 className="text-center">
          Ups... parece ser que no tienes internet.
        </h1>
        <img src="/sad_pikachu.png" className="img-fluid" alt="sad pikachu" />
      </div>
    </>
  );
}

export default Offline;
