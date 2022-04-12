import React from 'react'
import { FaToggleOn } from 'react-icons/fa';

const Toggle = ({ handleToggleDarkMode }) => {
    return (
		<div className='toggle'>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle<FaToggleOn />
			</button>
		</div>
	);
}

export default Toggle