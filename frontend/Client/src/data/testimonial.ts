export interface testimonial {
  id: string;
  name: string;
  profession: string;
  review: string;
  rating: string;
  desc: string;
}

export const testimonialData: testimonial[] = [
  {
    id: "testimonial1",
    name: "Raj Mehta",
    profession: "CA",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: "3.5",
    desc: "He provided great insights into financial planning and compliance."
  },
  {
    id: "testimonial2",
    name: "Sneha Kapoor",
    profession: "Software Engineer",
    review: "Amazing experience, very helpful and knowledgeable.",
    rating: "4.2",
    desc: "Helped us automate key processes and improve code quality."
  },
  {
    id: "testimonial3",
    name: "Amit Shah",
    profession: "Entrepreneur",
    review: "Very satisfied with the consulting service.",
    rating: "4.8",
    desc: "Provided clear direction and market insights for our startup."
  },
  {
    id: "testimonial4",
    name: "Priya Nair",
    profession: "Graphic Designer",
    review: "Supportive and professional throughout the project.",
    rating: "4.0",
    desc: "Gave detailed feedback that helped enhance my creative work."
  },
  {
    id: "testimonial5",
    name: "Rohan Singh",
    profession: "Marketing Manager",
    review: "Insightful and actionable advice received.",
    rating: "4.6",
    desc: "His suggestions significantly boosted our campaign performance."
  },
  {
    id: "testimonial6",
    name: "Neha Verma",
    profession: "UI/UX Designer",
    review: "Collaborating was smooth and productive.",
    rating: "4.3",
    desc: "Understood user needs and improved overall design flow."
  },
  {
    id: "testimonial7",
    name: "Manish Kumar",
    profession: "HR Consultant",
    review: "Reliable, timely, and easy to work with.",
    rating: "4.1",
    desc: "Provided valuable input for organizational development."
  },
  {
    id: "testimonial8",
    name: "Anjali Das",
    profession: "Data Analyst",
    review: "Delivered exceptional results under tight deadlines.",
    rating: "4.7",
    desc: "Her insights helped us make data-driven decisions quickly."
  }
];
