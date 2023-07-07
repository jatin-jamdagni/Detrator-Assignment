export interface ProductCardProps {
    title: string,
    price: number,
    rating: number,
    count: number,
    description: string,
    image: string,
    category: string
}

export interface ApiProps {
    id: number,
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }

}

export interface ExtendMoreProps {
    expand: boolean
    onClick: () => void,
    ariaLabel: string
}