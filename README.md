# SkillUpZA

<div align="center">

![SkillUpZA Logo](public/assets/images/logo.png)

**An AI-driven career platform empowering job seekers and students in South Africa**

[Features](#features) • [Installation](#installation) • [Usage](#usage) • [Tech Stack](#tech-stack) • [Project Structure](#project-structure)

</div>

---

## 📋 Overview

SkillUpZA is a comprehensive AI-driven career platform tailored for South African users. It addresses the critical challenges of unemployment by providing job seekers, graduates, and high school students with the tools and resources needed to enhance their career prospects. The platform bridges the gap between employer demands and job seeker skills through intelligent matching, personalized learning paths, and comprehensive career guidance.

## 🎯 Problem Statement

The employment environment in South Africa presents significant challenges for job-seekers, graduates, and career changers. SkillUpZA addresses three key root causes:

- **Lack of career guidance for high school students**: Students often lack sufficient knowledge or guidance when selecting meaningful career paths, leading to choices that may not align with long-term fulfillment.

- **Under-skilled graduates**: Many graduates lack practical skills required for employment, including essential soft skills valued by employers, despite holding degrees or diplomas.

- **Tedious job-seeking process**: Online job applications can lack clarity, and there's a risk of information theft on dubious websites, making the job search process challenging and potentially hazardous.

## ✨ Features

### Core Features

1. **🤖 AI-Powered Skills Assessment**
   - Analyze users' skills and provide insights into strengths and areas for improvement
   - Personalized recommendations based on assessment results

2. **📚 Personalized Learning Plans**
   - AI-driven recommendations for individualized learning paths
   - Skill enhancement based on career goals
   - Comprehensive suite of online courses covering technical and soft skills

3. **🎯 Job Matching Algorithms**
   - Intelligent algorithms matching users with relevant job opportunities
   - Matching based on skills, experience, and career aspirations
   - Real-time job search with integration to local job databases

4. **🤝 Networking and Collaboration**
   - Platform for users to connect and share experiences
   - Collaborative project opportunities
   - Supportive community environment

5. **💼 AI-Powered Mentorship System**
   - Automated career advice and personalized guidance
   - Virtual mentorship interactions
   - Career coaching from experienced professionals and Skill AI

6. **📱 User-Friendly Interface**
   - Visually appealing and intuitive design
   - Mobile-responsive for accessibility on-the-go
   - Seamless and consistent user experience

7. **📊 Analytics and Reporting**
   - Data collection on user activity and website traffic
   - Course performance analytics
   - Ongoing platform improvement and optimization

### Additional Features

- User and Business authentication systems
- Job posting and management for employers
- Blog system for career insights and tips
- Interview preparation tools
- User dashboard with progress tracking
- Profile management and settings
- Course enrollment and tracking

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Material-UI (MUI)** - Component library
- **Bootstrap** - CSS framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **Recharts** - Data visualization

### Backend
- **PHP** - Server-side scripting
- **MySQL** - Database (via JawsDB)
- **Composer** - PHP dependency management

### Other Tools
- **EmailJS** - Email service integration
- **React Icons** - Icon library
- **Swiper** - Touch slider
- **React Helmet** - Document head management

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **PHP** (v7.4 or higher) - [Download](https://www.php.net/downloads)
- **Composer** - PHP dependency manager - [Download](https://getcomposer.org/)
- **MySQL** - Database server (or access to JawsDB)
- **Git** - Version control

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/SkillUpZa.git
cd SkillUpZa
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd DATABASE_DATA
composer install
cd ..
```

### 4. Environment Configuration

Create a `.env` file in the root directory (if not already present):

```env
# Database Configuration (for PHP backend)
JAWSDB_URL=your_jawsdb_connection_string
# or
JAWSDB=your_jawsdb_connection_string

# API Endpoints (if needed)
VITE_API_URL=http://localhost:8000
```

For the PHP backend, ensure your `DATABASE_DATA/connect.php` is configured with your database credentials.

### 5. Database Setup

1. Import the database schema from `src/Data/Database_tables/` (if available)
2. Configure your database connection in `DATABASE_DATA/connect.php`
3. Ensure all required tables are created

## 💻 Usage

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Backend Server

For the PHP backend, you'll need a PHP server. You can use:

```bash
# Using PHP built-in server
cd DATABASE_DATA
php -S localhost:8000
```

Or configure your preferred web server (Apache, Nginx) to serve the `DATABASE_DATA` directory.

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
SkillUpZa/
├── DATABASE_DATA/          # PHP backend API
│   ├── connect.php        # Database connection
│   ├── *.php              # API endpoints
│   └── vendor/            # Composer dependencies
├── public/                # Static assets
│   └── assets/           # Images, fonts, CSS
├── src/                   # React application source
│   ├── Components/       # Reusable React components
│   │   ├── About/
│   │   ├── Blogs/
│   │   ├── Course/
│   │   ├── Dashboard/
│   │   ├── JobPosting/
│   │   ├── ProfileLogin/
│   │   ├── Social/
│   │   └── ...
│   ├── Pages/            # Page components
│   │   ├── Home/
│   │   ├── Dashboard/
│   │   ├── Course-3/
│   │   └── ...
│   ├── Data/             # Static data and database schemas
│   ├── Hooks/            # Custom React hooks
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # Application entry point
│   └── Routers.jsx       # Route configuration
├── index.html            # HTML template
├── package.json          # Node.js dependencies
├── vite.config.js        # Vite configuration
└── vercel.json           # Vercel deployment config
```

## 🎯 Key Routes

- `/` - Home page
- `/LoginPage` - User login
- `/Register` - User registration
- `/BusinessLogin` - Business login
- `/BusinessRegister` - Business registration
- `/Dashboard` - User dashboard
- `/SkillAI` - AI-powered skills assessment
- `/Jobs` - Job listings
- `/Courses` - Course catalog
- `/MyCourses` - Enrolled courses
- `/UserSettings` - User profile settings
- `/CompanySettings` - Company profile settings
- `/Interview` - Interview preparation
- `/blog` - Blog posts
- `/contact` - Contact page

## 👥 Stakeholders

- **Job Seekers**: Primary users seeking to enhance job prospects and advance careers
- **High School Students**: Exploring career paths and gaining valuable insights
- **Employers**: Organizations seeking skilled candidates through the job board
- **Supporters and Partners**: Contributing to platform growth and success

## 🎯 Project Objectives

- Establish a ground-breaking platform dedicated to empowering job seekers and students
- Bridge the gap between employer demands and job seeker skills
- Combat unemployment challenges in South Africa
- Simplify job searching by offering genuine opportunities and skill-building courses
- Provide personalized career guidance through AI technology

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the ISC License.

## 📧 Contact & Support

For questions, issues, or contributions, please open an issue on the GitHub repository.

## 🙏 Acknowledgments

- All contributors and supporters of SkillUpZA
- Open-source libraries and frameworks that made this project possible

---

<div align="center">



*Empowering individuals to unlock their full potential and achieve their career aspirations*

</div>
