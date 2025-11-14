// Property types
export interface Property {
  id: string;
  price: string;
  address: string;
  beds: string;
  baths: string;
  sqft: string;
  listedBy: string;
  image: string;
}

// Service types
export interface Service {
  id: string;
  name: string;
  category: string;
  rating: number;
  image?: string;
  icon?: string;
  hasImage: boolean;
}

// Story types
export interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

// Professional types for marketplace
export interface Professional {
  id: string;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  image: string;
  specialty: string;
  location: string;
  specialtyIcon: string;
}

// Community Story types
export interface CommunityStory {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
}
