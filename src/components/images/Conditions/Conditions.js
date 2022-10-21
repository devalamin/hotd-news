import React from 'react';
import { Link } from 'react-router-dom';

const Conditions = () => {
    return (
        <div>
            <h3>This is Condition</h3>
            <h4>Go Back to <Link to='/register'>Register</Link> </h4>
        </div>
    );
};

export default Conditions;