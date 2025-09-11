import { useState, type Dispatch, type SetStateAction } from "react";
import { type PropsTask } from "./CardTask";
import styles from "./CreateTask.module.css"; // Importa los estilos CSS Modules
import type { filterType } from "../../App";

interface Props {
	children?: React.ReactNode;
	setTasks: React.Dispatch<React.SetStateAction<PropsTask[]>>;
	setFilter: Dispatch<SetStateAction<filterType>>;
}

export const CreateTask = ({ children, setTasks, setFilter }: Props) => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [showMessageError, setShowMessageError] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!title || !description) {
			setShowMessageError(true);
			return;
		}
		setShowMessageError(false);
		const newTask = { id: Date.now(), title, description, completed: false };
		setTasks((tasks) => [...tasks, newTask]);
		setTitle("");
		setDescription("");
	};
	return (
		// Aplica la clase CSS Module al contenedor
		<div className={styles["card-task-container"]}>
			<h2>Lista de Tareas</h2>
			{/* Aplica la clase del CSS Module al párrafo de error */}
			<p className={styles.errorMessage}>{showMessageError && "Todos los campos deben estar completados"}</p>
			{/* Aplica la clase del CSS Module al formulario */}
			<form onSubmit={handleSubmit} className={styles["add-task-form"]}>
				<input type="text" placeholder="Titulo" value={title} onChange={(event) => setTitle(event.target.value)} />
				<input
					type="text"
					placeholder="Agregar descipcion"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<button>Adicionar</button>
			</form>
			<span className={styles.conteinerFilter}>
				<button onClick={() => setFilter("all")}>All</button>
				<button onClick={() => setFilter("completed")}>Completed</button>
				<button onClick={() => setFilter("pending")}>Pending</button>
			</span>
			<span className={styles.conteinerTasks}>{children}</span>
		</div>
	);
};



