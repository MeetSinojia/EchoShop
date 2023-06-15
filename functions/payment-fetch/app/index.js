/* Express App */
const process = require('process')
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51NGpO9SDZrS775GMdVB4G2QhLrT4iBuDH9qpNeHh7Ms57lzD" +
  "euneK7d5jT409iPcLo9IFs1aNFXKWVWPTDVYuhd300jnqIfIka",
);
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')

/* My express App */
module.exports = function expressApp(functionName) {
  const app = express()
  const router = express.Router()
  app.use(cors({ origin: true }));
  app.use(express.json());

  // gzip responses
  router.use(compression())

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  // API routes
  app.get("/", (req, res) => res.status(200).send("hello world"));

  app.post("/payments/create", async (req, res) => {
    const total = req.query.total;

    console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

    // Create a payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "inr",
      description: "Software development services",
    });

    // OK - Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });


  // Attach logger
  app.use(morgan(customLogger))

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(express.json())
  router.use(express.urlencoded({ extended: true }))

  return app
}

const customLogger = function (tokens, req, res) {
  const log = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ')

  if (process.env.NODE_ENV !== 'dev') {
    // Log only in AWS context to get back function logs
    console.log(log)
  }
  return log
}
