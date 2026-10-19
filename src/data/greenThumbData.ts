export interface PlantItem {
  id: string;
  name: string;
  botanicalName?: string;
  category: 'Palms & Cycads' | 'Specimen Trees' | 'Flowering Shrubs' | 'Perennials & Annuals' | 'Houseplants & leafjoy®' | 'Pottery & Accents';
  light: 'Full Sun' | 'Partial Shade' | 'Bright Indirect' | 'Low to Medium';
  water: 'Moderate' | 'Drought Tolerant' | 'Regular / Moist' | 'Low';
  hardiness: string;
  description: string;
  image: string;
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  heroImage: string;
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  specs: { label: string; value: string }[];
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  title: string;
  neighborhood: string;
  completionDate: string;
  lotSize: string;
  beforeImage: string;
  afterImage: string;
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  highlightStats: { label: string; value: string }[];
  plantSchedule: { plant: string; count: string; placement: string }[];
  materialPalette: string[];
}

export const SITE_METADATA = {
  name: "Green Thumb Nursery",
  tagline: "Premier Nursery & Master Landscaping",
  phone: "(813) 884-3797",
  rawPhone: "8138843797",
  email: "info@greenthumbnursery.com",
  address: "6913 Sheldon Rd, Tampa, FL 33615",
  license: "FL Lic. #LC-1953 • Certified Pest Operator • Certified Irrigation Contractor",
  established: 1953,
  hours: [
    { days: "Monday – Saturday", time: "8:00 AM – 5:00 PM" },
    { days: "Sunday", time: "9:00 AM – 5:00 PM" },
  ],
  serviceAreas: [
    "South Tampa",
    "Davis Islands",
    "Hyde Park",
    "Westchase",
    "Carrollwood",
    "Avila & Cheval",
    "Palma Ceia",
    "Culbreath Isles",
    "Town 'n' Country",
    "St. Petersburg",
    "Clearwater",
  ],
  logoUrl: "https://irp.cdn-website.com//51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/green+thumb+adjusted+transparent-1920w.png",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "landscape-design",
    slug: "landscape-design",
    title: "Landscape Architecture & 3D Master Planning",
    tagline: "Turnkey outdoor living designed for Florida's subtropical climate",
    shortDesc: "Comprehensive architectural master plans with full 3D visual models, custom plant selection, micro-elevation grading, and lighting scenes.",
    fullDesc: "Since 1953, Green Thumb Nursery has transformed Tampa Bay properties into serene botanical sanctuaries. Our design-build process blends architectural precision with deep Florida horticultural science. Every plan considers sun exposure, soil alkalinity, salt-air tolerance, and seasonal growth patterns to ensure an enduring investment.",
    iconName: "Compass",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/ITC-HH-0030-bff0234c-06d37227-76bc53cc-1920w.jpg",
    deliverables: [
      "Precision 3D Photorealistic Landscape Renderings & Video Walkthroughs",
      "Full Florida-Friendly Plant Schedules & Canopy Elevation Drawings",
      "Laser-Guided Civil Grading & Drainage Topography Planning",
      "Architectural Low-Voltage 2700K Nightscape Layouts",
      "Permit-Ready Construction Documents & HOA Review Sets",
    ],
    process: [
      { step: "01", title: "Comprehensive Site & Soil Diagnostic", desc: "We evaluate soil pH, sunlight azimuth, existing root structures, and drainage slopes on your property." },
      { step: "02", title: "Master 3D Conceptualization", desc: "Collaborate with our senior landscape architects to walk through your virtual 3D property transformation." },
      { step: "03", title: "Botanical Specimen Tagging", desc: "Visit our 6913 Sheldon Rd nursery to hand-tag specimen palms, mature trees, and artisanal pottery for your installation." },
      { step: "04", title: "Precision Design-Build Execution", desc: "Our licensed, in-house crews manage structural excavation, hardscaping, irrigation, and specimen planting." },
    ],
    specs: [
      { label: "Design Software", value: "CAD & 3D Lumion / VIP 3D" },
      { label: "Warranty", value: "1-Year Full Nursery Plant Warranty" },
      { label: "Typical Timeline", value: "3 – 6 Weeks From Master Plan Approval" },
    ],
  },
  {
    id: "hardscaping",
    slug: "hardscaping",
    title: "Artisanal Natural Stone & Travertine Hardscaping",
    tagline: "Cool-touch stone, architectural retaining walls, and custom terraces",
    shortDesc: "Master stone masonry specializing in Florida cool-touch travertine, permeable concrete pavers, structural retaining walls, and flush pool coping.",
    fullDesc: "Florida heat demands hardscaping that remains comfortable underfoot year-round while resisting salt air and torrential afternoon rains. We engineer crushed limestone compacted sub-bases with integrated geo-textile barriers and polymeric joint stabilization to prevent shifting, pooling, or weed intrusion for decades.",
    iconName: "Layers",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+13.jpg",
    deliverables: [
      "Ivory & Walnut Honed Travertine Pool Decks (-18°F Cool-Touch)",
      "Permeable Interlocking Pavers with Polymeric Sand Joint Lock",
      "Engineered Structural Retaining Walls & Tiered Planting Terraces",
      "Custom Natural Stone Step Risers & Outdoor Fire Tables",
      "Sub-Surface French Drains & Slot Drains Integrated Seamlessly",
    ],
    process: [
      { step: "01", title: "Sub-Base Compaction", desc: "6-inch crushed Florida limestone compacted to 98% Proctor density prevents settling." },
      { step: "02", title: "Laser Leveling & Coping", desc: "Precision pitch calculations guarantee 100% water shedding away from structural foundations." },
      { step: "03", title: "Stone Laying & Artistry", desc: "Hand-cut natural stone installed with tight tolerances and seamless edge detailing." },
      { step: "04", title: "Polymer Seal & Finish", desc: "Commercial-grade siloxane sealer protects against UV degradation, mold, and staining." },
    ],
    specs: [
      { label: "Primary Materials", value: "Turkish Travertine, Shellstone, Belgard Pavers" },
      { label: "Structural Guarantee", value: "10-Year Workmanship Warranty" },
      { label: "Thermal Rating", value: "-18°F Cooler Than Standard Poured Concrete" },
    ],
  },
  {
    id: "nursery-garden-center",
    slug: "nursery-garden-center",
    title: "Retail Nursery & Specimen Plant Garden Center",
    tagline: "Over 5 acres of Florida-acclimatized flora on Sheldon Rd since 1953",
    shortDesc: "Explore Tampa's most expansive collection of specimen palms, flowering topiaries, certified Proven Winners®, and imported Spanish pottery.",
    fullDesc: "Unlike big-box stores selling greenhouse-pampered plants that scorch in Florida sunlight, our plants are acclimated directly to Tampa Bay weather on Sheldon Road. Our horticulturists curate exotic palms, citrus trees, flowering bougainvillea, drought-tolerant perennials, and rare indoor foliage.",
    iconName: "Sprout",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/Topiary+Flowers+Sails-1920w.jpg",
    deliverables: [
      "Acclimatized Specimen Palms (Bismarck, Foxtail, Christmas, Sylvester)",
      "Flowering Evergreen Shrubs & Living Privacy Screens (Podocarpus, Clusia)",
      "Official Proven Winners® Partner & leafjoy® Indoor Houseplant Center",
      "Imported Hand-Glazed Spanish & Italian Ceramic Pottery",
      "Free In-Store Diagnostic Plant Clinic & Soil Testing",
    ],
    process: [
      { step: "01", title: "Direct Grower Sourcing", desc: "Hand-selected from premier Florida farms with certified disease-free root structures." },
      { step: "02", title: "On-Site Acclimatization", desc: "Plants thrive in natural Tampa sunlight and rain before being offered to clients." },
      { step: "03", title: "White-Glove Delivery & Staging", desc: "Full delivery and mechanical crane placement available for multi-ton specimen trees." },
    ],
    specs: [
      { label: "Campus Footprint", value: "6913 Sheldon Rd • 5+ Acres of Display" },
      { label: "Stock Breadth", value: "1,200+ Active Botanical Varieties" },
      { label: "In-House Specialists", value: "Florida Certified Horticulturists On Staff" },
    ],
  },
  {
    id: "smart-irrigation",
    slug: "smart-irrigation",
    title: "Smart Irrigation Systems, Water Conservation & Repairs",
    tagline: "Precision hydro-zoning compliant with Hillsborough County water codes",
    shortDesc: "WiFi-enabled smart controllers, weather rain sensors, low-volume drip lines, and rapid diagnostic repairs that cut water bills by up to 45%.",
    fullDesc: "Watering restrictions in Tampa and Hillsborough County require precise timing and zero waste. Our irrigation specialists design zoned micro-drip networks that direct every drop directly to root zones without misting loss or hardscape overspray.",
    iconName: "Droplets",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/11New.jpg",
    deliverables: [
      "Hunter & Rachio Smart Weather-Sensing WiFi Controllers",
      "Low-Volume Pressure-Compensating Drip Irrigation for Beds",
      "Rotary MP Rotator High-Efficiency Sprinkler Heads",
      "Rain Sensor Calibrations & Code Compliance Audits",
      "Fast Leak Detection, Valve Rebuilding & Emergency Wire Tracing",
    ],
    process: [
      { step: "01", title: "Pressure & Flow Rate Audit", desc: "We test static PSI and GPM at your backflow preventer to optimize zone counts." },
      { step: "02", title: "Botanical Hydro-Zoning", desc: "Drought-tolerant palms are zoned separately from thirsty annual beds to prevent root rot." },
      { step: "03", title: "Smart Calibration", desc: "Mobile app setup with hyper-local weather tracking automatically suspends cycles on rainy afternoons." },
    ],
    specs: [
      { label: "Water Savings", value: "35% to 50% Reduction vs. Legacy Timers" },
      { label: "Code Adherence", value: "100% Hillsborough County Water Restriction Compliant" },
    ],
  },
  {
    id: "outdoor-living",
    slug: "outdoor-living",
    title: "Outdoor Kitchens, Fire Features & Living Sanctuaries",
    tagline: "Luxury entertainment environments built to withstand Florida weather",
    shortDesc: "Marine-grade 316 stainless steel outdoor kitchens, custom linear gas fire features, pergolas, and natural stone seating walls.",
    fullDesc: "Extend your interior luxury outside. We design and construct custom culinary stations, built-in ceramic kamado grills, undercounter beverage refrigerators, and automated louvered pergolas that transform your backyard into an all-season resort.",
    iconName: "Flame",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+10.jpg",
    deliverables: [
      "Custom Concrete Block Kitchen Islands with Granite or Dekton Countertops",
      "Marine-Grade 316 Stainless Steel Grills, Ice Makers & Storage Drawers",
      "Gas & Lava Rock Fire Pits with Remote Ignition Systems",
      "Custom Architectural Water Bowls & Cascading Fountain Walls",
      "Integrated Audio/Visual & Low-Voltage Downlighting",
    ],
    process: [
      { step: "01", title: "Culinary Workflow Layout", desc: "Position prep, cooking, and refrigeration zones ergonomically relative to indoor entrances." },
      { step: "02", title: "Utility Trenching & Gas Hookups", desc: "Licensed plumbing and electrical feeds engineered for safe, code-compliant outdoor operation." },
      { step: "03", title: "Hand-Crafted Stone Veneer", desc: "Clad island structures in matching travertine, stacked quartz, or smooth coastal stucco." },
    ],
    specs: [
      { label: "Structure Material", value: "Steel Reinforced CMU Block & Concrete" },
      { label: "Appliance Grade", value: "316 Marine-Grade Stainless Steel" },
    ],
  },
  {
    id: "event-rentals",
    slug: "event-rentals",
    title: "Luxury Event Plant, Tree & Pottery Rentals",
    tagline: "Breathtaking living greenery for weddings, galas, and corporate shoots",
    shortDesc: "Transform corporate galas, private estate weddings, and film sets with mature potted palms, architectural topiaries, and European ceramic pottery.",
    fullDesc: "Elevate your special occasion with live botanical artistry. Green Thumb Nursery provides full turnkey delivery, placement, and strike for weddings, private estate soirees, commercial shoots, and luxury galas across the Tampa Bay region.",
    iconName: "PartyPopper",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/IMG_1085-640w.jpg",
    deliverables: [
      "8–14ft Specimen Potted Palms (Christmas, Areca, Fishtail)",
      "Sculpted Eugenia & Boxwood Topiaries in Handcrafted Planters",
      "Spanish & Italian Glazed Terracotta Planters & Urns",
      "Foliage Stage Dividers, Green Backdrops & Red Carpet Enhancements",
      "Complete Delivery, Setup, and Night Strike Service",
    ],
    process: [
      { step: "01", title: "Curated Catalog Selection", desc: "Review our rental inventory to match the aesthetic theme and color palette of your event." },
      { step: "02", title: "Site Logistics & Timetable", desc: "Coordinate load-in timing with venue directors and event planners." },
      { step: "03", title: "Seamless Strike", desc: "Our team removes all planters promptly post-event, leaving the venue pristine." },
    ],
    specs: [
      { label: "Rental Window", value: "Single Day to Multi-Week Engagements" },
      { label: "Coverage", value: "All Tampa, St. Pete & Sarasota Venues" },
    ],
  },
];

export const PORTFOLIO_PROJECTS: ProjectCaseStudy[] = [
  {
    id: "davis-islands-estate",
    slug: "davis-islands-waterfront-terrace",
    title: "Davis Islands Waterfront Estate Sanctuary",
    neighborhood: "Davis Islands, Tampa",
    completionDate: "November 2025",
    lotSize: "0.68 Acres",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/1.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After1.jpg",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After1.jpg",
    gallery: [
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After1.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After2.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+8.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/11New.jpg",
    ],
    challenge: "The homeowners inherited an overgrown lawn with chronic tidal soil saturation, decaying wood decking, and zero functional privacy from neighboring boats.",
    solution: "We engineered laser-graded subsurface drainage tied to coastal overflow basins, installed 2,400 sq.ft. of honed French travertine, and planted mature multi-trunk Sylvester palms and dense Podocarpus privacy hedging.",
    highlightStats: [
      { label: "Stormwater Drainage", value: "100% Zero Puddling" },
      { label: "Surface Temperature", value: "-18°F Cool-Touch" },
      { label: "Appraisal Value Lift", value: "+32%" },
    ],
    plantSchedule: [
      { plant: "Sylvester Date Palm (Specimen)", count: "3", placement: "Poolside focal points" },
      { plant: "Podocarpus Maki Hedge", count: "45", placement: "Perimeter privacy border" },
      { plant: "Variegated Arboricola", count: "30", placement: "Foundation layering" },
      { plant: "Blue Agapanthus & White Pentas", count: "80", placement: "Accent beds" },
    ],
    materialPalette: ["Ivory French Pattern Travertine", "Honed Bullnose Coping", "Polymeric Sand Joints", "FX Luminaire 2700K Brass Uplights"],
  },
  {
    id: "south-tampa-villa",
    slug: "south-tampa-modern-botanical-courtyard",
    title: "South Tampa Modern Botanical Courtyard",
    neighborhood: "Palma Ceia / South Tampa",
    completionDate: "January 2026",
    lotSize: "0.42 Acres",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/2.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After2.jpg",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After2.jpg",
    gallery: [
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After2.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+9.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+10.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/13New.jpg",
    ],
    challenge: "High shade conditions under grandfather live oaks caused persistent sod die-off and soil erosion along the family's entertaining patio.",
    solution: "Replaced dying turf with shade-tolerant clusia borders, imported glazed ceramic water features from our nursery, and built a custom outdoor lounge with permeable shellstone pavers.",
    highlightStats: [
      { label: "Water Conservation", value: "42% Reduction" },
      { label: "Shade Tolerance", value: "100% Adapted Flora" },
      { label: "Entertainment Area", value: "+1,200 sq.ft." },
    ],
    plantSchedule: [
      { plant: "Rhapis Lady Palm", count: "8", placement: "Deep shade courtyard alcoves" },
      { plant: "Bird of Paradise (Specimen)", count: "6", placement: "Accent containers" },
      { plant: "Philodendron Xanadu", count: "35", placement: "Understory mass plantings" },
    ],
    materialPalette: ["Shellstone Natural Pavers", "Imported Spanish Cobalt Urns", "Hunter MP Rotator Drip System"],
  },
  {
    id: "westchase-estate-retreat",
    slug: "westchase-resort-oasis",
    title: "Westchase Luxury Outdoor Living Oasis",
    neighborhood: "Westchase, Tampa",
    completionDate: "February 2026",
    lotSize: "0.55 Acres",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/6New.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+12.jpg",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+12.jpg",
    gallery: [
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+12.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+13.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/Biel+After.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/7New.jpg",
    ],
    challenge: "A sterile builder-grade backyard lacked character, thermal comfort, and privacy for evening entertaining.",
    solution: "Designed an architectural master plan with an integrated gas fire lounge, specimen Foxtail palms, cascading water bowl spillways, and WiFi smart irrigation.",
    highlightStats: [
      { label: "Nightscape Ambiance", value: "2700K Warm Lighting" },
      { label: "Microclimate Cooling", value: "-8°F Ambient Drop" },
      { label: "Low Maintenance", value: "Drip Zoned 100%" },
    ],
    plantSchedule: [
      { plant: "Foxtail Palms (Triple Trunk)", count: "2", placement: "Backdrop framing" },
      { plant: "Crotons 'Petra' & 'Mammy'", count: "40", placement: "Tropical color accents" },
      { plant: "Gardenia 'Frostproof'", count: "18", placement: "Fragrant patio border" },
    ],
    materialPalette: ["Silver Travertine Pavers", "Stacked Slate Fire Feature", "Rachio 3 Smart Controller"],
  },
  {
    id: "avila-golf-manor",
    slug: "avila-golf-manor-grand-approach",
    title: "Avila Golf & Country Club Grand Approach",
    neighborhood: "Avila, Tampa",
    completionDate: "March 2026",
    lotSize: "1.1 Acres",
    beforeImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/8New.jpg",
    afterImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+8.jpg",
    heroImage: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+8.jpg",
    gallery: [
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+8.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/After+10.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/15New.jpg",
      "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/Resized_R5.jpg",
    ],
    challenge: "Outdated 1990s overgrown shrubbery hid the architectural frontage and degraded estate curb appeal.",
    solution: "Excavated old root systems, conditioned sandy soil with 20 tons of organic humic compost, and created a formal European-inspired Florida entryway with sculpted Eugenia topiaries and Bismarck palms.",
    highlightStats: [
      { label: "Curb Appeal Score", value: "99th Percentile" },
      { label: "Plant Longevity", value: "100% Acclimatized" },
      { label: "Lighting Coverage", value: "36 Fixture Nightscape" },
    ],
    plantSchedule: [
      { plant: "Bismarck Palm (Silvery Blue Specimen)", count: "1", placement: "Center island statement" },
      { plant: "Eugenia 3-Tier Topiaries", count: "6", placement: "Portico entry framing" },
      { plant: "Ixora Maui Red", count: "55", placement: "Formal hedge lines" },
    ],
    materialPalette: ["Belgard Holland Stone Pavers", "Cast Stone Planters", "20lb Humic Soil Conditioner"],
  },
];

export const PLANTS_DATA: PlantItem[] = [
  {
    id: "bismarck-palm",
    name: "Bismarck Palm",
    botanicalName: "Bismarckia nobilis",
    category: "Palms & Cycads",
    light: "Full Sun",
    water: "Drought Tolerant",
    hardiness: "Zones 9B–11",
    description: "An awe-inspiring specimen palm with striking steel-blue fan fronds. Dramatic architectural statement plant that thrives in full Florida sunshine once established.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/bismarckpalm-1920w.jpg",
    featured: true,
  },
  {
    id: "christmas-palm",
    name: "Christmas Palm (Adonidia)",
    botanicalName: "Adonidia merrillii",
    category: "Palms & Cycads",
    light: "Full Sun",
    water: "Moderate",
    hardiness: "Zones 10A–11",
    description: "Slender, elegant palm that resembles a miniature Royal Palm. Produces bright crimson berry clusters in late autumn. Ideal for tight poolside corners and courtyard focal points.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/christmaspalm-1920w.jpg",
    featured: true,
  },
  {
    id: "foxtail-palm",
    name: "Foxtail Palm",
    botanicalName: "Wodyetia bifurcata",
    category: "Palms & Cycads",
    light: "Full Sun",
    water: "Moderate",
    hardiness: "Zones 10A–11",
    description: "Lush, bushy fronds resembling a fox's tail atop a smooth, self-cleaning columnar trunk. Highly salt tolerant and excellent for modern coastal architecture.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/foxtailpalm-1920w.jpg",
    featured: true,
  },
  {
    id: "areca-palm",
    name: "Areca Palm (Golden Cane)",
    botanicalName: "Dypsis lutescens",
    category: "Palms & Cycads",
    light: "Full Sun",
    water: "Regular / Moist",
    hardiness: "Zones 9B–11",
    description: "The gold standard for Florida living privacy screens. Dense clustering trunks with golden-green feathery canes that provide sound dampening and lush tropical seclusion.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/arecapalm-1920w.jpg",
    featured: false,
  },
  {
    id: "eugenia-topiary",
    name: "Eugenia 3-Tier Topiary",
    botanicalName: "Eugenia globulus",
    category: "Specimen Trees",
    light: "Full Sun",
    water: "Moderate",
    hardiness: "Zones 9B–11",
    description: "Artisanally hand-sculpted spiral and ball topiaries with glossy leaves that flush bronze-red with new growth. Adds immediate classical symmetry to luxury estate entrances.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/eugeniatopiarygroup-1920w.jpg",
    featured: true,
  },
  {
    id: "bottlebrush-tree",
    name: "Weeping Bottlebrush Tree",
    botanicalName: "Callistemon viminalis",
    category: "Specimen Trees",
    light: "Full Sun",
    water: "Drought Tolerant",
    hardiness: "Zones 9A–11",
    description: "Graceful weeping branches dripping with bright red cylindrical blooms that attract native Florida hummingbirds and butterflies. Extremely resilient to wind and summer rain.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/bottlebrushtree-1920w.jpg",
    featured: false,
  },
  {
    id: "silk-floss-tree",
    name: "Silk Floss Tree",
    botanicalName: "Ceiba speciosa",
    category: "Specimen Trees",
    light: "Full Sun",
    water: "Drought Tolerant",
    hardiness: "Zones 9B–11",
    description: "Showstopping specimen tree that erupts with gigantic hibiscus-like pink and white flowers every autumn. Unique green studded architectural trunk.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/silkflosstree-1920w.jpg",
    featured: false,
  },
  {
    id: "gardenia-frostproof",
    name: "Gardenia 'Frostproof'",
    botanicalName: "Gardenia jasminoides",
    category: "Flowering Shrubs",
    light: "Full Sun",
    water: "Regular / Moist",
    hardiness: "Zones 8–11",
    description: "Intensely fragrant milky-white double blossoms that perfumed outdoor living patios. Bred specifically for enhanced pest resistance and reliable bud set in Florida.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/gardeniafrostproof-1920w.jpeg",
    featured: true,
  },
  {
    id: "alocasia-dragon-scale",
    name: "Mythic Dragon Scale Alocasia",
    botanicalName: "Alocasia baginda 'Dragon Scale'",
    category: "Houseplants & leafjoy®",
    light: "Bright Indirect",
    water: "Moderate",
    hardiness: "Indoor Specimen",
    description: "Official Proven Winners® leafjoy® collection. Thick, corrugated foliage resembling mythical dragon armor with emerald veins. Extraordinary luxury interior plant.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/anthurium-1920w.jpeg",
    featured: true,
  },
  {
    id: "caladium-fancy",
    name: "Florida Heart Caladium",
    botanicalName: "Caladium bicolor",
    category: "Perennials & Annuals",
    light: "Partial Shade",
    water: "Regular / Moist",
    hardiness: "Zones 9–11",
    description: "Translucent heart-shaped leaves boasting electric hot-pink centers, white speckling, and emerald margins. Illuminates shady garden understories all summer long.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/CrownofThornsRedSingleShot-1920w.jpg",
    featured: false,
  },
  {
    id: "rhapis-lady-palm",
    name: "Rhapis Lady Palm",
    botanicalName: "Rhapis excelsa",
    category: "Palms & Cycads",
    light: "Partial Shade",
    water: "Moderate",
    hardiness: "Zones 9A–11",
    description: "The premier upscale understory palm. Multi-stemmed upright bamboo-like canes crowned with deeply ribbed glossy fan leaves. Superb in covered lanais and courtyards.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/rhapispalm-1920w.jpeg",
    featured: false,
  },
  {
    id: "croton-petra",
    name: "Croton 'Petra'",
    botanicalName: "Codiaeum variegatum",
    category: "Flowering Shrubs",
    light: "Full Sun",
    water: "Moderate",
    hardiness: "Zones 10A–11",
    description: "Bold tropical colors of fiery orange, sunny yellow, scarlet, and deep forest green. Provides permanent chromatic energy that never fades with seasonal cycles.",
    image: "https://irp.cdn-website.com/51ee49f2cc3f42209af38d68c845ab6e/dms3rep/multi/opt/viburnumodoratissimum-1920w.jpeg",
    featured: false,
  },
];

export const GARDENING_TIPS_ARTICLES = [
  {
    id: "summer-florida-lawn-care",
    title: "Summer Lawn Care & Pest Control in Tampa Bay",
    category: "Lawn & Agronomics",
    readTime: "5 min read",
    author: "Green Thumb Plant Clinic",
    summary: "How to identify sod webworms, chinch bugs, and white grubs, and adjust sprinkler cycles during our rainy season.",
    content: `Summer in Tampa brings daily 90°+ temperatures and sudden subtropical cloudbursts. 

1. Irrigation Water Regulations:
Both Hillsborough County and the City of Tampa enforce twice-per-week lawn watering schedules. Ensure your rain sensor is operational so your system automatically skips cycles during heavy thunderstorms. Lawns require 1/2 to 1 inch of water only when exhibiting wilt symptoms (such as blue-gray discoloration or folded blades).

2. Identifying Destructive Summer Pests:
- Sod Webworms: Feed overnight and scalp localized grass blades. Inspect grass thatch for bright green pellet excrement or small white moths rising when walking across the lawn.
- Chinch Bugs: Pierce St. Augustine grass blades and suck plant sap, creating dry yellow-brown patches that resemble drought stress.
- White Grub Worms: Feed on grass root systems. In severe cases, the sod can be lifted like carpet.

3. Seasonal Fertilization:
Use non-burning slow-release organics like Milorganite or Fertilome Classic to promote robust root density without causing aggressive vertical surge growth that invites fungal disease.`,
  },
  {
    id: "plant-care-acid-loving",
    title: "Caring for Acid-Loving Shrubs: Ixoras, Gardenias & Azaleas",
    category: "Horticulture",
    readTime: "4 min read",
    author: "Senior Horticulturist",
    summary: "Overcoming alkaline Florida sandy soil with chelated iron and sulfur to prevent chlorosis (leaf yellowing).",
    content: `Many of Tampa's favorite blooming shrubs—including Gardenias, Azaleas, Camellias, and Ixoras—require an acidic soil pH (5.0 to 6.0) to uptake essential micro-nutrients.

1. Recognizing Iron Chlorosis:
If your ixora or gardenia displays yellow leaves with stark dark-green veins, the plant is suffering from micronutrient lockup due to alkaline soil (often caused by concrete foundation leeching).

2. Treatment Protocols:
Apply granular soil sulfur or peat moss around the drip line twice annually, and supplement with liquid chelated iron (Ironite or Fertilome Liquid Iron) applied directly to foliage and soil.

3. Watering Best Practices:
Avoid overhead watering in the late afternoon. Water in the early morning at soil level to minimize leaf fungal spots.`,
  },
  {
    id: "indoor-leafjoy-guide",
    title: "Living Sanctuary: The Proven Winners® leafjoy® Guide",
    category: "Interior Design & Houseplants",
    readTime: "6 min read",
    author: "Green Thumb Botanical Team",
    summary: "Selecting high-light vs. low-light houseplants for modern home interiors, desks, and covered lanais.",
    content: `As an authorized carrier of Proven Winners® leafjoy® houseplants, Green Thumb Nursery curates varieties categorized by natural home micro-environments:

- Atrium Collection: High-light specimens for south- and west-facing sunlit rooms (e.g. Ficus Lyrata, Monsteras).
- Cocoon Collection: Low-light homebodies that thrive in interior offices, bedrooms, and north-facing alcoves (e.g. Alocasia Dragon Scale, Calatheas, ZZ Plants).
- Space-Saving Collection: Compact, sculptural foliage engineered for desks, floating shelves, and bathroom vanities.

Tip: Always plant in pots with active drainage holes and use a chunky, aerated soil blend containing perlite and orchid bark to prevent root rot.`,
  },
];

export const CRAFTSMANSHIP_PRINCIPLES = [
  {
    number: "01",
    title: "Tailored Master Architecture for Every Property",
    description: "We don't do cookie-cutter landscaping. Every blueprint is custom designed around your home's unique architectural lines, micro-elevations, sun angles, and lifestyle goals.",
    detail: "Precision CAD schematics, 3D daylight rendering, and site drainage engineering.",
  },
  {
    number: "02",
    title: "70+ Years of Florida Agronomic Science (Est. 1953)",
    description: "Florida's subtropical climate is unforgiving to imported, un-acclimatized plants. For seven decades, our family-owned nursery has tested and perfected plant survival in Tampa soil.",
    detail: "Custom organic compost blends, root stimulators, and soil pH optimization.",
  },
  {
    number: "03",
    title: "Nursery-Direct Specimen Hand-Selection",
    description: "Clients don't have to guess from catalog photos. Walk our 5-acre Sheldon Road nursery alongside your architect to personally hand-tag your specimen palms, topiaries, and pottery.",
    detail: "Over 1,200 active botanical varieties acclimatized to natural Tampa sunlight.",
  },
  {
    number: "04",
    title: "Turnkey In-House Craftsmanship & Communication",
    description: "From heavy civil excavation to micro-drip irrigation and finish masonry, we control the entire design-build process with licensed in-house crews and dedicated project managers.",
    detail: "Transparent milestone updates, daily photo check-ins, and zero subcontractor confusion.",
  },
  {
    number: "05",
    title: "Decade-Proof Hardscape & Water-Conserving Engineering",
    description: "We install heavy compacted 6-inch crushed limestone sub-bases, geogrid stabilization, and smart WiFi irrigation that cut water waste by up to 50% while preventing surface settling.",
    detail: "10-year structural warranty on hardscapes and 1-year nursery plant warranty.",
  },
];

export const PARALLAX_PHASES = [
  {
    phase: "Phase 01",
    title: "Sub-Surface Laser Grading & Stormwater Engineering",
    tagline: "The invisible foundation that protects your estate from tropical downpours",
    benchmark: "Laser-Guided Grade Slopes & High-Capacity Drainage",
    checklist: [
      "Sub-grade laser grading directing runoff safely away from structural foundations",
      "Perforated French drains and low-profile catchment basins with silt filtering",
      "20-ton organic humic soil amendment to replace sterile builder fill sand",
    ],
  },
  {
    phase: "Phase 02",
    title: "Artisanal Stone Masonry & Cool-Touch Travertine",
    tagline: "Enduring outdoor surfaces engineered for barefoot Florida living",
    benchmark: "6-Inch Compacted Limestone Sub-Base & Polymeric Sand Joints",
    checklist: [
      "Hand-selected Turkish travertine pavers that stay up to 18°F cooler under direct sun",
      "Laser-leveled coping and flush transitions to outdoor kitchens and pool decks",
      "Siloxane UV and moisture sealant preventing mold, efflorescence, and staining",
    ],
  },
  {
    phase: "Phase 03",
    title: "Specimen Flora & Low-Volume Micro-Drip Irrigation",
    tagline: "Hand-selected botanical specimens that thrive in Tampa Bay's coastal climate",
    benchmark: "Nursery-Acclimatized Palms & WiFi Weather Hydro-Zoning",
    checklist: [
      "Acclimatized specimen palms, flowering topiaries, and Florida-friendly native shrubs",
      "Pressure-compensating drip tubing delivering water directly to deep root structures",
      "Rachio / Hunter smart WiFi controllers automatically adjusting for Tampa rainfall",
    ],
  },
  {
    phase: "Phase 04",
    title: "Architectural 2700K Low-Voltage Nightscaping",
    tagline: "Illuminating your botanical sanctuary with warm, automated sunset scenes",
    benchmark: "Solid Cast Brass Fixtures & Astronomical Astronomical Timers",
    checklist: [
      "Subtle 2700K warm-white LED illumination highlighting specimen trunks and canopy silhouettes",
      "Soft step downlighting and path fixtures preventing glare while ensuring safe evening strolls",
      "Smart scene automation synchronized to astronomical local Tampa sunset cycles",
    ],
  },
];
