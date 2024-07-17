import PropTypes from 'prop-types';

Die.propTypes = {
    value: PropTypes.number,
    held: PropTypes.bool,
    hold: PropTypes.func
}
export default function Die(props){
    const styles = {
        backgroundColor: props.held? "#59E391":"white"
    }
    props.hold
    return (
    <div className="die" style={styles} onClick={props.hold}>
        <span className="number">{props.value}</span>
    </div>
    )
}
