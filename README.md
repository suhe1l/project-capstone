# FITrack - Fitness Tracker Web App 🏋️‍♂️

**FITrack** is a full-featured fitness tracker web app that allows users to log their workouts, track their progress over time, search for exercises, and visualize workout data through graphs. The app integrates with the **WGER API** to provide users with comprehensive exercise data and is designed with responsiveness and user-friendliness in mind. This project is built using **React JS** and **Tailwind CSS** and serves as my capstone project for graduation.

---

## 🚀 Features

- **Log Workouts**: Users can input exercises, sets, reps, and weights for their workouts.
- **Workout History**: Displays a history of logged workouts with search and filter options.
- **Progress Tracking**: Visualize your progress over time with interactive graphs and charts.
- **Exercise Search**: Search for exercises dynamically using the WGER API.
- **Responsive Design**: A fully responsive interface designed with Tailwind CSS for a seamless experience across devices.

## 💻 Technologies Used

- **React JS**: Core framework for building the app.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.
- **WGER API**: API used for fetching exercise data.
- **Chart.js**: (or alternative) for visualizing workout progress.
- **React Router**: For handling navigation between pages.
- **React Query**: For data fetching and caching.

---

## 📖 Installation and Setup

### Prerequisites

Before setting up the project, ensure that you have the following tools installed:

- [Node.js](https://nodejs.org/) (v14+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Install:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/FITrack.git
   cd FITrack
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   or:

   ```bash
   yarn start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📄 Usage

Once the app is running, you can:

- Log your workouts through the **Workout Log** section.
- View your workout history in the **Workout History** section.
- Track your progress over time with interactive graphs in the **Progress Tracker** section.
- Search for new exercises using the **Exercise Search** feature powered by the WGER API.

---

## 📁 Project Structure

Here’s an overview of the important files and folders in the project:

```bash
├── /public             # Static assets like index.html
├── /src
│   ├── /assets         # Images, videos, or other media
│   ├── /components     # Reusable React components
│   ├── /pages          # Pages like Home, About, Services
│   ├── /hooks          # Custom hooks
│   ├── /utils          # Utility functions
│   ├── App.jsx         # Main application file
│   └── index.js        # Entry point
└── package.json        # Project configuration
```

---

## 🌐 API Integration

The app uses the **WGER API** to fetch exercise data dynamically. Here’s how it works:

1. **Exercise Search**: The search page allows users to browse exercises by name or muscle group.
2. **Exercise Details**: Each exercise displays its description, targeted muscle groups, and any associated images or videos.

For more details on the WGER API, check the official [WGER API Documentation](https://wger.de/en/software/api).

---

## 📊 Progress Tracking (Charts)

The app tracks and displays user progress over time by showing charts. This helps users to visualize improvements in key metrics such as:

- Total weight lifted.
- Repetitions per set.
- Number of workouts completed.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of the changes.

---

## 🔧 Future Enhancements

Some features that could be implemented in future updates:

- **Personalized recommendations** based on user workout history.
- **Advanced statistics** for in-depth analysis of workout patterns.
- **AI-powered suggestions** for optimizing workout routines.

---

## 📞 Contact

If you have any questions or feedback, feel free to contact me at:

- **Email**: [suheilmohammed.ke@gmail.com](mailto:suheilmohammed.ke@gmail.com)
- **GitHub**: [suhe1l](https://github.com/suhe1l)

---

### Screenshot

![Home Page Screenshot](./screenshots/home-page.png)

---
