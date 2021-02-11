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

export const show = (array, handleChange) => {
	// console.log(array)

	return (

		<FieldInputs 
		className={"checkbox-dark"}
		key={array}
		onChange={handleChange}
		array={array}
		/>
		)
}
	
// export const 	handleChangeImage= async (e,  name) =>  {
// 		const file = e.target.files[0];
// 		const id = uuid()
// 		const imagesRef = firebase.storage().ref("images").child(id);
// 		await imagesRef.put(file)

// 		imagesRef.getDownloadURL().then(url => {
// 			this.setState({
// 				[name]: url
// 			})
// 		})
// 	}

export const 	handleStatesChange = (e, update) => {
	const { value } = e.target;
	console.log(value)

		this.setState({
			[update]: [update].concat(value)
		})
		console.log(update)
	}