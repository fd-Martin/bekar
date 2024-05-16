import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
//todo : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const [cart]=useCart();
    const total= cart.reduce((sum,item)=>sum+item.price,0);
    const price=parseFloat(total.toFixed(2));
    return (
        <div>
            <SectionTitle subHeading='Please Process' heading='Payment'></SectionTitle>
            <h2 className='text-3xl'>Payment </h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;