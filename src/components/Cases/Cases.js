import React from "react";

const caseStudies = [
  {
    id: 1,
    title: "Website 1",
    bg: "red",
  },
  {
    id: 2,
    title: "Website 2",
    bg: "green",
  },
  {
    id: 3,
    title: "Website 3",
    bg: "blue",
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
