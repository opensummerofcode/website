const When = () => {
  return (
    <div>
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 cell">
          <h3 className="h5">
            {/* TODO: replace by dynamic date */}6 July &mdash; 30 July{' '}
            <span className="subheader">From Monday to Thursday, 9AM to 5PM</span>
          </h3>
          <p>You don&apos;t have to work on Fridays, holidays or weekends!</p>

         {/* <p>
            Note: this is last year&apos;s schedule for reference. This year&apos;s planning will be
            published in May.
          </p>*/}
          <div className="loading loading--calendar">
            {/* <!-- <iframe class="calendar" src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=mietclaes.com_h1rs31a79809r742e5lpdpegbg%40group.calendar.google.com&amp;color=%2342104A&amp;ctz=Europe%2FBrussels&dates=20180702%2F20180726" style="border-width:0" width="100%" height="800" frameborder="0" scrolling="no"></iframe> --> */}
            <iframe
              title="osoc calendar"
              src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=2&amp;hl=en_GB&amp;color=%23B1440E&amp;bgcolor=%23ffffff&amp;src=bWlldGNsYWVzLmNvbV9oMXJzMzFhNzk4MDlyNzQyZTVscGRwZWdiZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;ctz=Europe%2FBrussels&dates=20200701%2F20200731"
              style={{ borderWidth: 0 }}
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="no"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default When;
