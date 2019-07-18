const Where = () => {
  return (
    <>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-6 large-5 cell">
          <h3 className="h5">
            BOSA
            <br />
            <span className="subheader">Brussels North, 1 July &mdash; 11 July</span>
          </h3>
          <p className="u-margin--t">
            <strong>WTC III building</strong>
            <br />
            Boulevard Simon Bolivar 30, 1000 Brussels
          </p>
          {/* <h3 className="h5">To be determined<br><span className="subheader">1 July &mdash; 11 July</span></h3> */}
        </div>
        <div className="small-12 medium-6 large-7 cell">
          <div className="loading loading--map u-margin--b">
            <iframe
              title="Location of BOSA building"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.353718757629395%2C50.859723986123385%2C4.357932507991792%2C50.86184196498779&amp;layer=mapnik&amp;marker=50.86078298758114%2C4.356158226728439"
              style={{ width: '100%', height: '250px' }}
            />
            <br />
            <small>
              <a href="https://www.openstreetmap.org/#map=19/50.86078/4.35583">View Larger Map</a>
            </small>
            {/*
            <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=4.352624416351319%2C50.842722493832355%2C4.3622803688049325%2C50.84820293447596&amp;layer=mapnik&amp;marker=50.84546279462811%2C4.357452392578125" style="width:100%; height:250px;"></iframe>
            <div className="text-right"><small><a href="https://www.openstreetmap.org/?mlat=50.84546&amp;mlon=4.35745#map=17/50.84546/4.35745">View Larger Map</a></small></div>
            */}
          </div>
        </div>
      </div>

      <hr />
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-6 large-5 cell">
          <h3 className="h5">
            Tour &amp; Taxis
            <br />
            <span className="subheader">Brussels North, 15 July &mdash; 25 July</span>
          </h3>
          <p className="u-margin--t">
            <strong>Flemish Government&apos;s Herman Teirlinck building</strong>
            <br />
            Avenue du Port 88, 1000 Bruxelles
          </p>
        </div>
        <div className="small-12 medium-6 large-7 cell">
          <div className="loading loading--map u-margin--b">
            <iframe
              title="Location of Herman Teirlinck Building"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.345307350158692%2C50.86345535675067%2C4.354963302612306%2C50.868933361672724&amp;layer=mapnik&amp;marker=50.8661944396736%2C4.350135326385498"
              style={{ width: '100%', height: '250px' }}
            />
            <div className="text-right">
              <small>
                <a href="https://www.openstreetmap.org/?mlat=50.86619&amp;mlon=4.35014#map=17/50.86619/4.35014">
                  View Larger Map
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-10 medium-6 large-5 cell">
          <p>
            We compensate all your public transports costs. However, you are free to come by car or
            book yourself a fancy hotel, but we don&apos;t reimburse those things.
          </p>
        </div>
      </div>
    </>
  );
};

export default Where;
