export default function handler(req, res) {
    const services = [
      { name: "Advisory Services and Policy Development", id: 1 },
      { name: "Grant Management and Capacity Building:", id: 2 },
      { name: "Training and Capacity Building", id: 3 },
      { name: "Financial Planning and Management", id: 4 }
    ];
  
    res.status(200).json(services);
  }