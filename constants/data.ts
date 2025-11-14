import { Property, Service, Story } from "@/types";

export const properties: Property[] = [
  {
    id: "1",
    price: "$750,000",
    address: "123 Maple St, Springfield",
    beds: "4 Beds",
    baths: "3 Baths",
    sqft: "2,400 sqft",
    listedBy: "Propertunity Realty",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSRZ3E9xdXPYs9PNdInl8GuycNA0acrzu0g3jnvghsAPOqbWUPVeLR1-5Snm9zAY_D_tBh-euXBvxOxvuV-CCK7DpfH57Aq7R0mYdlLwarxuXz0JZs61d9RG3iONl5k4SKwZK8xXmWNnFyuklake7M-WMoO2dYGFNDcNBL3T4StdM0shqeRxwd6Gu2Ger60wu1tHmo9XzpXfJyOZEpIz6co6oNVWRL3ME7WkV68_NIrWr-7Nbu4ysitKPKzMlczzZicYX5_gChKfMd",
  },
  {
    id: "2",
    price: "$1,200,000",
    address: "456 Oak Ave, Metropolis",
    beds: "5 Beds",
    baths: "4.5 Baths",
    sqft: "3,800 sqft",
    listedBy: "Summit Estates",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe3LdNAqca8Nf1lC0dU1WD5RT3FFxu38jWjkBcOlWDHuSybEqkaeZMK5u2ZRIaMAZs6aroC3wUZR9p4tW7oTW9_5sLZIwexf85puxVxMZ5TjCeJ6cF_Wy0COU8mfQDgeCj8_oGsJZ51gzFD48H_4tCirD1O0AMhmzf8TAe0dihv2ZeSN2mepYeyxBNjo1TH7dKvaB1E1dEhkgf3jOWBMkL8ky7k4pT7u-ttqROf_ZUUoiHwVgJ8lhLYvp81Hp5z722H3oLV1FlQN4Y",
  },
  {
    id: "3",
    price: "$450,000",
    address: "789 Pine Ln, Lakeside",
    beds: "3 Beds",
    baths: "2 Baths",
    sqft: "1,600 sqft",
    listedBy: "Lakefront Homes",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYa40qv32LYBHapJhH1PuDhJK2GdAtBuU12EIj2B0mX3zx5uMH_DF-5Te59tEq1NZPKTcxRx6lqBCw7Kcx_vCkLReXbqc6xPD16q5Xpuit0Ko-3d6ZN_3MZgGGOfhfd18y0ZSZ3Rm4D9JZQADPSInTOnkiaNRi7Kk97taQXmGZGP4p1VcSf3eyyUSjKvD7tx1qeIQm2pDc2p3n8_ZB_htEVvqw3_MDSL-_6kpSyr-pNEj3rYld1dtXjTk9P7zMqq6mIGCluhNxp9V9",
  },
];

export const services: Service[] = [
  {
    id: "1",
    name: "Apex Inspections",
    category: "Home Inspectors",
    rating: 4,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPniXKFgybOqKM-gIwNhV97dz3Bg838qzEadh5vNGpbBJB5wUEJTQIhA-Nw_NmlipJNZvES7priOKve97vAYdxZJd34nWr2w0LqXDIKDpTLBVVeCBq0xUgTxDYpGkN_jxXCl-fm1kgvlAOuQI2jMxZXLCitVk_bKnZBpp7cTHxFPTpGaWGrJ-uyk3KLmWo-MG9xtaZ9OLyLlhTflufvJWtBflCaA42fRVTbZSzay6oZeibexf28phGZ17YyEmF9-imH14wMyTVC_2I",
    hasImage: true,
  },
  {
    id: "2",
    name: "Legal Eagles LLC",
    category: "Real Estate Attorneys",
    rating: 5,
    icon: "gavel",
    hasImage: false,
  },
  {
    id: "3",
    name: "BuildRight Contractors",
    category: "General Contractors",
    rating: 4.5,
    icon: "construction",
    hasImage: false,
  },
  {
    id: "4",
    name: "GreenThumb Landscaping",
    category: "Landscaping Services",
    rating: 5,
    icon: "grass",
    hasImage: false,
  },
];

export const stories: Story[] = [
  {
    id: "1",
    title: "Renovating Our Way to Perfection",
    description: "A fixer-upper story: turning a dated property into a modern masterpiece with the help of local pros.",
    author: "By Sarah Chen",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbcaQxlRxWT5CVGcNusUlKpNIFWD-W5ufeHxSY7jDeaKXsrgZ2Q9ZVYWmCY5h0ARbx_EUepXdsf6wDETUW3NzQpNCy79GWcYaBemUaJGXVq3XdfEIZ8PSqGhTG4kiiDB4_FJ5POngrns3B2fQ1OdyQgi5gFNQX_VyJ5OfDUn19PMsfjDd6XsPtSa2HcT-PlRUjCp4U_Psr5y_UGFgxGVtKcmVsRcbTgBJqvhOHrTQhkBZaq1KGMFjl_d5GHaSTCFub9EcL0bXHrdtu",
  },
  {
    id: "2",
    title: "Our Cross-Country Move",
    description: "Tips and tricks for a smooth relocation and settling into a new city from someone who's done it all.",
    author: "By The Carter Family",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbi3yddN621ezc11f-wK3KFwzb0OmEmqkF1uuM5olffo3Owi27siKG3U_jZ-_O8fkPJOjhtTd6a4jues9zrppYc-PaFkuAVGkCKlyK9Zafnrjwf5Y3LatRAJtHS6fbnUVHzXKgm_GKNPkND2Quvvb7_DrKpRX7yc0WQtp9gAIijU7Oj6Rjm4eQBXO2VN-8TD1c8KqbYXwvo-tgk9rhUSrQbP7P4QRPme_tA_KGTFliQA2YsZGYthTALsebhEaG_T4n5JN7RcZFjyro",
  },
  {
    id: "3",
    title: "Building a Community, One BBQ at a Time",
    description: "How moving to a new neighborhood led to lifelong friendships and a strong sense of belonging.",
    author: "By David Rodriguez",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYa40qv32LYBHapJhH1PuDhJK2GdAtBuU12EIj2B0mX3zx5uMH_DF-5Te59tEq1NZPKTcxRx6lqBCw7Kcx_vCkLReXbqc6xPD16q5Xpuit0Ko-3d6ZN_3MZgGGOfhfd18y0ZSZ3Rm4D9JZQADPSInTOnkiaNRi7Kk97taQXmGZGP4p1VcSf3eyyUSjKvD7tx1qeIQm2pDc2p3n8_ZB_htEVvqw3_MDSL-_6kpSyr-pNEj3rYld1dtXjTk9P7zMqq6mIGCluhNxp9V9",
  },
];

