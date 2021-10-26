import SadPikachu from "./sad_pikachu.png";

function Offline() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vw-100 vh-100">
        <h1 className="text-center">
          Ups... parece ser que no tienes internet.
        </h1>
        <img src={SadPikachu} className="img-fluid" />
      </div>
    </>
  );
}

export default Offline;
