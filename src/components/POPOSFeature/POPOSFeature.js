import React from 'react'
import './POPOSFeature.css'
import Emoji from '../Emoji/Emoji';

function getFeature(str) {
	switch(str) {
		case 'outdoors':
			//return <span role="img" aria-label="outdoors" >🌲</span>;
					
			//return '🌲'
			return <Emoji symbol='🌲' label='outdoors'/>

		case 'coffee':
			return '☕️'
		case 'art':
			return '🖼'
		case 'toilet':
			return '🚽'
		case 'power':
			return '🔌'
		default:
			return '？'
	}
}

function POPOSFeature(props) {
	const emoji = getFeature(props.name)
	// return <div className="POPOSFeature" aria-label={props.name} accessibilitylabel={props.name}>{emoji}</div>
	//return <div className="POPOSFeature">{emoji}</div>

	return <Emoji symbol={emoji} label={props.name} />
}

export default POPOSFeature