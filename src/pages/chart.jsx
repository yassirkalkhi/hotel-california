import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Trash2, X } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Chart = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [orders, setOrders] = useState([
    { id: 1, name: 'Classic Hivemage Twin Room', price: 8000, image: './room1.webp', adults: 1 },
    { id: 2, name: 'Deluxe Park Room (Twin)', price: 8700, image: './room1.webp', adults: 1 },
  ]);

  const handleSubmit = async (event) => {
    console.log('submitting')
    event.preventDefault();
    if (!stripe || !elements) {
      setPaymentError("Stripe has not loaded yet.");
      return;
    }
    const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (paymentMethodError) {
      setPaymentError(paymentMethodError.message);
      setPaymentSuccess(null);
      return;
    }

    setPaymentError(null);

    const data = {
      payment_method: paymentMethod.id,
      amount: total / 10,
      currency: 'usd',
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

    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(result.clientSecret);

      if (confirmError) {
        setPaymentError(confirmError.message);
        setPaymentSuccess(null);
      } else if (paymentIntent.status === 'succeeded') {
      navigate('/payment-success');
      setPaymentError(null);
        setPaymentError(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setPaymentError('An error occurred while processing the payment.');
      setPaymentSuccess(null);
    }
  };

  const removeOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  const total = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <>
      <div className="bg-cover h-[250vh] bg-center bg-fixed relative overflow-hidden"
        style={{ backgroundImage: 'url("./bg.jpg")' }}>

        <div className="relative z-50">
          <Header />
        </div>
        <div className='lg:flex flex-col bg-white w-2 h-[185vh] mt-[30vh] ms-32 absolute hidden'>
          <div className='flex items-center justify-center text-xl font-semibold rounded-full bg-white w-12 h-12 relative -top-14 right-5 text-black'>1</div>
          <div className='flex items-center justify-center text-xl font-semibold rounded-full bg-white w-12 h-12 relative top-[85vh] right-5 text-black'>2</div>
          <div className='flex items-center justify-center text-xl font-semibold rounded-full bg-white w-12 h-12 relative top-[173vh] right-5 text-black'>2</div>
        </div>
        <div className='flex flex-col items-center h-[90vh] lg:ms-44 me-10 mt-[10vh] text-end'>
          <p className='text-white self-start font-StyleScript text-5xl ms-5 md:ms-20 mb-[10vh]'>Confirm Your Order</p>
          <div className='ms-4 md:ms-0 md:w-[75%] h-[60vh] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-none'>
            {orders.map(order => (
              <div className='flex inset-0 backdrop-blur-xs bg-black/60 h-[150px] w-[100%] m-4 ms-0' key={order.id}>
                <img src={order.image} alt="room image" className='h-full w-[35%]' />
                <div className='flex flex-col w-[65%] justify-between pb-4'>
                  <div>
                    <div className='flex w-full items-center justify-between p-4 pb-1'>
                      <h2 className='text-white text-xl'>{order.name}</h2>
                      <span className='text-white text-xl'>MAD {order.price}</span>
                    </div>
                    <div className='flex w-full items-center justify-between px-4'>
                      <h2 className='text-white/60 text-xs'>{order.adults} adults</h2>
                      <span className='text-white/60 text-xs'>per night</span>
                    </div>
                  </div>

                  <div className='flex w-full items-center justify-between px-4'>
                    <h2 className='text-white text-md underline'>Details</h2>
                    <span className='text-red-600' onClick={() => removeOrder(order.id)}><X /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='w-full flex justify-center md:justify-end ms-4 md:ms-0 md:w-[75%]'>
            <div className='inset-0 backdrop-blur-xs bg-black/50'>
              <div className='flex justify-between p-4 gap-32 text-white'>
                <span>Books</span>
                <span className='text-white/60'>{orders.length}</span>
              </div>
              <div className='flex justify-between p-4 gap-32 text-white'>
                <span>Total</span>
                <span className='text-white/60'>MAD {total}</span>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center h-[90vh] lg:ms-44 me-10 md:mt-[10vh] text-end'>
          <p className='text-white self-start font-StyleScript text-6xl ms-20 mt-10 md:mt-0 mb-[10vh]'>Payment</p>
          <div className='flex flex-col items-start w-[75%] h-full inset-0 backdrop-blur-xs pt-10 bg-black/50'>
            <p className='text-white text-2xl ms-10 font-semibold'>Checkout</p>
            <form className='flex flex-col w-full h-full pb-8' onSubmit={handleSubmit}>
              <div className='flex w-full px-12 gap-4 mt-10'>
                <input type="text" placeholder='First Name*' className='w-[50%] p-4 inset-0 backdrop-blur-xs placeholder:text-white/80 bg-black/50' />
                <input type="text" placeholder='Last Name*' className='w-[50%] p-4 inset-0 backdrop-blur-xs placeholder:text-white/80 bg-black/50' />
              </div>
              <div className='flex w-full px-12 gap-4 mt-4'>
                <input type="text" placeholder='Phone*' className='w-[50%] p-4 inset-0 backdrop-blur-xs placeholder:text-white/80 bg-black/50' />
                <input type="text" placeholder='Email address*' className='w-[50%] p-4 inset-0 backdrop-blur-xs placeholder:text-white/80 bg-black/50' />
              </div>
              <img src="./payments.png" alt="visa mastercard" className='ms-12 w-16 h-6 mt-6 mb-2 bg-white/60 rounded' />
              <div className='flex w-full px-12 gap-4'>
                <CardElement className='w-full p-6 inset-0 backdrop-blur-xs text-white  placeholder:text-white bg-black/50'  options={{
                         style: {
                                 base: {
                                     color: "#ffffff",
                                      fontSize: "16px",
                                      "::placeholder": {
                                    color: "#ffffff",
                                       },
                                       },
                            invalid: {
                             color: "#ff4d4d", 
                                        },
                            },
                                   }}/>
              </div>
              <span className='self-start ms-12 text-white text-xs mt-2'><input type="checkbox" /> Privacy Policy</span>
              {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
            </form>
          </div>
          <div className='flex items-center mt-4 md:justify-between w-[75%]'>
            <p className='hidden md:block text-white self-start font-StyleScript text-6xl mt-20 mb-[10vh]'>Confirm Booking</p>
            <button className='border-2 border-white text-white text-xl font-bold py-4 px-6' type="submit" onClick={handleSubmit}>Confirm</button>
          </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

const ConfirmPage = () => (
  <Elements stripe={stripePromise}>
    <Chart />
  </Elements>
);

export default ConfirmPage;
