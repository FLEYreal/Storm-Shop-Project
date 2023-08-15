export interface GoodType {
    type: string;
    id: number;
    name: string;
    displayName: string;
    desc: string;
    imageUrl: string;
    themeColor: string;
    themeTransparent?: string;  // Deprecated value, will be removed soon
    cost: number | number;
    old_cost: number | undefined,
    reviews: number,
    rating: number
}

export interface ScriptGoodType {
    title: string,
    cost: number | number,
    old_cost: number | undefined,
    theme: string,
    themeTransparent?: string;  // Deprecated value, will be removed soon
    desc: string,
    reviews: number,
    rating: number
}

export interface GoodDescType {
    title: string,
    subtitle: string
    cost: number | number,
    old_cost: number | undefined,
    image: string,
    theme: string,
    themeTransparent?: string;  // Deprecated value, will be removed soon
    reviews: number,
    rating: number
}