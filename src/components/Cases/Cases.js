import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Design system with web components",
    bg: "#f44336",
  },
  {
    id: 2,
    title: "Website 2",
    bg: "#e91e63",
  },
  {
    id: 3,
    title: "Website 3",
    bg: "#9c27b0",
  },
];

const Cases = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="row">
          {caseStudies.map((c) => (
            <div className="case" key={c.id}>
              <div
                className="case-details"
                style={{ backgroundColor: `${c.bg}` }}
              >
                {c.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
