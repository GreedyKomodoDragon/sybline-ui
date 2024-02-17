import { useNavigate } from "@solidjs/router";
import { isLogged } from "../../rest";
import { getCookie } from "../../utils/cookies";

// Define the HOC function
export const ProtectedRoute = <P extends object>(
  WrappedComponent: (props: any) => any
) => {
  // Return a functional component with additional props
  return (props: P) => {
    const nav = useNavigate();

    const checkAuth = () => {
      const token = getCookie("syb-token");
      if (!token) {
        nav("/login");
        return;
      }
      
      const username = getCookie("syb-username");
      if (!username) {
        nav("/login");
        return;
      }

      isLogged(username, token).catch(() => nav("/login"));
    };

    // Run the authentication check on component mount
    checkAuth();

    // Render the wrapped component with additional props
    return <WrappedComponent {...props} />;
  };
};
