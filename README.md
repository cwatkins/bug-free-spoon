# Getting started with Payments using React, Express.js, and the Square Web Payments SDK

This demo shows you how to integrate with Square [Web Payments SDK](https://developer.squareup.com/docs/web-payments/take-card-payment) using React and Express.js. It was presented as part of a meetup at Seattle JS in 2023. You can find the slides [here](https://docs.google.com/presentation/d/1beFBYiEkNTA-tx9IamVJwT2mY6BHbIYrvOKGBMjuIP0).

Building a payment form from scratch is difficult -- input field validation and error message handing are just a few things to think about when designing a simple checkout flow.

[Square Web Payments SDK](https://developer.squareup.com/docs/web-payments/overview) is a drop-in UI component that does the hard work for you so that you can focus on building the best checkout experience for your customers.

## Demo
The demo is running in test mode -- use `4111 1111 1111 1111` as a test card number with the CVC `111` and any future expiration date.

Use the `4310 0000 0020 1019` test card number to trigger a 3D Secure challenge flow and `12345` to complete it.

## How to use this demo

### Setup steps in `backend-express/`

1. Register for a free [Square account](https://squareup.com/signup) if you don't have one.
2. Create a .env file in `backend-express/` using the .env.example template
3. Add your Square App ID, Secret, and Main Location to `backend-express/.env`, which you can get from the [Square Developer's Sandbox](https://developer.squareup.com/)
4. Run `yarn install`
5. Run `yarn dev`


### Setup steps in `frontend-react/`

1. Run `yarn start`
2. Navigate to `localhost:3000`