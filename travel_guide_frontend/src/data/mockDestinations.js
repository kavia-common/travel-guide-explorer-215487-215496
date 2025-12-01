const destinations = [
  {
    id: 'paris-fr',
    name: 'Paris',
    country: 'France',
    region: 'Île-de-France',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1498731407327-773ebee86f6c?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Eiffel Tower', 'Louvre Museum', 'Montmartre'],
    tips: ['Buy museum passes', 'Walk along the Seine', 'Use metro for quick travel'],
    nearby: ['Versailles', 'Giverny'],
    description: 'A romantic city known for its art, fashion, and café culture.'
  },
  {
    id: 'kyoto-jp',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Kansai',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Fushimi Inari', 'Kinkaku-ji', 'Gion'],
    tips: ['Visit early mornings', 'Respect local customs'],
    nearby: ['Nara', 'Osaka'],
    description: 'Ancient temples, tranquil gardens, and traditional tea houses.'
  },
  {
    id: 'bali-id',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Bali',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Ubud rice terraces', 'Uluwatu Temple', 'Beaches'],
    tips: ['Hire a local driver', 'Expect humidity'],
    nearby: ['Nusa Penida', 'Lombok'],
    description: 'Tropical paradise with lush landscapes and vibrant culture.'
  },
  {
    id: 'newyork-us',
    name: 'New York City',
    country: 'USA',
    region: 'New York',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Central Park', 'Times Square', 'Statue of Liberty'],
    tips: ['Buy metro card', 'Walk the High Line'],
    nearby: ['Brooklyn', 'Hudson Valley'],
    description: 'The city that never sleeps with iconic skyline and culture.'
  },
  {
    id: 'rome-it',
    name: 'Rome',
    country: 'Italy',
    region: 'Lazio',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1526989079071-5b81e1b5bb66?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Colosseum', 'Vatican Museums', 'Trevi Fountain'],
    tips: ['Early tickets for popular sites', 'Stay hydrated in summer'],
    nearby: ['Tivoli', 'Ostia Antica'],
    description: 'Ancient history and delicious cuisine around every corner.'
  },
  {
    id: 'cape-town-za',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Western Cape',
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Table Mountain', 'Cape Point', 'V&A Waterfront'],
    tips: ['Check weather for cableway', 'Rent a car for Cape Peninsula'],
    nearby: ['Stellenbosch', 'Hermanus'],
    description: 'Spectacular landscapes and a vibrant waterfront city.'
  },
  {
    id: 'reykjavik-is',
    name: 'Reykjavík',
    country: 'Iceland',
    region: 'Capital Region',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Blue Lagoon', 'Hallgrímskirkja', 'Northern Lights (in winter)'],
    tips: ['Pack layers', 'Rent 4x4 in winter'],
    nearby: ['Golden Circle', 'Snaefellsnes'],
    description: 'Gateway to Iceland’s natural wonders and geothermal spas.'
  },
  {
    id: 'sydney-au',
    name: 'Sydney',
    country: 'Australia',
    region: 'New South Wales',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1510749677573-3150cd2ec8b9?q=80&w=1200&auto=format&fit=crop',
    highlights: ['Opera House', 'Harbour Bridge', 'Bondi Beach'],
    tips: ['Use Opal card', 'Coastal walks are a must'],
    nearby: ['Blue Mountains', 'Hunter Valley'],
    description: 'Harbour city with iconic architecture and beach lifestyle.'
  },
];

export default destinations;
