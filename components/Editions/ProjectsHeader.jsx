const ProjectsHeader = () => {
  return (
    <header className="hero-detail u-padding-x-large--tb">
      <div className="grid-x grid-padding-x">
        <div className="medium-12 medium-offset-0 large-4 cell">
          <h1 className="hero-head">This year&apos;s projects</h1>
        </div>

        <div className="small-6 medium-offset-0 large-3 cell large-offset-1">
          <p className="hero-text">
            innovation
            <br /> exploration
            <br /> hiring
            <br /> fun
            <br /> giving back
            <br /> experience
            <br /> open source
          </p>
        </div>

        <div className="small-6 medium-offset-0 large-3 cell">
          <p className="hero-text">
            community
            <br /> learning
            <br /> network
            <br /> diversity
            <br /> visibility
            <br /> impact
            <br /> open data
          </p>
          <div className="osoc-float-element-o-small" />
        </div>
      </div>
    </header>
  );
};

export default ProjectsHeader;
