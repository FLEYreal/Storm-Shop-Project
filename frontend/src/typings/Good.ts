export interface GoodType {
    type: string;
    id: number;
    name: string;
    displayName: string;
    desc: string;
    imageUrl: string;
    themeColor: string;
    themeTransparent?: string;  // Deprecated value, will be removed soon
    cost: string | number;
    old_cost: string | undefined,
    reviews: number,
    rating: number
}

export interface ScriptGoodType {
    title: string,
    cost: string | number,
    old_cost: string | undefined,
    theme: string,
    themeTransparent?: string;  // Deprecated value, will be removed soon
    desc: string,
    reviews: number,
    rating: number
}

export interface GoodDescType {
    title: string,
    subtitle: string
    cost: string | number,
    old_cost: string | undefined,
    image: string,
    theme: string,
    themeTransparent?: string;  // Deprecated value, will be removed soon
    reviews: number,
    rating: number
}