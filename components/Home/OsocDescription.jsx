const OsocDescription = () => {
  return (
    <div className="grid-x align-middle c-what">
      <div className="small-12 large-5 cell">
        <div className="u-margin">
          <p className="intro-text">
            A 4-week summer programme in July, that provides Belgian based students the{' '}
            <strong>training</strong>, <strong>network</strong> and <strong>support</strong>{' '}
            necessary to transform <strong>open innovation projects</strong> into powerful
            real-world services.
          </p>
        </div>
      </div>
      <div className="small-12 large-7 cell">
        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            title="OSOC presentation"
            src="https://www.youtube-nocookie.com/embed/wQh6e2w1kX0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* <iframe
            title="OSOC presentation"
            src="https://player.vimeo.com/video/188284459?title=0&byline=0&portrait=0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              width: '100%',
              height: '100%'
            }}
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
          /> */}
        </div>
        {/* <!-- <a className="button fancy u-margin-large--t" href="projects.html">View last year's projects</a> --> */}
      </div>
    </div>
  );
};

export default OsocDescription;
