export interface ICategory {
  name: string;
  slug: string;
}

export interface ITitle {
  id: string;
  name: string;
  slug: string;
  categories?: ICategory[];
  producer?: string;
}