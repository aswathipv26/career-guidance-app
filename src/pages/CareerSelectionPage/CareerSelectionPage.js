import React, { useState } from 'react';
import { auth, db } from '../../firebase/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import CareerCard from '../../components/CareerCard/CareerCard';
import engineerimage from '../../assets/engineer-image.jpg';
import medicineimage from '../../assets/medicine-image.webp';
import lawimage from '../../assets/law-image.webp';
import businessimage from'../../assets/business-image.jpg';
import scienceimage from '../../assets/science-image.jpg';
import artsimage from '../../assets/arts.jpg';
import './CareerSelectionPage.css';

const careersData = [
    {id: 1, title: "Engineering", image: engineerimage},
    {id: 1, title: "Medicine", image: medicineimage},
    {id: 1, title: "Arts", image: artsimage},
    {id: 1, title: "Business", image: businessimage},
    {id: 1, title: "Law", image: lawimage},
    {id: 1, title: "Science", image: scienceimage}
]

const CareerSelectionPage = () => {

    const [selectedCareers, setSelectedCareers] = useState([]);
    const [loadiing, setLoading] = useState(false)

    const handleCareerSelect = (career) => {
        setSelectedCareers((prev) =>
            prev.includes(career)
        ? prev.filter((item) => item !== career) : [...prev, career]
        );
    };

    const saveCareerSelection = async () => {
        const user = auth.currentUser;
        if (!user) {
            alert("Please login in first");
            return;
        }

        setLoading(true);

        try {
            const userDoc = doc(db, "users", user.uid);
            await setDoc(userDoc, {selectedCareers}, {merge: true });
            alert("Career preference saved successfully")
        } catch (error) {
            console.error("Error saving careers:", error);
            alert("Error saving careers. Please try again")

        }
    }

  return (
    <div className='career-container'> 
      <h2>Select your Career Interests</h2> 
      <div className='career-list'>
        {careersData.map((career) => (
           <CareerCard 
             key={career.id}
             career={career}
             isSelected={selectedCareers.includes(career.title)}
             onSelect={() => handleCareerSelect(career.title)}
           />
        ))}
        </div>  
        <button onClick={saveCareerSelection} disabled={loadiing}>
            {loadiing ? "Saving..." : "Save Selection"}
            </button>  
    </div>
  );
};

export default CareerSelectionPage;
