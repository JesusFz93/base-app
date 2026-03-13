const Footer = () => {
  return (
    <>
      {/* --- FOOTER DESKTOP (IGUAL AL DEL SIDEBAR) --- */}
      <footer className="d-none d-lg-block border-top bg-body-tertiary py-4 mt-auto">
        <div className="container px-lg-5">
          <div className="row align-items-center">
            {/* Sección Marca */}
            <div className="col-md-12 text-center">
              <div className="opacity-50">
                <p
                  className="m-0 fw-bold text-uppercase small"
                  style={{ letterSpacing: "2px" }}
                >
                  GineCare
                </p>
                <small style={{ fontSize: "11px" }}>
                  Dr. Ángel Calderón Forton
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
