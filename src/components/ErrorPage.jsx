import {useRouteError} from "react-router-dom";

function ErrorPage(props) {
    const error = useRouteError();
    return (
        <>
            <h2 className="notFound">{error.status} - {error.statusText}: Il n'y a rien sur cette URL</h2>
        </>
    );
}

export default ErrorPage;