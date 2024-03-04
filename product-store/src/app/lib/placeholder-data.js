const perfumes = [
  {
    url: "/perfumes/alfred-guzman-v6Rj0WB6F0I-unsplash-min.jpg",
    title: "L'Homme",
    brand: "L'Homme",
    gender: "M",
    rating: 89,
    price: 200,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-01"),
    id: "754dd585-2ef5-4461-86a3-6b91ee164cc8",
  },
  {
    url: "/perfumes/jeroen-den-otter-2b0JeJTEclQ-unsplash-min.jpg",
    title: "Bleu de chanel",
    brand: "Bleu de chanel",
    gender: "M",
    rating: 96,
    price: 400,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-02"),
    id: "ff781873-8e9f-4212-a815-0a5b56ca57d5",
  },
  {
    url: "/perfumes/laura-chouette-4sKdeIMiFEI-unsplash-min.jpg",
    title: "Coco",
    brand: "Coco",
    gender: "F",
    rating: 68,
    price: 500,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-03"),
    id: "7a07ebb4-b324-4b69-b614-e9bb6062b535",
  },
  {
    url: "/perfumes/marisa-garrido-3aql6Y9LKFo-unsplash-min.jpg",
    title: "Miss Dior",
    brand: "Miss Dior",
    gender: "F",
    rating: 87,
    price: 900,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-03"),
    id: "eb889012-7ed3-44f5-892a-ef827ad3b220",
  },
  {
    url: "/perfumes/laura-chouette-gbT2KAq1V5c-unsplash-min.jpg",
    title: "Versace",
    brand: "Versace",
    gender: "F",
    rating: 95,
    price: 800,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-04"),
    id: "baf89890-4b5f-44cd-ae1f-dd679f54e552",
  },
  {
    url: "/perfumes/vishal-banik-OhBmysUAjio-unsplash-min.jpg",
    title: "Jaguar",
    brand: "Jaguar",
    gender: "M",
    rating: 100,
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-05"),
    id: "f253c828-6ed3-4df6-b790-8abaddb04d74",
  },
  {
    url: "/perfumes/parth-natani-uqJdOfHGb-w-unsplash-min.jpg",
    title: "Park Avenue",
    brand: "Park Avenue",
    gender: "U",
    rating: 80,
    price: 300,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-06"),
    id: "e0105f8e-55f7-4fe8-8be8-484fae6645c8",
  },
  {
    url: "/perfumes/ali-bakhtiari-7ic3yF64FS8-unsplash-min.jpg",
    title: "Red Diamond",
    brand: "Red Diamond",
    gender: "M",
    rating: 99,
    price: 1700,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-07"),
    id: "d3b538a3-6dc9-4dc0-81b4-df0ff60946e3",
  },
  {
    url: "/perfumes/filip-baotic-tgqnnQfq6C8-unsplash-min.jpg",
    title: "Stronger with you",
    brand: "Stronger with you",
    gender: "U",
    rating: 53,
    price: 100,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-08"),
    id: "993cae6d-244a-490a-b2f9-97a3e49ecc7a",
  },
  {
    url: "/perfumes/gift-habeshaw-C1qrJ9i4EPc-unsplash-min.jpg",
    title: "Creed",
    brand: "Creed",
    gender: "U",
    rating: 77,
    price: 450,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-10"),
    id: "0a7a00dd-6a29-4a93-9730-66cb2e3e608e",
  },
  {
    url: "/perfumes/maxim-lozyanko-GxSiLG3UuUw-unsplash-min.jpg",
    title: "Goldea",
    brand: "Goldea",
    gender: "U",
    rating: 69,
    price: 770,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-11"),
    id: "a57456fc-586d-426b-bf6c-b418de5fa1fd",
  },
  {
    url: "/perfumes/sagar-sawant-civayXc2m9c-unsplash-min.jpg",
    title: "Ck be",
    brand: "Ck be",
    gender: "U",
    rating: 87,
    price: 430,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-12"),
    id: "582f0f9d-a4f1-4db5-9be6-7d257736fd0b",
  },
  {
    url: "/perfumes/taisiia-shestopal-t0HhXmX1kqU-unsplash-min.jpg",
    title: "Allure",
    brand: "Allure",
    gender: "F",
    rating: 82,
    price: 512,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aculpa",
    date: new Date("2022-12-13"),
    id: "95b883c6-7fcc-4b77-afa4-a2c6ba9f36ca",
  },
];

const defaultBrands = [
  "Stronger with you",
  "Creed",
  "Goldea",
  "Ck be",
  "Allure",
  "Red Diamond",
  "Park Avenue",
  "Jaguar",
  "Versace",
  "Coco",
];

const defaultGenders = ["M", "F", "U"];

module.exports = {
  perfumes,
  defaultBrands,
  defaultGenders,
};
