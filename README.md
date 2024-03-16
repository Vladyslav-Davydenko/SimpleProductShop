# Simple Product Store

Welcome to Simple Product Store, a project built with TypeScript using Next.js App router. This project allows users to browse and purchase perfumes, with features such as sorting, filtering, and seamless payment processing using Stripe. Instead of traditional state managers, it leverages useReducers and useContext for state management, ensuring efficiency and maintainability. The project is optimized for mobile devices, providing a smooth user experience across various screen sizes.

## Technologies Used

- **Next.js**: Next.js is utilized for efficient app routing and rendering.
- **TypeScript**: TypeScript adds static typing to the project, enhancing code quality and developer productivity.
- **PostgreSQL**: PostgreSQL serves as the database management system for storing product data.
- **Prisma**: Prisma is used as the data access layer, providing a type-safe database client.
- **Stripe**: Stripe integration enables secure and seamless payment processing for users.
- **Heroicons**: Heroicons are used for high-quality SVG icons throughout the project.
- **Tailwind CSS**: Tailwind CSS is utilized for rapid and responsive UI development, ensuring a modern and visually appealing design.
- **Versel**: For project hosting.

## Getting Started

To get started with Simple Product Store, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Vladyslav-Davydenko/SimpleProductShop.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-product-store
   ```

3. Create an .env file in the root directory of the project and add the following environment variables:

   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   POSTGRES_URL=your_postgres_database_url
   ```

4. Prepare db:

   ```bash
   npm run seed
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit localhost:3000 in your web browser to view the project.

## Contributing

Contributions to Simple Product Store are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Live Demo (Versel)

https://simple-product-shop.vercel.app

## Preview

![main](https://github.com/Vladyslav-Davydenko/SimpleProductShop/blob/main/product-store/public/preview/Main.png)

![main2](https://github.com/Vladyslav-Davydenko/SimpleProductShop/blob/main/product-store/public/preview/Main2.png)

![products](https://github.com/Vladyslav-Davydenko/SimpleProductShop/blob/main/product-store/public/preview/Products.png)

![cart](https://github.com/Vladyslav-Davydenko/SimpleProductShop/blob/main/product-store/public/preview/Cart.png)
