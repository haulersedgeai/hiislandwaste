export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  shortQuote: string;
  rating: 5;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Valerie V.",
    location: "Hilo, HI",
    rating: 5,
    shortQuote: "We could not have asked for a better team.",
    quote:
      "We used Naea and his crew on numerous occasions and we could not have asked for a better team. Very dependable, skilled, respectful and very professional. Arrived on time. They got the job done in no time and even cleaned up the area and left no trash residue. We highly recommend Naea and his crew!",
    service: "Repeat residential cleanouts",
  },
  {
    name: "Todd Y.",
    location: "Southwest, NV",
    rating: 5,
    shortQuote: "Arrived on time and in and out in less than an hour.",
    quote:
      "Used them for a clean out prior to putting a house up for sale. Very responsive and gave an unbeatable quote. The team arrived on-time and was in and out of our house in less than an hour. They were all professional and safely handled all the larger items being very strategic in how they moved the items out of the house and packing in the dumpster to maximize space. I was extremely satisfied with Hawaii Island Waste and definitely recommend them.",
    service: "Pre-sale property cleanout",
  },
  {
    name: "Kamreyn M.",
    location: "Hilo, HI",
    rating: 5,
    shortQuote: "Smooth, efficient, and completely stress-free.",
    quote:
      "Hawaii Island Waste – Junk Removal provided outstanding service. They arrived on time and quickly removed multiple beds and a large amount of debris from my property. The entire process was smooth, efficient, and completely stress-free, leaving my home noticeably more organized and clutter-free. Naea and his team were incredibly professional and maintained excellent communication before, during, and after the service. I highly recommend their services.",
    service: "Residential junk removal",
  },
  {
    name: "Donn U.",
    location: "La Quinta, CA",
    rating: 5,
    shortQuote: "Amazing, quick, and worth every penny.",
    quote:
      "I used them to haul away residential junk accumulated for 40 years at my dad's house in Hilo. Since I was only in Hawaii for a week there are only so many trips I could make to the rubbish dump with my dad. I finally convinced my dad to hire professionals for the big items like old beds, large tree stumps in the backyard, and heavy metal debris. The team was amazing, quick, and worth every penny.",
    service: "Family property cleanout",
  },
];
