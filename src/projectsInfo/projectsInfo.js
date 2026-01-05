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
import watsontechtalent from "../image/watsontechtalent.png";
import MLProcess from "../image/MLProcess.png";
import todos from "../image/todos.png";
import semantic_bi_chatbot from "../image/semantic_bi_chatbot.png";
import leetcodeCover from "../image/semantic_similarity.png";
import system_architecture_etl_aurora from "../image/system_architecture_etl_aurora.png";
import system_architecture_airflow_spark_dynamodb from "../image/system_architecture_airflow_spark_dynamodb.png";
import AWS_Ecosystem_Batch_Ingestion_and_Orchestration from "../image/AWS_Ecosystem_Batch_Ingestion_and_Orchestration.png";
import system_architecture_concurrent_file_processing from "../image/system_architecture_concurrent_file_processing.png";
import systemDesign from "../image/System design-1.jpeg";
import Distributed_Image_Processing_and_Anomaly_Detection_architecture_diagram from "../image/Distributed_Image_Processing_and_Anomaly_Detection_architecture_diagram.png";
import leetcode from "../image/leetcode.png";

export const projectsInfo = [
  {
    title: "Watson Tech Talent Microinternships Platform",
    slug: "watson-tech-talent-microinternships-platform",
    cover: watsontechtalent,
    summary:
      "Developing a scalable micro-internship platform for computer science students at SUNY Binghamton University, enabling project collaboration and mentorship.",
    link: null,
    techStack: ["Next.js", "TypeScript", "Python", "PostgreSQL", "OAuth2", "JWT", "Tailwind CSS", "CI/CD"],
    category: "Full Stack Development",
    feature: true,
    type: "Internship",
  },
  {
    title: "KrtrimaIQ Company Website",
    slug: "krtrimaiq-company-website",
    cover: krtrimaIQ,
    summary:
      "Played a key role in developing the company's website, ensuring high performance, SEO optimization, and responsiveness.",
    link: "https://www.krtrimaiq.ai/",
    techStack: ["Next.js", "Python", "AWS Lambda", "AWS S3", "MongoDB"],
    category: "Full Stack Development",
    feature: true,
    type: "company",
  },
  {
    title: "AI-Powered Digital Assistants using Next.js and GenAI",
    slug: "ai-digital-assistants-nextjs-genai",
    cover: BIChatbot,
    summary: "Developed digital assistants leveraging Next.js and generative AI for enhanced user experience.",
    link: "https://www.krtrimaiq.ai/platforms/digital-assistants",
    techStack: ["Next.js", "OpenAI", "Python"],
    category: "Gen AI",
    type: "company",
  },
  {
    title: "Task Management Application",
    slug: "task-management-application",
    cover: todos,
    summary:
      "Built a full-stack application with JWT-based authentication and robust task management features.",
    link: "https://github.com/2025Pushkar/lumaa-spring-2025-swe",
    techStack: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Sequelize ORM",
      "JWT",
      "React",
      "TypeScript",
      "React-Bootstrap",
    ],
    category: "Full Stack Development",
    type: "project",
  },
  {
    title: "Code Analysis and Visualization Platform",
    slug: "code-analysis-visualization-platform",
    cover: bingUML,
    summary: "Built a full-stack application integrating React.js and Java Spring Boot for code visualization.",
    link: "https://github.com/prembhajaj/HackBU",
    techStack: ["React.js", "Bootstrap", "Java Spring Boot"],
    category: "Full Stack Development",
    feature: true,
    type: "hackathon",
  },
  {
    title: "PnL Management Website for a Publication House",
    slug: "pnl-management-website",
    cover: pnl,
    summary: "Developed a profit and loss tracking system with role-based authentication and access control.",
    link: null,
    techStack: ["React.js", "Bootstrap", "Python", "AWS Lambda", "AWS S3", "MongoDB"],
    category: "Full Stack Development",
    type: "company",
  },
  {
    title: "My Portfolio Website",
    slug: "portfolio-website",
    cover: MyPortfolio,
    summary: "Designed and developed a responsive portfolio showcasing projects and skills.",
    link: "https://portfolio-pushkar-wani.vercel.app/",
    techStack: ["React.js", "Bootstrap", "Vercel"],
    category: "Full Stack Development",
    type: "personal",
  },
  {
    title: "Semantic BI Chatbot (Regeneron)",
    slug: "semantic-bi-chatbot-regeneron",
    cover: semantic_bi_chatbot,
    summary:
      "Snowflake Cortex-driven assistant that converts natural-language queries into KPI stories on a governed semantic layer.",
    link: null,
    techStack: ["Snowflake", "Cortex LLM", "Snowpark Python", "Streamlit"],
    category: "Gen AI",
    feature: true,
    type: "Internship",
  },
  {
    title: "Concurrent File Processing Backend",
    slug: "concurrent-file-processing-backend",
    cover: system_architecture_concurrent_file_processing,
    summary:
      "Concurrent backend system for clinical data ETL with job tracking, validation, and reliable ingestion into a relational analytics store.",
    link: "https://github.com/2015pushkar/Concurrent-File-Processing-Backend",
    techStack: ["Node.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Queue Workers", "ETL Pipelines"],
    category: "Distributed Systems",
    feature: true,
    type: "Distributed Systems",
  },
  {
    title: "Scalable Retinal Image Processing Pipeline",
    slug: "scalable-retinal-image-processing-pipeline",
    cover: Distributed_Image_Processing_and_Anomaly_Detection_architecture_diagram,
    summary:
      "Cloud-native image processing pipeline on Google Cloud Dataproc using Apache Spark to ingest 62 GB of retinal fundus images, apply in-memory OpenCV enhancement (CLAHE, adaptive thresholding, morphology), and batch 8 MiB outputs back to Cloud Storage for near-linear scaling.",
    link: "https://github.com/2015pushkar/Distributed-Image-Processing-and-Anomaly-Detection",
    techStack: [
      "Python",
      "PySpark",
      "Apache Spark",
      "Google Cloud Dataproc",
      "Google Cloud Storage",
      "OpenCV",
    ],
    category: "Distributed Systems",
    feature: true,
    type: "Distributed Systems",
  },
  {
    title: "LeetCode Patterns and Solutions",
    slug: "leetcode-patterns-and-solutions",
    cover: leetcode,
    summary:
      "Curated LeetCode solutions organized by core data structures and algorithmic patterns, focused on clean Python implementations and problem-solving fluency.",
    link: "https://github.com/2015pushkar/Leetcode",
    techStack: ["Python", "Data Structures", "Algorithms", "LeetCode", "Problem Solving"],
    category: "Data Structures & Algorithms",
    type: "project",
  },
  {
    title: "Rental Apartments ETL (Aurora -> Redshift)",
    slug: "etl-rental-apartments",
    cover: system_architecture_etl_aurora,
    summary:
      "Serverless six-step pipeline: Aurora MySQL -> S3 -> Glue Spark -> Redshift, orchestrated by Step Functions.",
    link: "https://github.com/2015pushkar/ETL-for-Rental-apartments-using-Step-functions-Aurora-AWS-Glue-and-Redshift",
    techStack: ["Step Functions", "Aurora MySQL", "AWS Glue", "Redshift", "DynamoDB"],
    category: "Data Engineering & Data Analytics",
    feature: true,
    type: "aws",
  },
  {
    title: "Distributed Music Streams Processing",
    slug: "distributed-streams-processing",
    cover: system_architecture_airflow_spark_dynamodb,
    summary:
      "Micro-batch stream-like analytics: Airflow DAG every 5 minutes -> Glue PySpark -> DynamoDB upserts.",
    link: "https://github.com/2015pushkar/Distributed-streams-processing-using-Airflow-Spark-Dynamodb",
    techStack: ["Apache Airflow", "Glue PySpark", "DynamoDB", "S3"],
    category: "Data Engineering & Data Analytics",
    type: "aws",
  },
  {
    title: "Spotify-Style Streaming ETL Pipeline",
    slug: "spotify-streaming-etl",
    cover: AWS_Ecosystem_Batch_Ingestion_and_Orchestration,
    summary:
      "Airflow-to-Redshift batch ETL producing genre and hourly KPIs with pandas and Jupyter for analysis.",
    link: "https://github.com/2015pushkar/Batch-data-processing-of-music-streams-using-Airflow-Redshift",
    techStack: ["Airflow", "Redshift", "S3", "Python (pandas)"],
    category: "Data Engineering & Data Analytics",
    type: "aws",
  },
  {
    title: "Interactive Sales Dashboard",
    slug: "interactive-sales-dashboard",
    cover: salesDashboard,
    summary: "React + Chart.js dashboard with live Postgres API, drill-downs, and cohort filters.",
    link: "https://www.krtrimaiq.ai/services/business-intelligence/react-dashboard",
    techStack: ["React.js", "Chart.js-2", "PostgreSQL"],
    category: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    title: "Type 2 Slowly Changing Dimensions in Azure Data Factory",
    slug: "type-2-scd-azure-data-factory",
    cover: Type2SCD,
    summary: "Implemented Type 2 Slowly Changing Dimensions (SCD) for historical data tracking.",
    link: "https://www.youtube.com/playlist?list=PLUvGZzOuysg5TiJlecOlRgy-qOuVNKOkF",
    techStack: ["Azure SQL", "Azure Data Factory", "Azure Databricks", "Azure Synapse", "Python"],
    category: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    title: "COVID-19 Data Analysis",
    slug: "covid-19-data-analysis",
    cover: covid19,
    summary: "Performed an in-depth analysis of COVID-19 datasets to identify trends and insights.",
    link: "https://nbviewer.org/github/2015pushkar/EDA-on-Covid-19-Data/blob/main/Covid19-Data%20Analysis.ipynb",
    techStack: ["Python", "PostgreSQL"],
    category: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    title: "RosaeNLG Smart Narratives in Power BI",
    slug: "rosaenlg-power-bi-narratives",
    cover: rosaenlgPowerBI,
    summary: "Integrated RosaeNLG for automated narrative generation in Power BI reports.",
    link: "https://www.krtrimaiq.ai/services/business-intelligence/enterprise-analytics",
    techStack: ["TypeScript", "Power BI", "RosaeNLG", "PostgreSQL"],
    category: "Data Engineering & Data Analytics",
    type: "company",
  },
  {
    title: "Optimized Data Processing and Model Evaluation",
    slug: "optimized-data-processing-model-evaluation",
    cover: MLProcess,
    summary:
      "Developed and evaluated classification models using supervised and unsupervised techniques with feature optimization.",
    link: "https://colab.research.google.com/drive/1G1omZI45DZqJzdIc3PIryIR6kcTV6Edo?usp=sharing",
    techStack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Random Forest", "PCA", "Autoencoders"],
    category: "Machine Learning",
    type: "company",
  },
  {
    title: "Loan Eligibility Prediction",
    slug: "loan-eligibility-prediction",
    cover: loan_default,
    summary: "Built a machine learning model to predict loan approval based on applicant data.",
    link: "https://github.com/2015pushkar/-LOAN-ELIGIBILITY-PREDICTION-USING-MACHINE-LEARNING-",
    techStack: ["Python", "Classification", "Supervised Learning"],
    category: "Machine Learning",
    type: "company",
  },
  {
    title: "Book Recommendation System",
    slug: "book-recommendation-system",
    cover: brc,
    summary: "Built a recommendation engine suggesting books based on user preferences.",
    link: "https://github.com/2015pushkar/Book-Recommendation-System",
    techStack: ["Python", "Collaborative Filtering"],
    category: "Machine Learning",
    type: "company",
  },
  {
    title: "Diabetes Prediction using Meta Classifier",
    slug: "diabetes-prediction-meta-classifier",
    cover: dp,
    summary: "Deployed predictive models for diabetes detection using advanced ML techniques.",
    link: "https://www.youtube.com/watch?v=4BJJovOhCbU",
    techStack: ["Python", "Support Vector Machines", "Supervised Learning", "PostgreSQL"],
    category: "Machine Learning",
    type: "company",
  },
  {
    title: "Relay-Assisted Pliable Index Coding",
    slug: "relay-assisted-pliable-index-coding",
    cover: pic,
    summary: "Implemented relay-assisted network coding to enhance data transmission efficiency.",
    link: "https://youtu.be/c6VY4EFbCZ0",
    techStack: ["Python", "MATLAB", "Computer Networks"],
    category: "Computer Networks",
    type: "company",
  },
  {
    title: "Automated Coin Sorting Machine",
    slug: "automated-coin-sorting-machine",
    cover: coinSorted,
    summary: "Developed an automated coin sorting machine using an 8-bit microcontroller.",
    link: "https://www.youtube.com/watch?v=fOZBxkVDUV8",
    techStack: ["Embedded C++", "PICE-1756H Microcontroller"],
    category: "Embedded Systems",
    type: "company",
  },
  {
    title: "Cloud-Based Recommendation System Analysis",
    slug: "cloud-based-recommendation-system-analysis",
    cover: cloudRec,
    summary: "Developed a movie recommendation engine using ALS and API deployment.",
    link: "https://www.ijsr.net/archive/v11i2/SR22130223310.pdf",
    techStack: ["Python", "Azure Data Lake", "Azure Data Factory", "Azure Databricks"],
    category: "Publications",
    type: "publication",
  },
  {
    title: "Natural Language Generation in Business Intelligence",
    slug: "nlg-business-intelligence",
    cover: nlp,
    summary: "Explored the role of NLG in business intelligence for generating smart narratives.",
    link: "https://medium.com/krtrimaiq-cognitive-solutions/natural-language-generation-in-business-intelligence-38ba12172128",
    techStack: ["TypeScript", "Power BI", "RosaeNLG"],
    category: "Publications",
    type: "publication",
  },
  {
    title: "Qualitative Analysis of Ground Water Samples in Bangalore",
    slug: "ground-water-qualitative-analysis",
    cover: quantAnalysis,
    summary:
      "Examined groundwater quality against WHO and Central Ground Water Board standards to assess pollution impact.",
    link: "https://ijsrst.com/home/issue/view/article.php?id=IJSRST185327",
    techStack: ["Research", "Data Analysis"],
    category: "Publications",
    type: "publication",
  },
];
