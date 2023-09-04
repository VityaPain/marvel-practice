import ErrorMessage from "../errorMessage/ErrorMessage"
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <h1>Page not found</h1>
      <NavLink to="/">Back to main page</NavLink>
    </div>
  )
}

export default Page404