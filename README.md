This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Installation
Follow these steps to get the project up and running

Clone the Repository
First, clone this repository to your local machine by running this command
git clone https://github.com/MiriamLongoyapus/Taskmaster-Frontend.git
cd Taskmaster-Frontend

Once you're in the project directory, install the necessary dependencies:
npm install
If you're using Yarn, you can install dependencies with yarn install

After the dependencies are installed, start the development server:
npm run dev
If you're using Yarn yarn dev
This will start the application, and you can view it by navigating to http://localhost:3000 in your web browser.

Challenges
Initially, I had incorrectly configured the URL for my frontend to connect to the backend. However, I resolved this issue by ensuring that my endpoints were functioning properly. Previously, deleting a task was problematic. While the task was successfully removed from the backend database, it remained visible on the frontend interface until the browser was refreshed. I overcame this issue by carefully reviewing my code to identify the source of the problem.

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
