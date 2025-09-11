import styles from "./CardTask.module.css"; // Importa los estilos CSS Modules

export interface PropsTask {
	id: number;
	title: string;
	description: string;
	completed: boolean;
	setTasks?: React.Dispatch<React.SetStateAction<PropsTask[]>>;
}

export const CardTask = ({ id, title, description, setTasks, completed }: PropsTask) => {
	const removeTask = () => {
		if (setTasks) {
			setTasks((tasks) => tasks.filter((task) => task.id !== id));
		}
	};
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (setTasks) {
			setTasks((tasks) =>
				tasks.map((task) => {
					if (task.id === id) {
						console.log(event.target.checked);
						return { ...task, completed: event.target.checked };
					}
					return task;
				})
			);
		}
	};
	return (
		// Aplica la clase CSS Module al contenedor
		<div className={styles["card-task-container"] + " " + (completed ? styles.completed : "")}>
			<h2>{title}</h2>
			<p>{description}</p>
			<span>
				<button onClick={removeTask}>Remover</button>
				<input type="checkbox" checked={completed} onChange={handleCheckboxChange} />
			</span>
		</div>
	);
};

