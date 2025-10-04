const Workflow = () => {
  const workflowInfo = [
    {
      title: "Research",
      description:
        "Comprehensive research effectively informs and drives our creative design process.",
      img: "/images/workflow/research.svg",
    },
    {
      title: "Designing",
      description:
        "Creativity flourishes in design, transforming ideas into visually captivating solutions.",
      img: "/images/workflow/Designing.svg",
    },
    {
      title: "Development",
      description:
        "Innovation emerges through focused development, effortlessly shaping ideas.",
      img: "/images/workflow/development.svg",
    },
    {
      title: "Deliver",
      description:
        "Our dedication is to perfect execution and punctual delivery.",
      img: "/images/workflow/Deliver.svg",
    },
  ];

  return (
    <div className="container my-5">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h2 className="section__title">My Workflow</h2>
        <p className=" mx-auto" style={{ maxWidth: "720px" }}>
          Unleashing Workflow Excellence — my process starts with in-depth
          research, moves on to innovative design, meticulous development, and
          ends with a smooth delivery.
        </p>
      </div>

      {/* Workflow Cards */}
      <div className="row g-4">
        {workflowInfo.map((workflow, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3">
            <div className=" h-100 border-0  text-center">
              <img
                src={workflow.img}
                alt="workflow img"
                className="card-img-top img-fluid p-3"
                style={{ height: "180px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{workflow.title}</h5>
                <p className="card-text ">{workflow.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
