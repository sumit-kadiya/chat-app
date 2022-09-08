import { useState, createContext, useEffect, useContext } from "react";
import {
  AuthUserType,
  UsersType,
  UserContextType,
  UserContextProviderProps,
} from "./types";

const getLocalMsgs = () => {
  let list = localStorage.getItem("chatMessages");

  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export const UserContext = createContext<UserContextType>({
  users: [],
  user: null,
  alertMsg: "",
  messages: [],
  isAuth: false,
  sendMessage: () => {},
  loginHandler: (user: AuthUserType) => {},
  logoutHandler: () => {},
});

const UserProvider = ({ children }: UserContextProviderProps) => {
  const [users, setUsers] = useState<UsersType | null>(null);
  const [user, setUser] = useState<AuthUserType | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [messages, setMessages] = useState(getLocalMsgs());
  const [alertMsg, setAlert] = useState("");

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => {
        return response.json();
      })
      .then((userData) => {
        setUsers(userData);
        setAlert(userData.message);
        console.log(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendMessage = (msg: any) => {
    setMessages([...messages, msg]);
  };
  const loginHandler = (user: AuthUserType) => {
    setIsAuth(true);
    setUser(user);
  };
  const logoutHandler = () => {
    setIsAuth(false);
    setUser(null);
  };

  const userContext = {
    users,
    user,
    alertMsg,
    messages,
    isAuth,
    sendMessage,
    loginHandler,
    logoutHandler,
  };

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(UserContext);
};

export default UserProvider;
