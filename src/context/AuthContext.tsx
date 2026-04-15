import { useEffect, JSX, createContext, useReducer, Dispatch } from "react";

type AuthContextType = {
  user: User | null;
  dispatch: Dispatch<AuthAction>;
};
type User = {
  id: string;
  email: string;
  name: string;
};

type authState = {
  user: User | null;
};

type AuthAction = { type: "LOGIN"; payload: User } | { type: "LOGOUT" };

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (
  state: authState,
  action: AuthAction,
): authState => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // Find a user in localstorage when application reloads
  useEffect(() => {
    const userString = localStorage.getItem("user");

    if (userString) {
      const user = JSON.parse(userString);
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  // // Check if json has been read and user has logged in and logged out
  // console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
