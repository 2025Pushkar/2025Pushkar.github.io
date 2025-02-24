import tictactoe from "../image/projectsicon/tictactoe.png";
import Type2SCD from "../image/Type-2 SCD.png";
import BIChatbot from "../image/BIChatbot.png";
import krtrimaIQ from "../image/krtrimaIQ.png";
import pnl from "../image/pnl.png";
import pic from "../image/Pliable index Coding.jpeg";
import loan_default from "../image/loan_default.png";
import brc from "../image/book recommendation system.png";
import dp from "../image/dp.png";
import covid19 from "../image/covid19.jpg";
import salesDashboard from "../image/salesDashboard.png";
import rosaenlgPowerBI from "../image/rosaenlgpowerBI.png";
import MyPortfolio from "../image/myPortfolio.png";
import bingUML from "../image/bingUML.png";
import cloudRec from "../image/cloudRec.jpg";
import nlp from "../image/nlp.png";
import quantAnalysis from "../image/Qualitative analysis.png";
import coinSorted from "../image/coinSortedMachine.png";
import watsontechtalent from "../image/watsontechtalent.png"
import MLProcess from "../image/MLProcess.png"
import todos from "../image/todos.png"
const projectsInfo = [
  // Full Stack Development
  {
    name: "Watson Tech Talent Microinternships Platform",
    link: "#",
    desc: "Official website development",
    summary: "Developing a scalable micro-internship platform for computer science students at SUNY Binghamton University, providing a seamless full-stack solution for project collaboration and mentorship.",
    summary2: "Next.js, TypeScript, Python, PostgreSQL, Apache2, PM2, Virtual Machines, OAuth2, SSO, JWT, Tailwind CSS, CI/CD, API Development, Scalable Microservices, File Storage Management"
,
    imgSrc: watsontechtalent,
    categories: "Full Stack Development",
    type: "In-progress",
  },
  {
    name: "KrtrimaIQ Company Website",
    link: "https://www.krtrimaiq.ai/",
    desc: "Official website development",
    summary: "Played a key role in developing the company’s website, ensuring high performance, SEO optimization, and responsiveness.",
    summary2: "Next.js, Python, AWS Lambda, AWS S3, MongoDB",
    imgSrc: krtrimaIQ,
    categories: "Full Stack Development",
    type: "company",
  },
  {
    name: "AI-Powered Digital Assistants using Next.js and GenAI",
    link: "https://www.krtrimaiq.ai/platforms/digital-assistants",
    desc: "AI-powered digital assistants",
    summary: "Developed digital assistants leveraging Next.js and Generative AI for enhanced user experience.",
    summary2: "Next.js, OpenAI, Python",
    imgSrc: BIChatbot,
    categories: "Full Stack Development",
    type: "company",
  },
  {
    "name": "Task Management Application",
    "link": "https://github.com/2025Pushkar/lumaa-spring-2025-swe",
    "desc": "A full-stack application for managing tasks with secure user authentication and comprehensive CRUD functionality.",
    "summary": "Built with Node.js, Express, PostgreSQL, React, and TypeScript, this app features JWT-based authentication and robust task management capabilities.",
    "summary2": "Node.js, Express, PostgreSQL, Sequelize ORM, bcrypt, JWT, Zod, dotenv, React, TypeScript, React-Bootstrap, React Router, Context API",
    "imgSrc": todos,
    "categories": "Full Stack Development",
    "type": "company"
  },
  {
    name: "Code Analysis and Visualization Platform",
    link: "https://github.com/prembhajaj/HackBU",
    desc: "Hackathon project for code visualization",
    summary: "Built a full-stack application integrating React.js, Java Spring Boot, and ChatGPT.",
    summary2: "React.js, Bootstrap, Java Spring Boot",
    imgSrc: bingUML,
    categories: "Full Stack Development",
    type: "company",
  },
  {
    name: "PnL Management Website for a Publication House",
    link: "#",
    desc: "PnL Management System",
    summary: "Developed a profit and loss tracking system with role-based authentication and access control.",
    summary2: "React.js, Bootstrap, Python, AWS Lambda, AWS S3, MongoDB",
    imgSrc: pnl,
    categories: "Full Stack Development",
    type: "client",
  },
  {
    name: "My Portfolio Website",
    link: "https://portfolio-pushkar-wani.vercel.app/",
    desc: "Personal portfolio website",
    summary: "Designed and developed a responsive portfolio showcasing projects and skills.",
    summary2: "React.js, Bootstrap, Vercel",
    imgSrc: MyPortfolio,
    categories: "Full Stack Development",
    type: "company",
  },

  // Data Engineering & Data Analytics
  {
    name: "Type 2 Slowly Changing Dimensions in Azure Data Factory",
    link: "https://www.youtube.com/playlist?list=PLUvGZzOuysg5TiJlecOlRgy-qOuVNKOkF",
    desc: "Big Data Engineering Project",
    summary: "Implemented Type 2 Slowly Changing Dimensions (SCD) for historical data tracking.",
    summary2: "Azure SQL Database, Azure Data Factory, Azure Databricks, Azure Synapse Analytics, Python",
    imgSrc: Type2SCD,
    categories: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    name: "COVID-19 Data Analysis",
    link: "https://nbviewer.org/github/2015pushkar/EDA-on-Covid-19-Data/blob/main/Covid19-Data%20Analysis.ipynb",
    desc: "Exploratory Data Analysis (EDA)",
    summary: "Performed an in-depth analysis of COVID-19 datasets to identify trends and insights.",
    summary2: "Python, PostgreSQL",
    imgSrc: covid19,
    categories: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    name: "RosaeNLG Smart Narratives in Power BI",
    link: "https://www.krtrimaiq.ai/services/business-intelligence/enterprise-analytics",
    desc: "Integration of RosaeNLG with Power BI",
    summary: "Integrated RosaeNLG for automated narrative generation in Power BI reports.",
    summary2: "TypeScript, Power BI, RosaeNLG, PostgreSQL",
    imgSrc: rosaenlgPowerBI,
    categories: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    name: "Interactive Sales Dashboard using React.js and PostgreSQL",
    link: "https://www.krtrimaiq.ai/services/business-intelligence/react-dashboard",
    desc: "Interactive Sales Dashboard",
    summary: "Built an interactive sales dashboard using React-charts-JS-2 for visualizing sales data.",
    summary2: "React.js, React-charts-JS-2, PostgreSQL",
    imgSrc: salesDashboard,
    categories: "Data Engineering & Data Analytics",
    type: "company",
  },

  // Machine Learning
  {
    "name": "Optimized Data Processing & Model Evaluation for Classification",
    "link": "https://colab.research.google.com/drive/1G1omZI45DZqJzdIc3PIryIR6kcTV6Edo?usp=sharing",
    "desc": "Data preprocessing and machine learning model evaluation.",
    "summary": "Developed and evaluated classification models using supervised and unsupervised learning techniques, optimizing feature selection and model performance.",
    "summary2": "Python, NumPy, Pandas, Scikit-learn, Random Forest, K-Means, PCA, Autoencoders, DFT, Data Visualization",
    "imgSrc": MLProcess,
    "categories": "Machine Learning",
    "type": "company"
  },  
  {
    name: "Loan Eligibility Prediction",
    link: "https://github.com/2015pushkar/-LOAN-ELIGIBILITY-PREDICTION-USING-MACHINE-LEARNING-",
    desc: "Classification model for loan eligibility",
    summary: "Developed a machine learning model to predict loan approval based on applicant data.",
    summary2: "Python, Classification, Supervised Learning",
    imgSrc: loan_default,
    categories: "Machine Learning",
    type: "company",
  },
  {
    name: "Book Recommendation System",
    link: "https://github.com/2015pushkar/Book-Recommendation-System",
    desc: "Collaborative filtering-based recommendation system",
    summary: "Built a recommendation engine suggesting books based on user preferences.",
    summary2: "Python, Collaborative Filtering",
    imgSrc: brc,
    categories: "Machine Learning",
    type: "company",
  },
  {
    name: "Diabetes Prediction using Meta Classifier",
    link: "https://www.youtube.com/watch?v=4BJJovOhCbU",
    desc: "Medical ML application",
    summary: "Deployed predictive models for diabetes detection using advanced ML techniques.",
    summary2: "Python, Support Vector Machines, Supervised Learning, PostgreSQL",
    imgSrc: dp,
    categories: "Machine Learning",
    type: "company",
  },

  // Computer Networks
  {
    name: "Relay-Assisted Pliable Index Coding",
    link: "https://youtu.be/c6VY4EFbCZ0",
    desc: "Optimization of network communication",
    summary: "Implemented relay-assisted network coding to enhance data transmission efficiency.",
    summary2: "Python, MATLAB, Computer Networks",
    imgSrc: pic,
    categories: "Computer Networks",
    type: "company",
  },

  // Embedded Systems
  {
    name: "Automated Coin Sorting Machine",
    link: "https://www.youtube.com/watch?v=fOZBxkVDUV8",
    desc: "Embedded system for coin sorting",
    summary: "Developed an automated coin sorting machine using an 8-bit microcontroller.",
    summary2: "Embedded C++, PICE-1756H Microcontroller",
    imgSrc: coinSorted,
    categories: "Embedded Systems",
    type: "company",
  },

  // Publications
  {
    name: "Cloud-Based Recommendation System Analysis",
    link: "https://www.ijsr.net/archive/v11i2/SR22130223310.pdf",
    desc: "Cloud-based recommendation system",
    summary: "Developed a movie recommendation engine using ALS and API deployment.",
    summary2: "Python, Azure Data Lake, Azure Data Factory, Azure Databricks",
    imgSrc: cloudRec,
    categories: "Publications",
    type: "company",
  },
  {
    name: "Natural Language Generation in Business Intelligence",
    link: "https://medium.com/krtrimaiq-cognitive-solutions/natural-language-generation-in-business-intelligence-38ba12172128",
    desc: "NLG in BI tools",
    summary: "Exploring the role of NLG in business intelligence for generating smart narratives.",
    summary2: "TypeScript, Power BI, RosaeNLG",
    imgSrc: nlp,
    categories: "Publications",
    type: "company",
  },
  {
    name: "Qualitative Analysis of Ground Water Samples of 4 Sites in Hosakerehalli Locality of Bangalore South, Karnataka, India",
    link: "https://ijsrst.com/home/issue/view/article.php?id=IJSRST185327",
    desc: "Natural Language Generation in Business Intelligence",
    summary: "This paper examines groundwater quality by testing key parameters against WHO and Central Ground Water Board standards to assess pollution impact and ensure safe usage.",
    summary2: "",
    imgSrc: quantAnalysis,
    categories: "Publications",
    type: "company",
  },
];

export default projectsInfo;
