# Football Match App - Frontend

This is the frontend part of the Football Match App, built using Next.js with TypeScript and styled with Tailwind CSS. The application allows users to join football matches and manage their profiles.

## Features

- User authentication using Firebase
- Responsive design for mobile and desktop
- User-friendly interface for joining matches
- Email notifications for match reminders

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```
   cd football-match-app/frontend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized build of the application, run:
```
npm run build
```

### Deployment

For deployment, you can use platforms like Vercel or Netlify. Follow their documentation for deploying Next.js applications.

## Folder Structure

- `public/`: Contains static assets.
- `src/`: Contains the source code.
  - `components/`: Reusable components like Navbar.
  - `pages/`: Application pages.
  - `styles/`: Global CSS styles.
  - `utils/`: Utility functions, including Firebase setup.
  - `types/`: TypeScript types and interfaces.
- `next.config.js`: Configuration for Next.js.
- `package.json`: npm configuration file.
- `tailwind.config.js`: Tailwind CSS configuration.
- `tsconfig.json`: TypeScript configuration.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.