import tictactie from "../image/projectsicon/tictactoe.png";
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

const projectsInfo = [
  {
    name: "Seamless Integration: RosaeNLG Narratives Meet PowerBI",
    link: "https://www.krtrimaiq.ai/services/business-intelligence/enterprise-analytics",
    desc: "Integration project",
    summary: "Integration of RosaeNLG natural language narratives with PowerBI using TypeScript",
    summary2: "TypeScript, PowerBI, RosaeNLG",
    imgSrc: rosaenlgPowerBI,
    categories: "Data Analysis",
    type: "company",
  },
  {
    name: "Sales Dashboard using React.JS and PostgreSQL",
    link: "https://www.krtrimaiq.ai/services/business-intelligence/react-dashboard",
    desc: "Interactive sales dashboard",
    summary: "Interactive sales dashboards with React-charts-JS-2 library",
    summary2: "React.JS, React-charts-JS-2, PostgreSQL",
    imgSrc: salesDashboard,
    categories: "Data Analysis",
    type: "company",
  },
  {
    name: "krtrimaIQ Cognitive Solution Website",
    link: "https://www.krtrimaiq.ai/",
    desc: "Digital assistants chatbot",
    summary: "Developed the company's website using Next.js, focusing on high performance, SEO optimization, and responsive design.",
    summary2: "Next.JS, Python",
    imgSrc: krtrimaIQ,
    categories: "Web Development",
    type: "company",
  },
  {
    name: "Digital Assistants Chatbot using Next.JS and Gen AI",
    link: "https://www.krtrimaiq.ai/platforms/digital-assistants",
    desc: "Digital assistants chatbot",
    summary: "Developed digital assistants using Next.js and Gen AI",
    summary2: "Next.JS, Open AI",
    imgSrc: BIChatbot,
    categories: "Web Development",
    type: "company",
  },
  {
    name: "PnL Website for a Publication House",
    link: "#",
    desc: "Digital assistants chatbot",
    summary: "Developed a PnL website for a publication house with role-based authentication and user access control.",
    summary2: "React.JS",
    imgSrc: pnl,
    categories: "Web Development",
    type: "client",
  },
  {
    name: "My Portfolio",
    link: "https://portfolio-pushkar-wani.vercel.app/",
    desc: "Personal Portfolio",
    summary: "Built a responsive personal portfolio website showcasing my projects, skills, and experience.",
    summary2: "React.JS, Bootstrap, Vercel",
    imgSrc: MyPortfolio, // Ensure you have an appropriate image for your portfolio project
    categories: "Web Development",
    type: "company", // Assuming it's a personal project; if for a client, use "client"
  },
  {
    name: "Big Data - Type 2 SCD in Azure Data Factory",
    link: "https://www.youtube.com/playlist?list=PLUvGZzOuysg5TiJlecOlRgy-qOuVNKOkF",
    desc: "Type 2 SCD implementation",
    summary: "Implemented Type 2 Slowly Changing Dimensions (SCD) in Azure Data Factory",
    summary2: "Azure SQL Database, Azure Data Factory, Azure Databricks, Azure Synapse Analytics, Python",
    imgSrc: Type2SCD,
    categories: "Data Engineering",
    type: "company",
  },
  {
    name: "Loan Eligibility Prediction (Machine Learning)",
    link: "https://github.com/2015pushkar/-LOAN-ELIGIBILITY-PREDICTION-USING-MACHINE-LEARNING-",
    desc: "Loan eligibility prediction",
    summary: "Classification model to predict loan eligibility based on customer application data",
    summary2: "Python, Classification, Supervised learning",
    imgSrc: loan_default,
    categories: "Machine Learning",
    type: "company",
  },
  {
    name: "Book Recommendation System (Collaborative Filtering)",
    link: "https://github.com/2015pushkar/Book-Recommendation-System",
    desc: "Book recommendation system",
    summary: "Recommendation system suggesting items to users based on past interactions",
    summary2: "Python, Collaborative Filtering",
    imgSrc: brc,
    categories: "Machine Learning",
    type: "company",
  },
  {
    name: "Diabetes Prediction (Support Vector Machines)",
    link: "https://github.com/2015pushkar/Diabetes-Prediction-using-Support-Vector-Machines",
    desc: "Diabetes prediction",
    summary: "Analyzed diabetes dataset attributes and applied SVM model for accurate classification",
    summary2: "Python, Support Vector Machines, Supervised learning",
    imgSrc: dp,
    categories: "Machine Learning",
    type: "company",
  },
  {
    name: "COVID-19 Data Analysis",
    link: "https://nbviewer.org/github/2015pushkar/EDA-on-Covid-19-Data/blob/main/Covid19-Data%20Analysis.ipynb",
    desc: "COVID-19 data analysis",
    summary: "Performed exploratory data analysis on COVID-19 datasets",
    summary2: "Python",
    imgSrc: covid19,
    categories: "Data Analysis",
    type: "company",
  },
  {
    name: "Tic-Tac-Toe Game (C Language)",
    link: "https://github.com/2015pushkar/Tic-Tac-Toe-Game",
    desc: "Tic-Tac-Toe game",
    summary: "Developed a Tic-Tac-Toe game following best software development practices",
    summary2: "C Language",
    imgSrc: tictactie,
    categories: "Web development",
    type: "company",
  },
  {
    name: "Relay Assisted Pliable Index Coding",
    link: "https://youtu.be/c6VY4EFbCZ0",
    desc: "Pliable Index Coding project",
    summary: "Implemented network coding with relay assistance to optimize communication system performance",
    summary2: "Python, Matlab, Computer Networks",
    imgSrc: pic,
    categories: "Networking",
    type: "company",
  },
];

export default projectsInfo;
