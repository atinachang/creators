import React, {Fragment} from 'react'

export const Options = ({array}) => {
// console.log(film)
// console.log(array)

	const mapped = array.map(item => {
return (
	<option key={item} value={item}>{item}</option>
)
})
// console.log(mapped)
return (
	<Fragment>
		{mapped}
	</Fragment>
)
}