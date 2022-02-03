import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return ( 
        <div className="notFound">
            <h2>Sorry</h2>
            <body>
                <h3>Page Not Found</h3>
            </body>
            <Link to={'/'}>
                Back to Home Page
            </Link>
        </div>
    );
}
 
export default NotFoundPage;