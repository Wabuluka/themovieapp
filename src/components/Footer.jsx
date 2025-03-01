export function Footer() {
  return (
    <footer className="black">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between  py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            ></a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; CS425-2025-03D-01
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3 small">
              Jones(618974) . Luwam(117656) . Tony(618980) . Davies(618654)
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
