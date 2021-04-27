import React from 'react';

function Footer(props) {
  return (
    <div className="fixed-bottom">
      <div className="text-center">
        <img src="partenaire.png" alt="partemaires" />
      </div>
      <footer className="footer bg-dark">
        <div className="container-fluid">
          <div className="d-flex justify-content-between">
            <div>
              <img alt="logo" src="logo192.png" height="32" width="32" />
              <span className="text-muted"> I3T</span>
            </div>
            <div>
              <a className="text-muted" href="http://cheikhfayendiaye.com">
                By Cfndiaye
              </a>
            </div>
            <div className="text-muted">&#169;2021 </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
