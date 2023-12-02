# Dogs & Film Catalog App: The Introduction

A warm welcome! This project is a showcase of my practical skills at an **early** stage of my journey as a web developer, specifically focusing on front-end development and the utilization of modern web technologies.

**Curious why dogs and films?** You're spot on—they're not typically associated, but they happen to be two of my personal favorites! I decided to fuse these unrelated interests to create a project that not only aligns with my passions but also serves as a canvas to apply modern web technologies.

What you'll find here is a demonstration of the versatile capabilities of Next.js, seamlessly paired with the pragmatic styling approach of Tailwind CSS. I chose these technologies because I firmly believe in their growing prominence, with continuous updates introducing exciting features. This project is not just about dogs and films; it's a playground for cutting-edge web development tools that I anticipate will play a significant role in the future.

Think of this project as **a launching pad** for your web development endeavors. The basic structure provided here serves as a foundation, ready for you to build upon and tailor to your specific needs. I've incorporated the popular features of Next.js, giving you a head start on leveraging its capabilities.

Whether you're a seasoned developer looking for inspiration or someone just starting their journey in web development, feel free to use this project as **a starting point**. The groundwork is laid, and the power of Next.js is at your fingertips.

I also deployed the app on **<https://dogs-n-films-catalog-app.vercel.app/>** Take a look!

Explore, experiment, and turn this into your own creation. The possibilities are endless, and I'm excited to see the diverse projects that can blossom from this foundation.

Below, you'll find an overview of the project, including the file tree, technologies used, and key features. So, feel free to explore, and if you have any questions or insights, don't hesitate to reach out. Excited to showcase how these technologies can bring diverse interests together in the digital realm!

Happy coding!

## Project Structure

```
javascript

dogs-catalog-app
├── .env
├── .eslintrc.json
├── .gitignore
├── components
│   ├── Carousel.js
│   ├── ImageModal.js
│   └── Layout.js
├── hooks
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   ├── api
│   │   ├── dogs.json
│   │   └── movies.json
│   ├── dogs-catalog
│   │   ├── index.js
│   │   └── [name].js
│   ├── films-catalog
│   │   ├── index.js
│   │   └── [id].js
│   ├── index.js
│   ├── _app.js
│   └── _document.js
├── postcss.config.js
├── public
│   ├── dalmatians.png
│   ├── graduate.png
│   ├── pattern-tile.png
│   └── pattern.svg
├── README.md
├── styles
│   └── globals.css
└── tailwind.config.js
```

- **.env**: Configuration file for environment variables.
- **.eslintrc.json**: Eslint configuration for maintaining code quality.
- ... (and so on for the rest of the files and directories)

Technologies Used

    React: A declarative, efficient, and flexible JavaScript library for building user interfaces.
    Next.js: A React framework for building server-side rendering and static web applications.
    Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.
    PostCSS: A tool for transforming CSS with JavaScript plugins.
    ESLint: A pluggable linting utility for JavaScript and JSX.

Getting Started

    Clone the repository: git clone https://github.com/your-username/dogs-catalog-app.git
    Install dependencies: npm install
    Run the development server: npm run dev (or yarn dev or pnpm dev)
    Open your browser and navigate to http://localhost:3000.

Additional Information

    API Endpoints: The pages/api directory contains API endpoints for dogs and movies in JSON format.
    Responsive Design: The app is designed to be responsive, ensuring a seamless experience across various devices.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out  [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Feel free to explore the project, review the code, and reach out if you have any questions or feedback. I'm enthusiastic about the opportunity to discuss how my skills align with your team's needs.

Greetings from Berlin**
