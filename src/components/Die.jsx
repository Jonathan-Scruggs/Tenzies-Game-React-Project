import PropTypes from 'prop-types';

Die.propTypes = {
    value: PropTypes.number
}
export default function Die(props){
    return (
    <div className="die">
        <span className="number">{props.value}</span>
    </div>
    )
}
