import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const initForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  const emailInputRef = useRef(null);

  useEffect(() => {
    // Enfocar el primer campo cuando el componente se monta
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();

    console.log("Enviando formulario con datos:", form);

    //limpiar el formulario después del envío
    setForm(initForm);
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <main className="content container flex-grow-1 pt-5 mt-4 pb-5 mb-5 px-4">
      <div className="row justify-content-center pt-4">
        <div className="col-12 col-md-8 col-lg-5">
          <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
              <h2 className="fw-bold mb-2 text-body text-center">
                Iniciar sesión
              </h2>
              <p className="text-muted text-center mb-4">
                Ingresa tu correo y contraseña
              </p>

              <form onSubmit={handleForm} className="d-flex flex-column gap-3">
                <div>
                  <label htmlFor="email" className="form-label fw-semibold">
                    Correo electrónico
                  </label>
                  <input
                    ref={emailInputRef}
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={cambio}
                    className="form-control gc-input"
                    placeholder="tucorreo@ejemplo.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="form-label fw-semibold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={cambio}
                    className="form-control gc-input"
                    placeholder="********"
                    autoComplete="current-password"
                    minLength={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-pink py-2 fw-semibold mt-2"
                >
                  Entrar
                </button>
              </form>

              <p className="text-center text-muted mt-4 mb-0">
                ¿No tienes cuenta?{" "}
                <Link
                  to="/register"
                  className="text-pink fw-semibold text-decoration-none"
                >
                  Regístrate
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
