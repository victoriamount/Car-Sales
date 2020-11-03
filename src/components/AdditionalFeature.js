import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions/carActions'


const AdditionalFeature = props => {
  // const [addAdditionalFeature, setAddAdditionalFeature] = useState(false)

  // const handleChanges = e => {
  //   setAddAdditionalFeature(true)
  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={() => props.addFeature(props.feature)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    addAdditionalFeature: state.addAdditionalFeature
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeature)
