type Tech = {
    title: string;
    description: string;
    link: string;
}

export type Project = {
    id: number;
    title: string;
    slug: string;
    link: string;
    github: string;
    description: string;
    images: string[];
    stack: Tech[];
}