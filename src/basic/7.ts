type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: boolean;
  details?: {
    createAt: string;
    updateAt: string;
  };
};
