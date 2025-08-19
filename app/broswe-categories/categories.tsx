
import React from "react";

interface CardProps {
  icon: React.ReactNode; 
  title: string;
  isActive?: boolean; 

}

const Card: React.FC<CardProps> = ({ icon, title, isActive = false}) => {
  return (
    <div
      className={`flex flex-col items-center justify-around w-44 h-44 border rounded-lg cursor-pointer ${
        isActive ? "bg-red-500 text-white" : "bg-white text-black"
      } hover:bg-gray-500`}
    
    >
      <div className="text-2xl mb-2">{icon}</div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
};

export default Card;