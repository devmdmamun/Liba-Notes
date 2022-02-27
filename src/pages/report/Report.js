import classes from "./Report.module.css";
export const Report = () => {
  return (
    <div className="dashPageContainer">
      <h2 className="h2">Report</h2>
      <p className={classes.reportP}>
        Let us know about your issues via{" "}
        <a
          className={classes.twitter}
          href="https://twitter.com/devmdmamun"
          rel="noreferrer"
          target="_blank"
        >
          Twitter.
        </a>
      </p>
    </div>
  );
};
