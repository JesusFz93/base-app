import { useState, useContext } from "react";
import UIContext from "../context/UIContext";
import LogoImg from "../assets/images/GineCareLogo.png";

const CitaModal = () => {
  const { isModalOpen, toggleModal } = useContext(UIContext);
  const [isLoggedIn] = useState(true);

  const user = {
    fullName: "Maria Garcia Hernandez",
    name: "Dra. Maria Garcia",
    phone: "8991234567",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  };

  const initForm = {
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  };

  const [form, setForm] = useState(initForm);
  const [horasDisponibles, setHorasDisponibles] = useState([]);

  const toggleModalHandler = () => {
    if (!isModalOpen) {
      setForm({
        ...initForm,
        name: isLoggedIn ? user.fullName : "",
        phone: isLoggedIn ? user.phone : "",
      });
    }
    toggleModal();
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    if (name === "date") {
      setForm((prev) => ({ ...prev, date: value, time: "" }));
      if (value) {
        setHorasDisponibles(["09:00 AM", "10:30 AM", "12:00 PM", "04:30 PM"]);
      }
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toggleModalHandler();
    if (window.Swal) {
      window.Swal.fire({
        icon: "success",
        title: "Cita confirmada",
        confirmButtonColor: "#db2777",
        html: `<div style="text-align:left; font-size: 14px;">
            <p><strong>Paciente:</strong> ${form.name}</p>
            <p><strong>Servicio:</strong> ${form.service}</p>
            <p><strong>Fecha:</strong> ${form.date} <strong>Hora:</strong> ${form.time}</p>
          </div>`,
      });
    }
    setForm(initForm);
  };

  return (
    <>
      <button
        className="btn btn-pink rounded-circle position-fixed shadow-lg d-flex align-items-center justify-content-center fab-button d-lg-none"
        onClick={toggleModal}
      >
        <i className="bi bi-calendar-plus fs-2 text-white"></i>
      </button>

      {isModalOpen && (
        <div className="modal-custom-overlay" style={{ zIndex: 5000 }}>
          <div
            className="modal-dialog modal-dialog-centered w-100 px-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 rounded-5 shadow-lg overflow-hidden bg-body gc-appointment-modal">
              <div className="modal-header border-0 pb-0 px-4 pt-4 d-flex justify-content-between align-items-start gap-3">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={LogoImg}
                    alt="Gine Care"
                    className="rounded-4 shadow-sm bg-white p-2"
                    style={{
                      width: "56px",
                      height: "56px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h5 className="modal-title fw-bold fs-3 m-0 text-body">
                      Agendar cita
                    </h5>
                    <p className="text-secondary small mb-0 mt-1">
                      Mejora tu reserva sin cambiar la dinamica actual de fecha
                      y hora.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close shadow-none"
                  onClick={toggleModalHandler}
                ></button>
              </div>

              <div className="modal-body p-4 pt-3">
                <form onSubmit={handleFormSubmit} className="d-grid gap-3">
                  <div className="row g-3">
                    <div className="col-12 col-lg-6">
                      <div className="form-group text-start">
                        <label className="form-label small fw-bold text-muted ms-1">
                          Nombre
                        </label>
                        <div className="input-group">
                          <span className="input-group-text gc-input-icon border-0">
                            <i className="bi bi-person-fill text-pink"></i>
                          </span>
                          <input
                            className="form-control gc-input shadow-none border-start-0"
                            name="name"
                            required
                            value={form.name}
                            onChange={handleFieldChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12 col-lg-6">
                      <div className="form-group text-start">
                        <label className="form-label small fw-bold text-muted ms-1">
                          Telefono
                        </label>
                        <div className="input-group">
                          <span className="input-group-text gc-input-icon border-0">
                            <i className="bi bi-telephone-fill text-pink"></i>
                          </span>
                          <input
                            className="form-control gc-input shadow-none border-start-0"
                            name="phone"
                            required
                            value={form.phone}
                            onChange={handleFieldChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group text-start">
                    <label className="form-label small fw-bold text-muted ms-1">
                      Servicio
                    </label>
                    <div className="input-group">
                      <span className="input-group-text gc-input-icon border-0">
                        <i className="bi bi-heart-pulse-fill text-pink"></i>
                      </span>
                      <select
                        className="form-select gc-input shadow-none border-start-0"
                        name="service"
                        required
                        value={form.service}
                        onChange={handleFieldChange}
                      >
                        <option value="" disabled>
                          Seleccione...
                        </option>
                        <option>Control Prenatal</option>
                        <option>Ultrasonido 4D/5D</option>
                        <option>Ginecologia General</option>
                        <option>Colposcopia</option>
                        <option>Planificacion Familiar</option>
                      </select>
                    </div>
                  </div>

                  <div className="row g-2 text-start">
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-muted ms-1">
                        Fecha
                      </label>
                      <input
                        className="form-control gc-input shadow-none"
                        type="date"
                        name="date"
                        required
                        value={form.date}
                        onChange={handleFieldChange}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label className="form-label small fw-bold text-muted ms-1">
                        Hora
                      </label>
                      <select
                        className="form-select gc-input shadow-none"
                        name="time"
                        required
                        value={form.time}
                        onChange={handleFieldChange}
                        disabled={!form.date}
                      >
                        <option value="" disabled>
                          Hora
                        </option>
                        {horasDisponibles.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="gc-info-pill rounded-4 p-3">
                    <div className="d-flex align-items-start gap-3">
                      <i className="bi bi-shield-check fs-4 text-pink"></i>
                      <div>
                        <div className="fw-bold text-body">
                          Confirmacion clara
                        </div>
                        <div className="text-secondary small mb-0">
                          La fecha activa las horas disponibles, y la hora sigue
                          dependiendo del dia elegido, como querias.
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-pink btn-lg w-100 rounded-4 fw-bold py-3 mt-2 border-0 transition-fast"
                  >
                    Confirmar reservacion
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CitaModal;
