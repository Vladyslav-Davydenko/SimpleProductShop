# Simple Product Store

Welcome to the Simple Product Store! This is a simple e-commerce project built using React, TypeScript, Redux Toolkit, React Router, and Stripe for payment processing. This README will provide you with an overview of the project, how to set it up, and how to use it.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Payment Processing](#payment-processing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can run the Simple Product Store, you will need to have the following software installed on your machine:

- Node.js: You can download it from [nodejs.org](https://nodejs.org/)

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/simple-product-store.git
   ```

2. Navigate to the project folder:

   ```bash
   cd simple-product-store
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Configure your Stripe API keys:
   - You will need to sign up for a [Stripe](https://stripe.com/) account if you don't already have one.
   - Create a `.env` file in the project root directory.
   - Add your Stripe API keys to the `.env` file:

     ```
     REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
     REACT_APP_STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

   Replace `your_stripe_public_key` and `your_stripe_secret_key` with your actual Stripe API keys.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your web browser and visit [http://localhost:5173](http://localhost:5173) to view the Simple Product Store. (Ports can differ)

## Project Structure

The project follows a simple structure:

- `src/`: Contains the source code of the React application.
  - `components/`: React components used to build the application.
  - `features/`: Redux Toolkit slices and related logic.
  - `pages/`: React Router pages for different views.
  - `utils/`: Utility functions and helper files.
- `public/`: Static assets and HTML template.
- `src/main.tsx`: Entry point of the application.
- `src/store.ts`: Redux store configuration.
- `src/routes.tsx`: Define application routes using React Router.
- `src/index.css`: Define application styles.

## Features

- Browse and view a list of products.
- Add products to the shopping cart.
- Adjust the quantity of products.
- Remove products from the cart.
- View the total price of items in the cart.
- Proceed to checkout using Stripe for payment processing.
- Receive confirmation of the order.

## Usage

1. Open the Simple Product Store in your web browser at [http://localhost:5173](http://localhost:5173).

2. Browse the list of available products.

3. Click on a product to view its details.

4. Add products to your cart by clicking the "+" button on the product details page.

5. Review and adjust the contents of your cart by clicking on the shopping cart icon in the navigation bar.

6. Click the "Checkout" button to proceed to the payment page.

7. Enter your payment information, including card details, and complete the purchase.

8. Upon successful payment, you will receive an order confirmation.

## Payment Processing

The Simple Product Store uses Stripe for payment processing. Stripe provides a secure and easy-to-integrate payment gateway. Ensure you have configured your Stripe API keys in the `.env` file, as mentioned in the installation instructions.

## Contributing

If you'd like to contribute to the Simple Product Store project, please follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

4. Make your changes and commit them with a descriptive commit message.

5. Push your changes to your forked repository:

   ```bash
   git push origin feature-name
   ```

6. Create a pull request from your forked repository to the main repository.

7. Wait for feedback and collaborate with the maintainers to get your changes merged.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for using the Simple Product Store! If you have any questions or encounter any issues, please don't hesitate to [open an issue](https://github.com/Vladyslav-Davydenko/simple-product-store/issues) on the GitHub repository. Happy shopping!