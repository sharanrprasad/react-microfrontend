import React, { Suspense } from "react";

// TODO: fix exporting and importing TS types
const CustomersWidget = React.lazy(() => import("user/UserWidget"));
// const ProductsWidget = React.lazy(() => import("products/ProductsWidget"));

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <Suspense fallback={<div>Loading customers...</div>}>
        <CustomersWidget />
      </Suspense>
      <br />
      {/*<Suspense fallback={<div>Loading products...</div>}>*/}
      {/*  <ProductsWidget />*/}
      {/*</Suspense>*/}
      <br />
    </div>
  );
};
// export default Home;

export const Component = Home;
