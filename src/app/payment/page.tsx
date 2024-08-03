"use client";
import React, { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import Head from 'next/head';
import AuthContext, { AuthContextType } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/img/isrc-b.png'; 

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

const router = useRouter();


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
           router.push("/profile")
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
        <title>Secure Payment</title>
      </Head>
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg p-4 mb-5 bg-white rounded" style={{ maxWidth: '500px', width: '100%' }}>
          <div className="text-center mb-4">
            <Image src={logo} alt="Company Logo" width={150} height={50} />
          </div>
          <h5 className="card-title mb-4 text-center" style={{ fontSize: '1.5rem' }}>Secure Payment</h5>

          <p className="text-center mb-4" style={{ fontSize: '1.1rem', color: '#666' }}>
            Your transaction is secure and protected. We use advanced encryption and security measures to keep your data safe.
          </p>
          <div className="mb-4 text-center">
            <label className="form-label" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Amount (INR):
              <input
                type="number"
                value={teamTotalPrice}
                readOnly
                className="form-control text-center" // Bootstrap text-center for centering the input text
                style={{ fontSize: '2rem', fontWeight: '700', border: '2px solid #007bff' }}
              />
            </label>
          </div>
          <button 
            onClick={handlePayment} 
            disabled={isLoading} 
            className="btn btn-primary w-100 py-3"
            style={{ fontSize: '1.2rem', borderRadius: '8px', transition: 'background-color 0.3s' }}
          >
            {isLoading ? 'Processing...' : 'Pay with Razorpay'}
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
