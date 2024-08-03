"use client";
import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Head from 'next/head';
import AuthContext, { AuthContextType } from '@/context/AuthContext';

const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const PaymentPage: React.FC = () => {
  const [orderId, setOrderId] = useState<string | null>(null);
  const {teamTotalPrice} = useContext(AuthContext) as AuthContextType;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState<boolean>(false);

  useEffect(() => {
    const loadRazorpayScript = async () => {
      const loaded = await initializeRazorpay();
      if (loaded) {
        console.log('Razorpay script loaded and ready');
        setRazorpayLoaded(true);
      } else {
        console.error('Failed to load Razorpay script');
        setRazorpayLoaded(false);
      }
    };

    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    if (!razorpayLoaded) {
      alert('Razorpay script not loaded yet');
      return;
    }

    setIsLoading(true);
    try {
      // Fetch and parse token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token not found');
      }
      const parsedToken = JSON.parse(token) as string;

      // Request payment details from your server
      const { data: order } = await axios.post('https://isrc-backend.onrender.com/api/payment', { teamTotalPrice });

      // Log the order data for debugging
      console.log('Order data:', order.data);

      // Validate order data
      if (!order.data.id || !order.data.amount || !order.data.currency) {
        throw new Error('Invalid order data');
      }

      setOrderId(order.data.id);

      const options: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
        amount: order.data.amount,
        currency: order.data.currency,
        name: 'ISRC',
        description: 'Test Transaction',
        order_id: order.data.id,
        handler: async (response: any) => {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
          console.log('Payment response:', response);

          try {
            if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
              throw new Error('Missing payment response parameters');
            }

            await axios.post(
              'https://isrc-backend.onrender.com/api/verify',
              { razorpay_order_id, razorpay_payment_id, razorpay_signature },
              { headers: { 'Authorization': `Bearer ${parsedToken}` } }
            );
            alert('Payment successful!');
          } catch (error) {
            console.error('Payment verification failed:', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };

      if (window.Razorpay) {
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        console.error('Razorpay is not defined on window');
      }
    } catch (error) {
      console.error('Payment initiation failed:', error);
      alert('Payment initiation failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <div>
        <h1>Payment Page</h1>
        <div>
          <label>
            Amount (INR):
            <input
              type="number"
              value={teamTotalPrice}
              readOnly
            />
          </label>
        </div>
        <button onClick={handlePayment} disabled={isLoading}>
          {isLoading ? 'Processing...' : 'Pay with Razorpay'}
        </button>
      </div>
    </>
  );
};

export default PaymentPage;
