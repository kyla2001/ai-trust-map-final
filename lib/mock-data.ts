export const mockCountyData = [
  {
    name: "San Francisco County, CA",
    trustScore: 92,
    categoryScores: {
      crime: 88,
      health: 94,
      education: 95,
      economy: 91,
      environment: 90,
    },
  },
  {
    name: "King County, WA",
    trustScore: 89,
    categoryScores: {
      crime: 85,
      health: 92,
      education: 90,
      economy: 88,
      environment: 91,
    },
  },
  {
    name: "New York County, NY",
    trustScore: 87,
    categoryScores: {
      crime: 82,
      health: 90,
      education: 88,
      economy: 93,
      environment: 84,
    },
  },
  {
    name: "Travis County, TX",
    trustScore: 85,
    categoryScores: {
      crime: 80,
      health: 86,
      education: 87,
      economy: 89,
      environment: 82,
    },
  },
  {
    name: "Middlesex County, MA",
    trustScore: 84,
    categoryScores: {
      crime: 79,
      health: 89,
      education: 91,
      economy: 83,
      environment: 80,
    },
  },
  {
    name: "Cook County, IL",
    trustScore: 64,
    categoryScores: {
      crime: 58,
      health: 72,
      education: 68,
      economy: 66,
      environment: 62,
    },
  },
  {
    name: "McDowell County, WV",
    trustScore: 31,
    categoryScores: {
      crime: 35,
      health: 28,
      education: 30,
      economy: 25,
      environment: 38,
    },
  },
  {
    name: "Harlan County, KY",
    trustScore: 33,
    categoryScores: {
      crime: 38,
      health: 32,
      education: 29,
      economy: 27,
      environment: 40,
    },
  },
  {
    name: "Apache County, AZ",
    trustScore: 35,
    categoryScores: {
      crime: 40,
      health: 33,
      education: 32,
      economy: 30,
      environment: 42,
    },
  },
  {
    name: "Holmes County, MS",
    trustScore: 36,
    categoryScores: {
      crime: 42,
      health: 35,
      education: 33,
      economy: 31,
      environment: 39,
    },
  },
  {
    name: "Aleutians East Borough, AK",
    trustScore: 38,
    categoryScores: {
      crime: 45,
      health: 36,
      education: 35,
      economy: 32,
      environment: 43,
    },
  },
  // Generate 20 more random counties for the map
  ...Array.from({ length: 20 }, (_, i) => {
    const trustScore = Math.floor(Math.random() * 70) + 30
    return {
      name: `County ${i + 1}`,
      trustScore,
      categoryScores: {
        crime: Math.floor(Math.random() * 60) + 30,
        health: Math.floor(Math.random() * 60) + 30,
        education: Math.floor(Math.random() * 60) + 30,
        economy: Math.floor(Math.random() * 60) + 30,
        environment: Math.floor(Math.random() * 60) + 30,
      },
    }
  }),
]
