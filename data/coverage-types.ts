export interface CoverageType {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  description: string;
  whatCovers: string[];
  whoNeeds: string[];
  fromPrice: string;
  metaTitle: string;
  metaDesc: string;
}

export const COVERAGE_TYPES: CoverageType[] = [
  {
    slug: 'mortality-cover',
    name: 'Livestock Mortality Cover',
    icon: '💀',
    shortDesc: 'Financial protection if your animals die from accidental causes, disease, or specified weather events.',
    description: 'Livestock mortality cover pays you the agreed or market value of your animal if it dies from a covered cause. Covered causes typically include accidental death, electrocution, drowning, injury, fire, and specified weather events. Disease mortality is usually covered under a separate disease & illness policy. Blanket policies cover entire herds or flocks; specified animal policies cover individual high-value animals at agreed value.',
    whatCovers: ['Accidental death', 'Electrocution', 'Drowning', 'Fire', 'Specified weather events', 'Transit deaths (with transit cover)', 'Humane destruction when required'],
    whoNeeds: ['Dairy farmers with high-value milking cows', 'Beef farmers with quality breeding bulls', 'Sheep farmers with valuable stud rams', 'Deer farmers with elite velvet stags', 'Any farmer with individual animals worth $2,000+'],
    fromPrice: 'From $80/year',
    metaTitle: 'Livestock Mortality Cover NZ | Livestock Insurance — Compare & Get Quotes',
    metaDesc: 'Financial protection if your animals die from accidental causes, disease, or specified weather events. Free expert advice from licensed NZ rural insurance advisers.',
  },
  {
    slug: 'disease-illness',
    name: 'Disease & Illness Cover',
    icon: '🦠',
    shortDesc: 'Cover for financial losses when livestock suffer from notifiable diseases, illness outbreaks, or government-ordered culling.',
    description: 'Disease and illness cover compensates farmers for losses when livestock contract notifiable diseases or serious illnesses. This includes the cost of emergency treatment, forced culling, disposal, and loss of production. Mycoplasma bovis has highlighted the importance of disease cover for NZ dairy farmers. Cover may also include compensation for government-ordered culls.',
    whatCovers: ['Notifiable disease losses', 'Emergency veterinary treatment', 'Forced culling costs', 'Government-ordered destocking', 'Production losses (comprehensive policies)', 'Disposal and cleanup costs'],
    whoNeeds: ['Dairy farmers (Mycoplasma bovis risk)', 'Poultry farmers (avian influenza risk)', 'Pig farmers (disease outbreak risk)', 'Any farmer whose livelihood depends on flock/herd health'],
    fromPrice: 'From $100/year',
    metaTitle: 'Disease & Illness Cover NZ | Livestock Insurance — Compare & Get Quotes',
    metaDesc: 'Cover for financial losses when livestock suffer from notifiable diseases, illness outbreaks, or government-ordered culling. Free expert advice from licensed NZ rural insurance advisers.',
  },
  {
    slug: 'transit-insurance',
    name: 'Livestock Transit Insurance',
    icon: '🚛',
    shortDesc: 'Cover for animals during transport — saleyards, between properties, to processing plants, and at agricultural events.',
    description: 'Livestock transit insurance covers your animals from the moment they leave your property until they arrive at their destination. This includes transport to saleyards, processing plants, other farms, agricultural shows, and stud sales. Transit deaths and injuries are more common than most farmers realise — vehicle accidents, heat stress, loading injuries, and equipment failures all pose risks.',
    whatCovers: ['Road transport accidents', 'Loading/unloading injuries', 'Deaths during transit', 'Cover at saleyards and events', 'Theft from trucks or yards', 'Cover between properties'],
    whoNeeds: ['Farmers who regularly send stock to sales', 'Stud breeders who show animals', 'Deer farmers who transport velvet stags', 'Anyone moving high-value animals by road or rail'],
    fromPrice: 'From $50/year',
    metaTitle: 'Livestock Transit Insurance NZ | Livestock Insurance — Compare & Get Quotes',
    metaDesc: 'Cover for animals during transport — saleyards, between properties, to processing plants, and at agricultural events. Free expert advice from licensed NZ rural insurance advisers.',
  },
  {
    slug: 'natural-disaster',
    name: 'Natural Disaster Cover',
    icon: '🌊',
    shortDesc: 'Coverage for livestock losses from floods, cyclones, earthquakes, drought and other natural events.',
    description: "Cyclone Gabrielle in 2023 killed thousands of NZ livestock and highlighted the importance of natural disaster cover. Standard livestock mortality policies often exclude weather events — natural disaster cover is a specific add-on that compensates farmers for stock lost to floods, cyclone, earthquake, extreme snowfall, and landslide. New Zealand's geography makes this cover particularly important.",
    whatCovers: ['Flood and inundation losses', 'Cyclone and severe storm deaths', 'Snowstorm and exposure losses', 'Landslide losses', 'Earthquake-related stock losses', 'Post-shearing exposure (sheep)'],
    whoNeeds: ['Farmers in flood-prone river valleys', "East Coast and Hawke's Bay sheep and cattle farmers", 'High country farmers exposed to snowstorms', 'Any NZ farmer — natural disasters affect all regions'],
    fromPrice: 'From $60/year',
    metaTitle: 'Natural Disaster Cover NZ | Livestock Insurance — Compare & Get Quotes',
    metaDesc: "Coverage for livestock losses from floods, cyclones, earthquakes, drought and other natural events. Free expert advice from licensed NZ rural insurance advisers.",
  },
  {
    slug: 'public-liability',
    name: 'Farm & Livestock Liability',
    icon: '⚖️',
    shortDesc: 'Protection if your livestock injure people, damage property, or escape onto roads causing accidents.',
    description: 'Farm and livestock liability cover protects you if your animals escape, cause road accidents, injure visitors, or damage neighbouring property. A single escaped bull causing a road accident can result in claims running into hundreds of thousands of dollars. Most farm pack policies include public liability, but standalone livestock liability cover is also available.',
    whatCovers: ['Livestock escaping and causing accidents', 'Injury to visitors or contractors', 'Damage to neighbouring property', 'Road accidents caused by escaped stock', 'Legal defence costs', 'Compensation for third-party claims'],
    whoNeeds: ['Farmers near main roads or highways', 'Farms with regular visitor or contractor access', 'Deer farmers (deer are fast movers)', 'Any farmer with animals near unfenced boundaries'],
    fromPrice: 'From $120/year',
    metaTitle: 'Farm & Livestock Liability NZ | Livestock Insurance — Compare & Get Quotes',
    metaDesc: 'Protection if your livestock injure people, damage property, or escape onto roads causing accidents. Free expert advice from licensed NZ rural insurance advisers.',
  },
  {
    slug: 'theft-cover',
    name: 'Livestock Theft Cover',
    icon: '🔒',
    shortDesc: 'Protection against the theft of livestock from your property — increasingly important as stock theft rises in NZ.',
    description: 'Livestock theft is an increasing problem in New Zealand, with organised rustling operations targeting sheep and cattle in remote areas. A single theft incident can involve dozens of animals worth tens of thousands of dollars. Livestock theft cover compensates you for the market or agreed value of stolen animals, and may include investigation costs.',
    whatCovers: ['Theft of animals from your property', 'Organised rustling operations', 'Missing animals confirmed as theft', 'Investigation and recovery costs', 'High-value stud animal theft'],
    whoNeeds: ['Farmers in remote or boundary-heavy properties', 'Stud breeders with high-value animals', 'Sheep and cattle farmers in known theft-risk areas', 'Anyone with animals that are difficult to monitor'],
    fromPrice: 'From $50/year',
    metaTitle: 'Livestock Theft Cover NZ | Livestock Insurance — Compare & Get Quotes',
    metaDesc: 'Protection against the theft of livestock from your property — increasingly important as stock theft rises in NZ. Free expert advice from licensed NZ rural insurance advisers.',
  },
];
