import { Helmet } from "react-helmet";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import classes from "./Error.module.scss"

export const Error = () => {
    const error = useRouteError();
    
    console.log(error);

    if(isRouteErrorResponse(error)) {
        return (
            <div className={classes.error}>
                <Helmet>
                    <title>Error!</title>
                </Helmet>
                <div className={classes.title}>
                    <h1>We're sorry!</h1>
                    <h2>An unexpected error has occured!</h2>
                </div>
                <div className={classes.info}>
                    <span>{error.status} - {error.statusText}</span>
                    <span>{error.error?.message}</span>
                    <div className={classes.stack}>
                        {error.error?.stack}
                    </div>
                </div>
            </div>
        )
    } else return (
        <div className={classes.error}>
            Something went wrong!
        </div>
    )
}