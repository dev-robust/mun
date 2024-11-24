import React from 'react';

const committees = [
  {
    name: 'UNSC',
    agenda: 'Global security and conflict resolution',
    chairperson: {
      name: 'John Doe',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
    },
    viceChairpersons: [
      { name: 'Alice Smith', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Bob Johnson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    rapporteurs: [
      { name: 'David Lee', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Emma Brown', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Sophia Wilson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    members: ['Liam Martinez', 'Olivia Taylor', 'James Anderson', 'Charlotte Thomas'],
  },
  {
    name: 'UNGA',
    agenda: 'International peace and cooperation',
    chairperson: {
      name: 'Emily Davis',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
    },
    viceChairpersons: [
      { name: 'Michael Brown', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Sophia Wilson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    rapporteurs: [
      { name: 'Daniel Thomas', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Emma Moore', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Olivia Anderson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    members: ['Elijah Scott', 'William Gonzalez', 'Charlotte White', 'Jessica Garcia'],
  },
  {
    name: 'UNSC',
    agenda: 'Global security and conflict resolution',
    chairperson: {
      name: 'John Doe',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
    },
    viceChairpersons: [
      { name: 'Alice Smith', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Bob Johnson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    rapporteurs: [
      { name: 'David Lee', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Emma Brown', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Sophia Wilson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    members: ['Liam Martinez', 'Olivia Taylor', 'James Anderson', 'Charlotte Thomas'],
  },
  {
    name: 'UNGA',
    agenda: 'International peace and cooperation',
    chairperson: {
      name: 'Emily Davis',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
    },
    viceChairpersons: [
      { name: 'Michael Brown', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Sophia Wilson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    rapporteurs: [
      { name: 'Daniel Thomas', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Emma Moore', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Olivia Anderson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    members: ['Elijah Scott', 'William Gonzalez', 'Charlotte White', 'Jessica Garcia'],
  },
  {
    name: 'UNSC',
    agenda: 'Global security and conflict resolution',
    chairperson: {
      name: 'John Doe',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
    },
    viceChairpersons: [
      { name: 'Alice Smith', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Bob Johnson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    rapporteurs: [
      { name: 'David Lee', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Emma Brown', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Sophia Wilson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    members: ['Liam Martinez', 'Olivia Taylor', 'James Anderson', 'Charlotte Thomas'],
  },
  {
    name: 'UNGA',
    agenda: 'International peace and cooperation',
    chairperson: {
      name: 'Emily Davis',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
    },
    viceChairpersons: [
      { name: 'Michael Brown', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Sophia Wilson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    rapporteurs: [
      { name: 'Daniel Thomas', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Emma Moore', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
      { name: 'Olivia Anderson', image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg' },
    ],
    members: ['Elijah Scott', 'William Gonzalez', 'Charlotte White', 'Jessica Garcia'],
  },
  // Repeat for other committees...
];

const Committees = () => {
    return (
        <div className="p-6 space-y-6">
          {committees.map((committee) => (
            <div
              key={committee.name}
              className="p-6 border border-gray-300 rounded-lg shadow-lg space-y-4"
            >
              <h2 className="text-2xl font-bold">{committee.name}</h2>
              <p className="italic">{committee.agenda}</p>
    
              {/* Chairperson Section */}
              <div className="flex items-center space-x-4">
                <img
                  src={committee.chairperson.image}
                  alt={committee.chairperson.name}
                  className="w-16 h-16 object-cover rounded-full border border-gray-400"
                />
                <div>
                  <h3 className="font-semibold">Chairperson:</h3>
                  <p>{committee.chairperson.name}</p>
                </div>
              </div>
    
              {/* Vice-Chairpersons Section */}
              <div>
                <h3 className="text-lg font-semibold mt-4">Vice-Chairpersons:</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {committee.viceChairpersons.map((viceChair) => (
                    <div
                      key={viceChair.name}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={viceChair.image}
                        alt={viceChair.name}
                        className="w-12 h-12 object-cover rounded-full border border-gray-400"
                      />
                      <p>{viceChair.name}</p>
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Rapporteurs Section */}
              <div>
                <h3 className="text-lg font-semibold mt-4">Rapporteurs:</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {committee.rapporteurs.map((rapporteur) => (
                    <div
                      key={rapporteur.name}
                      className="flex items-center space-x-4"
                    >
                      <img
                        src={rapporteur.image}
                        alt={rapporteur.name}
                        className="w-12 h-12 object-cover rounded-full border border-gray-400"
                      />
                      <p>{rapporteur.name}</p>
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Members Section */}
              <div>
                <h3 className="text-lg font-semibold mt-4">Members:</h3>
                <ul className="list-disc list-inside mt-2">
                  {committee.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      );
    };

export default Committees;
