import PropTypes from 'prop-types';

const Notification = ({massage}) => {
    return ( 
        <p>{massage}</p>
     );
}

Notification.propTypes = {
    massage: PropTypes.string,   
}

export default Notification;

