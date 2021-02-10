import { FieldInputs } from './renderedInputs'

export const add = (parent, selected, array, handleChange) => {
	
	// console.log('parent:', parent)
	// console.log('selected:', selected)
	// console.log('array:', array)
	// console.log('handleChange:', handleChange)
	const ifTrue = parent.filter(item => item === selected).length === 0
		// console.log(ifTrue)
		if (ifTrue){
			parent.push(<FieldInputs 
					className={"checkbox-dark"}
					key={array}
					onChange={handleChange}
					array={array}
					// data={}
			/>)
		}
		// console.log(fields)
		// return fields
	}