import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const initForm = {
  fullName: "",
  email: "",
  phone: "",
  birthdate: "",
  password: "",
  confirmPassword: "",
  termsAccepted: false,
};

const RegisterPage = () => {
  const nameInputRef = useRef(null);
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState("");
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // Enfocar el primer campo cuando el componente se monta
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setError("");
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", form);

    // Validar que las contraseñas coincidan
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    console.log("Formulario válido - Listo para enviar");
    // Aquí puedes limpiar el formulario si lo deseas
    // setForm(initForm);
    // await registrarUsuario(form);

    console.log("Usuario registrado con éxito");

    //limpiar el formulario después del envío
    setForm(initForm);
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  const openTerms = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowTerms(true);
  };

  const closeTerms = () => {
    setShowTerms(false);
  };

  return (
    <main className="content container flex-grow-1 pt-5 mt-4 pb-5 mb-5 px-4">
      <div className="row justify-content-center pt-4">
        <div className="col-12 col-md-10 col-lg-6">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-2 text-body text-center">
                Crear cuenta
              </h2>
              <p className="text-muted text-center mb-4">
                Completa tus datos para registrarte
              </p>

              <form
                onSubmit={handleSubmit}
                className="d-flex flex-column gap-3"
              >
                <div>
                  <label htmlFor="fullName" className="form-label fw-semibold">
                    Nombre completo
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    className="form-control gc-input"
                    placeholder="Tu nombre"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control gc-input"
                      placeholder="tucorreo@ejemplo.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label fw-semibold">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control gc-input"
                      placeholder="809-000-0000"
                      autoComplete="tel"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="birthdate" className="form-label fw-semibold">
                    Fecha de nacimiento
                  </label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    value={form.birthdate}
                    onChange={handleChange}
                    className="form-control gc-input"
                    required
                  />
                </div>

                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="password"
                      className="form-label fw-semibold"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      className="form-control gc-input"
                      placeholder="********"
                      autoComplete="new-password"
                      minLength={6}
                      required
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label
                      htmlFor="confirmPassword"
                      className="form-label fw-semibold"
                    >
                      Confirmar contraseña
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="form-control gc-input"
                      placeholder="********"
                      autoComplete="new-password"
                      minLength={6}
                      required
                    />
                  </div>
                </div>

                {error && <div className="text-danger small">{error}</div>}

                <div className="form-check mt-1">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    name="termsAccepted"
                    checked={form.termsAccepted}
                    onChange={handleChange}
                    className="form-check-input"
                    required
                  />
                  <label htmlFor="termsAccepted" className="form-check-label">
                    Acepto los{" "}
                    <button
                      type="button"
                      onClick={openTerms}
                      className="btn btn-link p-0 text-pink fw-semibold text-decoration-none align-baseline"
                    >
                      términos y condiciones
                    </button>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-pink py-2 fw-semibold mt-2"
                >
                  Registrarme
                </button>
              </form>

              <p className="text-center text-muted mt-4 mb-0">
                ¿Ya tienes cuenta?{" "}
                <Link
                  to="/login"
                  className="text-pink fw-semibold text-decoration-none"
                >
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {showTerms && (
        <div className="modal-custom-overlay" onClick={closeTerms}>
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-title"
          >
            <div className="modal-content border-0 rounded-4 shadow-sm bg-body">
              <div className="modal-header bg-body border-bottom">
                <h5 id="terms-title" className="modal-title fw-bold">
                  Términos y condiciones
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeTerms}
                  aria-label="Cerrar"
                ></button>
              </div>
              <div
                className="modal-body text-start bg-body-tertiary p-5"
                style={{ maxHeight: "55vh", overflowY: "auto" }}
              >
                <p>
                  Al registrarte en GINE CARE aceptas usar la plataforma de
                  forma responsable y proporcionar información veraz y
                  actualizada.
                </p>
                <p>
                  Tus datos personales serán tratados únicamente para gestionar
                  tu cuenta, citas y comunicaciones relacionadas con los
                  servicios.
                </p>
                <p>
                  Eres responsable de mantener la confidencialidad de tu
                  contraseña y de cualquier actividad realizada desde tu cuenta.
                </p>
                <p className="mb-0">
                  Puedes solicitar actualización o eliminación de tus datos
                  contactando al equipo de soporte, según las políticas
                  aplicables.
                </p>
              </div>
              <div className="modal-footer bg-body border-top">
                <button
                  type="button"
                  className="btn btn-pink"
                  onClick={closeTerms}
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RegisterPage;
