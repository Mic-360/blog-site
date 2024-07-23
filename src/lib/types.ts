export type Blog = {
    title: string;
    description: string;
    date: string;
    tags: string[];
    published: boolean;
    slug: string;
    thumbnail: string;
};

export type BlogPost = {
    content: any;
    meta: Blog;
};