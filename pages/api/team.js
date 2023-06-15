/*// rootdirectory/pages/api/kamsadata.js*/
export default function handler(req, res) {
  const team = [
    { name: "Bukunda Hillary", id: 1, position: "Head of Accounts" },
    { name: "Brian Tamale Buyt", id: 2, position: "Head of Human Resource" },
    { name: "Kyatuhaire Patra", id: 3, position: "Head of Public Relations" },
  ];

  const services = [
    { name: "Advisory Services and Policy Development", 
      id: 1, 
    },
    { name: "Grant Management and Capacity Building:", 
      id: 2, 
    },
    { name: "Training and Capacity Building", 
      id: 3, 
    },
    { name: "Financial Planning and Management", 
      id: 4, 
    }
  ];

  res.status(200).json(team, services);
}
