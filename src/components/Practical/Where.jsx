import React from 'react';

const Where = () => {
  return (
    <div>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-6 large-5 cell">
          <h3 className="h5">
            BeCentral
            <br />
            <span className="subheader">Brussels Central, 2 July &mdash; 12 July</span>
          </h3>
          <p className="u-margin--t">
            <strong>Becentral</strong>
            <br />
            Cantersteen 12, 1000 Bruxelles
          </p>
        </div>
        <div className="small-12 medium-6 large-7 cell">
          <div className="loading loading--map u-margin--b">
            <iframe
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.352624416351319%2C50.842722493832355%2C4.3622803688049325%2C50.84820293447596&amp;layer=mapnik&amp;marker=50.84546279462811%2C4.357452392578125"
              style={{ width: '100%', height: '250px' }}
              title="Becentral"
            />
            <div className="text-right">
              <small>
                <a href="https://www.openstreetmap.org/?mlat=50.84546&amp;mlon=4.35745#map=17/50.84546/4.35745">
                  View Larger Map
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 medium-6 large-5 cell">
          <h3 className="h5">
            Tour &amp; Taxis
            <br />
            <span className="subheader">Brussels North, 16 July &mdash; 26 July</span>
          </h3>
          <p className="u-margin--t">
            <strong>Vlaamse Overheid Herman Teirlinckgebouw</strong>
            <br />
            Avenue du Port 88, 1000 Bruxelles
          </p>
        </div>
        <div className="small-12 medium-6 large-7 cell">
          <div className="loading loading--map u-margin--b">
            <iframe
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://www.openstreetmap.org/export/embed.html?bbox=4.345307350158692%2C50.86345535675067%2C4.354963302612306%2C50.868933361672724&amp;layer=mapnik&amp;marker=50.8661944396736%2C4.350135326385498"
              style={{ width: '100%', height: '250px' }}
              title="Vlaamse Overheid Herman Teirlinckgebouw"
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
    </div>
  );
};

export default Where;
