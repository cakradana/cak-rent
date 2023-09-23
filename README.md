# CakRent - Car Rental App

CakRent is a modern car rental application built with React, Next.js 13, TypeScript, and Tailwind CSS. This application allows users to search, filter, view prices, and get detailed information about available cars for rent. It integrates data from the Car API by API Ninja for car information and the Car Image API from Imagin Studio to display car images.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Search and Filter**: Users can search for specific cars and apply filters to refine their search results.
- **Price Information**: The app displays rental prices for each car, making it easy for users to compare options.
- **Car Details**: Users can access detailed information about each car, including specifications, images, and more.
- **API Integration**: CakRent integrates with the Car API by API Ninja for car data and the Car Image API from Imagin Studio for images.

## Getting Started

To get started with CakRent, follow these steps:

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/cakradana/cak-rent.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cak-rent
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Obtain API keys from [API Ninja](https://api-ninja.com/) and [Imagin Studio](https://www.imaginstudio.com/).

2. Create a `.env.local` file in the project root directory and add your API keys:

   ```env
   NEXT_PUBLIC_RAPID_API_KEY=your_api_ninja_key
   NEXT_PUBLIC_IMAGIN_API_KEY=your_imagin_studio_key
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to use CakRent.

## Contributing

We welcome contributions to improve CakRent. To contribute, follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature-name
   ```

4. Make your changes, commit them, and push to your forked repository:

   ```bash
   git commit -m "Add new feature"
   git push origin feature-name
   ```

5. Create a pull request from your forked repository to the main repository.

6. Our team will review your pull request, provide feedback, and merge it once it's ready.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
