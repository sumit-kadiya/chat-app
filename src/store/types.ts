export type AuthUserType = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
};

export type UsersType = AuthUserType[];

export type UserContextType = {
  users: UsersType | null;
  user: AuthUserType | null;
  alertMsg: string;
  messages: [];
  sendMessage: (msg: any) => void;
  loginHandler: (user: AuthUserType) => void;
  logoutHandler: () => void;
};

export type UserContextProviderProps = {
  children: React.ReactNode;
};
