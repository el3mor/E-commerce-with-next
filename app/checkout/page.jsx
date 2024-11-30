"use client";
import React, { useEffect, useState } from "react";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './_components/CheckoutForm';
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react"

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51QPjAVBNfxMlKSrO03DKzkqu74GMYfQZxAqvRLZdTDnoetPiXRNTnMMeRAHxJL8Iy1k1wxWv65DKMHvxtx8MndPd00d93kpS4r');

const CheckoutPage = () => {


  const searchParams = useSearchParams();

  // Only render the checkout form when clientSecret is available
  return (
    <div>
      <h1>Checkout</h1>

        <Elements stripe={stripePromise} options={{
          mode: "payment",
          amount: searchParams.get('amount') * 100,
          currency: "usd",
        }}>
          
          <CheckoutForm  amount={Number(searchParams.get('amount'))} />
        </Elements>

    </div>
  );
};

export default CheckoutPage;
