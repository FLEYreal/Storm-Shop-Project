export interface GoodType {
    type: string;
    id: number;
    name: string;
    displayName: string;
    desc: string;
    imageUrl: string;
    themeColor: string;
    themeTransparent: string;
    cost: string | number;
}

export interface ScriptGoodType {
    title: string,
    cost: string | number,
    theme: string,
    themeTransparent: string,
    desc: string,
}

export interface GoodDescType {
    title: string,
    subtitle: string
    cost: string | number,
    image: string,
    theme: string,
    themeTransparent: string
}