function Show() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Trains Available
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <div className="card">
          <h5 className="card-header">22849-Shm Sc Suf Exp</h5>
          <div className="card-body">
            <h5 className="card-title">01:50 VSKP----10:40 WL</h5>
            <p className="card-text">SL Rs.355 AC Rs.935</p>
            <a href="#" className="btn btn-primary">
              view Schedule
            </a>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">18045-East Coast Exp</h5>
          <div className="card-body">
            <h5 className="card-title">03:55 VSKP----13:42 WL</h5>
            <p className="card-text">SL Rs.325 AC Rs.885</p>
            <a href="#" className="btn btn-primary">
              view Schedule
            </a>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">20833-Vande Bharat Exp</h5>
          <div className="card-body">
            <h5 className="card-title">05:50 VSKP----13:42 WL</h5>
            <p className="card-text">AC Rs.1310</p>
            <a href="#" className="btn btn-primary">
              view Schedule
            </a>
          </div>
        </div>
        <div className="card">
          <h5 className="card-header">12773-Vskp Sni Exp</h5>
          <div className="card-body">
            <h5 className="card-title">09:50 VSKP----10:40 WL</h5>
            <p className="card-text">SL Rs.425 AC Rs.885</p>
            <a href="#" className="btn btn-primary">
              view Schedule
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show;
