import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Replace with your publishable key
const stripePromise = loadStripe(process.env.VITE_STRIPE_PUBLISHABLE_KEY);

const PaymentForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

    if (paymentMethodError) {
      setPaymentError(paymentMethodError.message);
      setPaymentSuccess(null);
      return;
    }

    setPaymentError(null);

    const data = {
      payment_method: paymentMethod.id,
      amount : 1000
    };

    try {
      const response = await fetch("http://localhost:5000/payment_intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.error) {
        setPaymentError(result.error.message);
        setPaymentSuccess(null);
        return;
      }

      // Confirm the payment intent with the client secret from the backend
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(result.clientSecret);

      if (confirmError) {
        setPaymentError(confirmError.message);
        setPaymentSuccess(null);
      } else if (paymentIntent.status === 'succeeded') {
        setPaymentSuccess('Payment successful!');
        setPaymentError(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setPaymentError('An error occurred while processing the payment.');
      setPaymentSuccess(null);
    }
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="card-element">Credit or Debit Card</label>
          <CardElement />
        </div>
        {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
        {paymentSuccess && <p style={{ color: 'green' }}>{paymentSuccess}</p>}
        <button type="submit" disabled={!stripe}>Pay Now</button>
      </form>
    </div>
  );
};

// Wrapping the component in Elements to load Stripe
const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentPage;
