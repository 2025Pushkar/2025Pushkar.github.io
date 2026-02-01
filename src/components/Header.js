import React from "react";
import ResumePDF from "../pdfs/Pushkar_Pramod_Wani_Resume.pdf";

function Header() {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement("a");
    link.href = ResumePDF; // Set the href attribute to your resume PDF file
    link.download = "resume.pdf"; // Set the download attribute to specify the filename

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Trigger the click event on the anchor element
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      style={{ backgroundColor: "rgb(245, 245, 245)", color: "rgb(52, 58, 64)" }}
      className="text-center py-5"
    >
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ minHeight: "100vh", overflow: "hidden" }}
        >
          <div className="col-12">
            <h1
              className="display-4 font-weight-bold pt-3"
              style={{ color: "rgb(52, 58, 64)" }}
            >
              Pushkar Pramod Wani
            </h1>
            <h2
              className="h4 font-weight-semibold"
              style={{ color: "rgb(108, 117, 125)" }}
            >
              Persistence. Perseverance. Proficiency.
            </h2>
            <p
              className="opacity-50 font-monospace mx-auto"
              style={{ maxWidth: "100%", color: "rgb(108, 117, 125)" }}
            >
              I'm a technology enthusiast with a knack for developing projects that solve a problem. Passionate about learning and excelling, I seek to provide the most efficient solutions to any given complex problem.
            </p>
            <div className="d-flex justify-content-center mt-3">
              <button
                onClick={handleDownload}
                className="btn btn-outline-primary resume-button"
                style={{
                  borderColor: "rgb(33, 37, 41)",
                  color: "rgb(33, 37, 41)",
                  backgroundColor: "transparent",
                }}
              >
                Resume / CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
