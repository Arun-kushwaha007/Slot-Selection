import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postjoin } from '../../actions/batch';

const Payment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const user = useSelector((state) => state.currentuserreducer);

    const handlePaymentComplete = () => {
        // Assuming payment is successful
        dispatch(postjoin(id, user.result._id, user.result.name, navigate));
    };

    return (
        <div className="payment-container">
            <h2>Payment Page</h2>
            <p>Complete your payment to proceed.</p>
            {/* Add your payment form or payment integration here */}
            <button onClick={handlePaymentComplete} className="complete-payment-btn">
                Complete Payment
            </button>
        </div>
    );
};

export default Payment;
