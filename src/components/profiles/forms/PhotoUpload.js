import React, { Fragment } from 'react'
import { Inputs } from '../../helpers/Inputs'


const PhotoUpload = ({ state, handleChangeImage }) => {
	const {workPhoto1, workPhoto2, workPhoto3 } = state;
	return (
		<Fragment>
		<p>OPTIONAL: Upload up to three photos of your work!</p>
			<div className="photos">
				<Inputs  type="file" id="image" accept="image/*" onChange={e => handleChangeImage(e, 'workPhoto1')} />
				<img src={workPhoto1} alt=""/>
			</div>

			
			<div className="photos">
				<Inputs type="file" id="image" accept="image/*" onChange={e => handleChangeImage(e, 'workPhoto2')} />
				<img src={workPhoto2} alt=""/>
			</div>
		
			<div className="photos">
		<Inputs type="file" id="image" accept="image/*" onChange={e=>handleChangeImage(e,'workPhoto3')} />
			<img src={workPhoto3} alt=""/>
		</div>
		</Fragment>
	)
}

export default PhotoUpload
