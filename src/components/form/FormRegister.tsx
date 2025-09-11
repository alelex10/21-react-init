/* src/components/form/FormRegister.tsx */

import { useFormController } from "./useFormController";
import styles from "./FormStyle.module.css";
import { useFormStatus } from "react-dom";

function SendButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sending..." : "Send"}
    </button>
  );
}
export const FormRegister = () => {
  const {
    messageError,
    handleInputName,
    handleInputEmail,
    handleInputPassword,
    handleInputRepeatPassword,
    handleSubmit,
  } = useFormController();

  return (
    <>
      <form className={styles.formContainer} action={handleSubmit}>
        <h2 className={styles.formTitle}>Formulario de Registro</h2>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleInputName} required />
          <p className={styles.error}>{messageError.name}</p>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleInputEmail} required />
          <p className={styles.error}>{messageError.email}</p>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" onChange={handleInputPassword} required />
          <p className={styles.error}>{messageError.password}</p>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="repeatPassword">Repeat Password</label>
          <input
            type="password"
            id="repeatPassword"
            onChange={handleInputRepeatPassword}
            required
          />
          <p className={styles.error}>{messageError.repeatPassword}</p>
        </div>
        {/* Aplica la clase al botón de envío */}
        <SendButton />
      </form>
    </>
  );
};
