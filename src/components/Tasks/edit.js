import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

/* --- Utils --- */
import { useQuery } from '../../utils/functions';

/* --- Styled Components --- */
import { TasksEditStyled } from '../../styles/taskStyled';
import { editTask } from '../../redux/action/users_actions';
import { useHistory } from 'react-router-dom';

/* --- Actions --- */
const TasksEdit = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const query = useQuery();

	const [input, setInput] = useState(query.get('value'));

	const handleSubmit = (ev) => {
		ev.preventDefault();
		dispatch(editTask({ id: query.get('id'), value: input }));
		history.push('/tareas');
	};
	return (
		<TasksEditStyled onSubmit={handleSubmit}>
			<input
				type="text"
				value={input}
				onChange={(ev) => setInput(ev.target.value)}
				required
			/>
			<span></span>
			<div>
				<button className="primary">Editar</button>
				<button
					className="cancel"
					onClick={() => history.push('/tareas')}
				>
					Cancelar
				</button>
			</div>
		</TasksEditStyled>
	);
};

export default TasksEdit;
