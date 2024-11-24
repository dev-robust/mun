import React from "react";
import CommitteeCard from "../components/CommitteeCard";
const committees = [
    {
      name: 'UNSC',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
      agenda: 'Global security and conflict resolution',
    },
    {
      name: 'UNGA',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
      agenda: 'International peace and cooperation',
    },
    {
      name: 'WHO',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
      agenda: 'Health policies and global health issues',
    },
    {
      name: 'UNHRC',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
      agenda: 'Human rights and freedoms',
    },
    {
      name: 'UNICEF',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
      agenda: 'Child welfare and education',
    },
    {
      name: 'UNESCO',
      image: 'https://i.pinimg.com/736x/5e/28/f1/5e28f185d13dc32f1c2e5fefc8afe9ad.jpg',
      agenda: 'Education, science, and culture',
    },
  ];
const Home = () => {
  return (
    <>
    <div className="container mx-auto py-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800">Home</h1>
      
    </div>
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {committees.map((committee) => (
        <CommitteeCard
          key={committee.name}
          name={committee.name}
          image={committee.image}
          agenda={committee.agenda}
        />
      ))}
    </div>
    </>
  );
};

export default Home;
