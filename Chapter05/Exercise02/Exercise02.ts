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

class blogPostClass implements IBlogPost {
  allPost: BlogPost[] = [];
  addToPost(post: BlogPost): BlogPost[] {
    this.allPost = [...this.allPost, post];
    return this.allPost;
  }
}

const blog = new blogPostClass();
let post1: BlogPost = {
  post: "Goodbye, 2020",
  timeStamp: (12345678).toString(),
  user: "Rayon",
};
let post2: BlogPost = {
  post: "Welcome, 2021",
  timeStamp: (12345678).toString(),
  user: "Mark",
};
let post3: BlogPost = {
  post: "What happened to 1999?",
  timeStamp: (12345678).toString(),
  user: "Will",
};
