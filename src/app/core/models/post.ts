export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface ComentarioPost {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
