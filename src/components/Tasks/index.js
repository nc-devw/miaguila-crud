import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* --- Assets --- */
import check from '../../assets/icons/check.svg';
import edit from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';

/* --- Styled Components --- */
import { SVGTask, TaskStyled } from '../../styles/taskStyled';

/* --- Actions --- */
import {
	addTask,
	completeTask,
	getTasks,
	deleteTask,
} from '../../redux/action/users_actions';
import { Link } from 'react-router-dom';

const Tasks = () => {
	const dispatch = useDispatch();

	const tasks = useSelector((state) => state.tasks);
	const [input, setInput] = useState('');

	useEffect(() => {
		if (!tasks.length) {
			dispatch(getTasks());
		}
	}, [dispatch]);

	const handleSubmit = (ev) => {
		ev.preventDefault();
		dispatch(addTask(input));
	};

	return (
		<TaskStyled>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={(e) => {
						setInput(e.target.value);
					}}
					placeholder="Titulo..."
				/>
				<button type="submit">Agregar Tarea</button>
			</form>
			<ul>
				{!!tasks.length &&
					tasks.map((task, i) => (
						<li key={i}>
							<span
								className={task.completed ? 'completed' : null}
							>
								{task.title}
							</span>
							<div>
								<SVGTask
									src={check}
									color="var(--clr-secondary)"
									onClick={() => dispatch(completeTask(i))}
								/>
								<Link
									to={`/tareas/editar?id=${i}&value=${task.title}`}
									className={
										task.completed ? 'v-hidden' : null
									}
								>
									<SVGTask src={edit} color="#16b6e4" />
								</Link>
								<SVGTask
									src={deleteIcon}
									color="var(--clr-error)"
									onClick={() => dispatch(deleteTask(i))}
								/>
							</div>
						</li>
					))}
			</ul>
		</TaskStyled>
	);
};

export default Tasks;
