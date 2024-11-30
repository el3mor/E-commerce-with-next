import { Suspense } from "react";

export default function CheckoutLayout({ children }) {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      {children}
    </Suspense>
  );
}
