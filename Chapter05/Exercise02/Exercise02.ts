type BlogPost = {
  post: string;
  timeStamp: string;
  user: string;
};

interface AddToPost {
  (post: BlogPost): BlogPost[];
}

interface IBlogPost {
  allPost: BlogPost[];
  addToPost: AddToPost;
}
