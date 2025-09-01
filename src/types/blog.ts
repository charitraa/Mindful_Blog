export interface Author {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface Reply {
  id: number;
  content: string;
  author: Author;
  createdAt: string;
  likes: number;
  dislikes: number;
}

export interface Comment {
  id: number;
  content: string;
  author: Author;
  createdAt: string;
  likes: number;
  dislikes: number;
  replies?: Reply[];
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  categories: string[];
  tags: string[];
  readingTime: number;
  comments: Comment[];
}
