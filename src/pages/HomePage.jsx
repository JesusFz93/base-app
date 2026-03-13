import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Atención especializada",
    text: "Cuidado ginecológico con enfoque cercano, profesional y pensado para cada etapa de tu salud.",
    icon: "bi-heart-pulse-fill",
  },
  {
    title: "Resultados y seguimiento",
    text: "Consulta servicios y resultados desde un entorno más claro, práctico y accesible.",
    icon: "bi-clipboard2-check-fill",
  },
  {
    title: "Agenda más simple",
    text: "Encuentra rápidamente citas, servicios y datos del consultorio en un solo lugar.",
    icon: "bi-calendar2-week-fill",
  },
];

const HomePage = () => {
  return (
    <main className="content flex-grow-1 pt-5 mt-4 pb-5 mb-5 px-3 px-lg-5">
      <section className="gc-home-hero rounded-5 p-4 p-lg-5 mb-4 mb-lg-5 overflow-hidden">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <span className="badge rounded-pill bg-white text-pink px-3 py-2 fw-semibold mb-3">
              Portal Gine Care
            </span>
            <h1 className="display-4 fw-bold text-body mb-3">
              Bienvenida a un espacio pensado para tu salud y tranquilidad
            </h1>
            <p className="lead text-secondary mb-4">
              Explora servicios, consulta información importante del
              consultorio y accede más rápido a las opciones principales del
              portal.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Link
                to="/services"
                className="btn btn-pink rounded-pill px-4 py-2 fw-semibold"
              >
                Ver servicios
              </Link>
              <Link
                to="/appointments"
                className="btn btn-outline-pink rounded-pill px-4 py-2 fw-semibold"
              >
                Ir a citas
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="card border-0 shadow-sm rounded-5 bg-body h-100">
              <div className="card-body p-4 p-lg-5">
                <p className="text-uppercase small fw-semibold text-pink mb-2">
                  Resumen rápido
                </p>
                <h2 className="h4 fw-bold text-body mb-3">
                  Todo más claro desde el inicio
                </h2>
                <div className="row g-3">
                  <div className="col-6">
                    <div className="gc-home-mini-card rounded-4 p-3 h-100">
                      <div className="fw-bold text-body">Servicios</div>
                      <div className="text-secondary small">
                        Consulta, laboratorio y más
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="gc-home-mini-card rounded-4 p-3 h-100">
                      <div className="fw-bold text-body">Citas</div>
                      <div className="text-secondary small">
                        Acceso rápido al portal
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="gc-home-mini-card rounded-4 p-3">
                      <div className="fw-bold text-body mb-1">
                        Atención enfocada en la mujer
                      </div>
                      <div className="text-secondary small mb-0">
                        Un portal más ordenado para acompañar tu experiencia
                        clínica desde el primer vistazo.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <div className="mb-3">
          <h2 className="fw-bold text-body mb-1">¿Qué encontrarás aquí?</h2>
          <p className="text-secondary mb-0">
            Una experiencia de inicio más útil, con accesos y contenido
            relevante para pacientes.
          </p>
        </div>

        <div className="row g-4">
          {highlights.map((item) => (
            <div key={item.title} className="col-12 col-md-6 col-xl-4">
              <article className="card border-0 shadow-sm rounded-5 h-100 bg-body-tertiary gc-home-card">
                <div className="card-body p-4">
                  <div className="gc-services-icon-wrap mb-4">
                    <i className={`bi ${item.icon} fs-2 text-pink`}></i>
                  </div>
                  <h3 className="h4 fw-bold text-body mb-3">{item.title}</h3>
                  <p className="text-secondary mb-0">{item.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>

      <section className="row g-4">
        <div className="col-12 col-xl-8">
          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary h-100">
            <div className="card-body p-4 p-lg-5">
              <p className="text-uppercase small fw-semibold text-pink mb-2">
                Inicio rápido
              </p>
              <h2 className="h3 fw-bold text-body mb-3">
                Usa el portal para moverte más fácil entre secciones
              </h2>
              <p className="text-secondary mb-4">
                Desde aquí puedes consultar los servicios disponibles, revisar
                tus citas o entrar a resultados de laboratorio desde una
                navegación más directa.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link
                  to="/laboratories"
                  className="btn btn-light rounded-pill px-4 py-2 border fw-semibold"
                >
                  Ver laboratorios
                </Link>
                <Link
                  to="/profile"
                  className="btn btn-light rounded-pill px-4 py-2 border fw-semibold"
                >
                  Ver perfil
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary h-100">
            <div className="card-body p-4 p-lg-5">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="gc-services-icon-wrap">
                  <i className="bi bi-geo-alt-fill fs-3 text-pink"></i>
                </div>
                <div>
                  <h2 className="h5 fw-bold text-body mb-0">Consultorio</h2>
                </div>
              </div>
              <p className="text-secondary mb-2">Calle Octava, #336</p>
              <p className="text-secondary mb-2">Reynosa, Tamaulipas, 88740</p>
              <p className="text-secondary mb-0">Tel. 899 126 4694</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
