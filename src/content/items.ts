export interface ItemCategory {
  title: string;
  emoji?: string;
  items: string[];
}

export const itemsWeTake: ItemCategory[] = [
  {
    title: "Furniture",
    items: ["Couches & Sofas", "Sectionals", "Sleeper Sofas", "Loveseats", "Recliners", "Bed Frames", "Headboards", "Mattresses & Box Springs", "Bunk Beds & Cribs", "Dressers & Armoires", "Dining Tables & Chairs", "Coffee Tables & End Tables", "Entertainment Centers", "Bookshelves", "Office Furniture", "Patio Furniture", "Wicker / Rattan Sets"],
  },
  {
    title: "Appliances",
    items: ["Refrigerators & Freezers", "Wine Coolers", "Washers & Dryers", "Stacked Laundry Units", "Ovens & Ranges", "Cooktops", "Dishwashers", "Trash Compactors", "Microwaves", "Window AC Units", "Mini-Split Indoor Units", "Dehumidifiers", "Water Heaters"],
  },
  {
    title: "Electronics (E-Waste)",
    items: ["Tube (CRT) TVs", "Flat Screen TVs", "Projection TVs", "Desktop Computers", "Laptops", "Computer Monitors", "Printers & Scanners", "Stereos & Speakers", "Game Consoles", "DVD / Blu-Ray Players", "Cables & Peripherals"],
  },
  {
    title: "Yard & Green Waste",
    items: ["Tree Branches & Trunks (cut down)", "Palm Fronds & Coconut Piles", "Brush & Hedge Clippings", "Vine Pulls", "Landscaping Debris", "Old Mulch & Sod", "Storm & Wind Debris", "Potting Soil & Pots"],
  },
  {
    title: "Construction & Renovation Debris",
    items: ["Drywall & Sheetrock", "Lumber & Plywood", "Old Cabinets & Countertops", "Tile & Flooring", "Carpet & Padding", "Roofing & Shingles", "Concrete & Masonry (volume limits)", "Old Windows & Doors", "Plumbing Fixtures", "Metal Scrap"],
  },
  {
    title: "Demolition Items",
    items: ["Sheds (Wood, Metal, Plastic)", "Decks & Lanais", "Fencing (Wood, Chain-Link, Vinyl)", "Hot Tubs & Spas", "Above-Ground Pools", "Pergolas & Gazebos", "Interior Walls (non-structural)", "Kitchen Tear-Outs", "Bathroom Tear-Outs"],
  },
  {
    title: "Household Junk",
    items: ["Boxes & Bags", "Clothing & Linens", "Toys & Sports Equipment", "Exercise Equipment", "Kitchenware & Dishes", "Glassware & Pots", "Books & Magazines", "Holiday Decor", "Tools (working or broken)"],
  },
  {
    title: "Specialty",
    items: ["Pianos (most types)", "Pool Tables", "Safes (residential)", "Office Cubicles", "Restaurant Equipment", "Retail Fixtures & Shelving", "Storage Unit Contents"],
  },
];

export const itemsWeDoNotTake = [
  "Liquid paint (oil-based or undried latex)",
  "Automotive fluids (gasoline, oil, transmission fluid, antifreeze)",
  "Liquid hazardous chemicals",
  "Medical / biohazard waste",
  "Asbestos (we can refer you to certified specialists)",
  "Live ammunition or explosives",
];
