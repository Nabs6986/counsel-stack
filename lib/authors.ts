export interface Author {
  name: string;
  role: string;
  bio: string;
  url?: string;
}

export const authors: Record<string, Author> = {
  "sarah-chen": {
    name: "Sarah Chen, JD",
    role: "Legal Technology Editor",
    bio: "Sarah is a former practicing attorney and legal technology consultant with 8 years of experience advising law firms on practice management software. She leads CounselStack's review methodology and hands-on software testing.",
    url: "https://counselstack.io/about",
  },
  "counselstack-editorial": {
    name: "CounselStack Editorial",
    role: "Legal Tech Analysts",
    bio: "The CounselStack editorial team independently reviews and compares legal practice management software to help attorneys and law firms make informed decisions.",
  },
};

export function getAuthor(id: string): Author {
  return authors[id] || authors["counselstack-editorial"];
}
