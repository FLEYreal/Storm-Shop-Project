export interface Article {
    // Unique name that also works as param of the link
    unique_name: string

    // Name in the title of the page
    display_name: string

    // Description for SEO
    seo_description: string

    // Content Array, what will be in an article
    content: ArticleContent[]
}

export interface ArticleContent {

    // Type of the content, title, text, etc...
    type: 
    "title" 
    | "p" 
    | "small_title" 
    | "small_p" 
    | "image" 
    | "video"

    // Content itself
    content?: string

    // For Images and videos
    url?: string

    // For Images only
    alt?: string
}