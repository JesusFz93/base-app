const quickStats = [
  { label: "Citas activas", value: "3", icon: "bi-calendar2-check-fill" },
  { label: "Estudios listos", value: "5", icon: "bi-file-earmark-medical-fill" },
  { label: "Anticipos", value: "2", icon: "bi-wallet2" },
];

const profileDetails = [
  { label: "Nombre completo", value: "María García Hernández" },
  { label: "Correo electrónico", value: "maria.garcia@email.com" },
  { label: "Teléfono", value: "+52 899 123 4567" },
  { label: "Fecha de nacimiento", value: "14 de julio de 1992" },
  { label: "Tipo de sangre", value: "O+" },
  { label: "Última visita", value: "22 de febrero de 2026" },
];

const healthNotes = [
  "Alergia registrada a penicilina.",
  "Seguimiento ginecológico semestral activo.",
  "Método anticonceptivo en control médico.",
];

const recentActivity = [
  {
    title: "Anticipo recibido",
    description: "Se registró el anticipo de tu cita de ultrasonido.",
    time: "Hoy, 9:40 a.m.",
    icon: "bi-cash-coin",
  },
  {
    title: "Resultado disponible",
    description: "Ya puedes consultar tu resultado de laboratorio hormonal.",
    time: "Ayer, 6:15 p.m.",
    icon: "bi-clipboard2-pulse-fill",
  },
  {
    title: "Perfil actualizado",
    description: "Se confirmó tu número telefónico y contacto de emergencia.",
    time: "09 de marzo, 1:20 p.m.",
    icon: "bi-shield-check",
  },
];

const ProfilePage = () => {
  return (
    <main className="content flex-grow-1 pt-5 mt-4 pb-5 mb-5 px-3 px-lg-5 gc-mobile-safe-bottom">
      <section className="gc-profile-hero rounded-5 p-4 p-lg-5 mb-4 mb-lg-5 overflow-hidden">
        <div className="row align-items-center g-4">
          <div className="col-12 col-xl-7">
            <span className="badge rounded-pill bg-white text-pink px-3 py-2 fw-semibold mb-3">
              Mi perfil
            </span>
            <h1 className="display-5 fw-bold text-body mb-3">
              Tu información médica y personal en un panel más profesional
            </h1>
            <p className="lead text-secondary mb-4">
              Consulta tus datos principales, seguimiento clínico, seguridad de
              acceso y actividad reciente desde una sola vista.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <button className="btn btn-pink rounded-pill px-4 py-2 fw-semibold">
                Editar perfil
              </button>
              <button className="btn btn-light border rounded-pill px-4 py-2 fw-semibold">
                Descargar resumen
              </button>
            </div>
          </div>

          <div className="col-12 col-xl-5">
            <div className="card border-0 shadow-sm rounded-5 bg-body h-100">
              <div className="card-body p-4 p-lg-5">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
                    alt="Perfil de paciente"
                    className="rounded-circle border border-3 border-pink bg-white"
                    style={{ width: "78px", height: "78px" }}
                  />
                  <div>
                    <p className="text-uppercase small fw-semibold text-pink mb-1">
                      Paciente verificada
                    </p>
                    <h2 className="h4 fw-bold text-body mb-1">
                      María García Hernández
                    </h2>
                    <p className="text-secondary mb-0">
                      ID de paciente: GC-PAC-2048
                    </p>
                  </div>
                </div>

                <div className="row g-3">
                  {quickStats.map((stat) => (
                    <div key={stat.label} className="col-12 col-sm-4 col-xl-12">
                      <div className="gc-home-mini-card rounded-4 p-3 d-flex align-items-center gap-3">
                        <div className="gc-services-icon-wrap flex-shrink-0">
                          <i className={`bi ${stat.icon} fs-4 text-pink`}></i>
                        </div>
                        <div>
                          <div className="small text-secondary">{stat.label}</div>
                          <div className="fw-bold fs-4 text-body">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row g-4">
        <div className="col-12 col-xl-8">
          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary mb-4">
            <div className="card-body p-4 p-lg-5">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                <div>
                  <p className="text-uppercase small fw-semibold text-pink mb-1">
                    Información principal
                  </p>
                  <h2 className="h3 fw-bold text-body mb-0">
                    Datos personales
                  </h2>
                </div>
                <button className="btn btn-light border rounded-pill px-3 fw-semibold">
                  Actualizar datos
                </button>
              </div>

              <div className="row g-3">
                {profileDetails.map((detail) => (
                  <div key={detail.label} className="col-12 col-md-6">
                    <div className="gc-info-pill rounded-4 p-3 h-100">
                      <div className="small text-secondary">{detail.label}</div>
                      <div className="fw-bold text-body">{detail.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary">
            <div className="card-body p-4 p-lg-5">
              <p className="text-uppercase small fw-semibold text-pink mb-1">
                Seguimiento clínico
              </p>
              <h2 className="h3 fw-bold text-body mb-4">
                Notas importantes para tu atención
              </h2>

              <div className="d-grid gap-3">
                {healthNotes.map((note) => (
                  <div
                    key={note}
                    className="gc-profile-note rounded-4 p-3 d-flex align-items-start gap-3"
                  >
                    <div className="gc-services-icon-wrap flex-shrink-0">
                      <i className="bi bi-heart-pulse-fill fs-4 text-pink"></i>
                    </div>
                    <p className="text-secondary mb-0">{note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary mb-4">
            <div className="card-body p-4 p-lg-5">
              <p className="text-uppercase small fw-semibold text-pink mb-1">
                Seguridad
              </p>
              <h2 className="h4 fw-bold text-body mb-4">Acceso y privacidad</h2>

              <div className="gc-info-pill rounded-4 p-3 mb-3">
                <div className="small text-secondary">Estado de cuenta</div>
                <div className="fw-bold text-body">Cuenta activa y verificada</div>
              </div>

              <div className="gc-info-pill rounded-4 p-3 mb-3">
                <div className="small text-secondary">Último acceso</div>
                <div className="fw-bold text-body">11 de marzo de 2026, 8:42 a.m.</div>
              </div>

              <div className="gc-info-pill rounded-4 p-3">
                <div className="small text-secondary">Autenticación</div>
                <div className="fw-bold text-body">Protección adicional habilitada</div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary mb-4">
            <div className="card-body p-4 p-lg-5">
              <p className="text-uppercase small fw-semibold text-pink mb-1">
                Contacto de emergencia
              </p>
              <h2 className="h4 fw-bold text-body mb-4">Persona autorizada</h2>

              <div className="gc-info-pill rounded-4 p-3 mb-3">
                <div className="small text-secondary">Nombre</div>
                <div className="fw-bold text-body">Laura Hernández García</div>
              </div>

              <div className="gc-info-pill rounded-4 p-3 mb-3">
                <div className="small text-secondary">Relación</div>
                <div className="fw-bold text-body">Hermana</div>
              </div>

              <div className="gc-info-pill rounded-4 p-3">
                <div className="small text-secondary">Teléfono</div>
                <div className="fw-bold text-body">+52 899 555 0192</div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-5 bg-body-tertiary">
            <div className="card-body p-4 p-lg-5">
              <p className="text-uppercase small fw-semibold text-pink mb-1">
                Actividad reciente
              </p>
              <h2 className="h4 fw-bold text-body mb-4">Últimos movimientos</h2>

              <div className="d-grid gap-3">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.title}
                    className="gc-profile-note rounded-4 p-3 d-flex align-items-start gap-3"
                  >
                    <div className="gc-services-icon-wrap flex-shrink-0">
                      <i className={`bi ${activity.icon} fs-4 text-pink`}></i>
                    </div>
                    <div>
                      <div className="fw-bold text-body">{activity.title}</div>
                      <div className="text-secondary small mb-1">
                        {activity.description}
                      </div>
                      <div className="small text-muted">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
