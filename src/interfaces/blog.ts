export interface BlogContent {
    type: "text" | "image" | "video";
    value: string;
}

export interface Blog {
    id: string;
    title: string;
    category: string;
    description: string;
    title_image: string;
    content: BlogContent[];
    date_created: string;
    read_time: number;
}
