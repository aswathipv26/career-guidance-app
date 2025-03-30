import React, { useEffect, useState } from 'react';
import CollegeCard from '../../components/CollegeCard/CollegeCard';
import image1 from '../../assets/college-image1.jpeg';
import image2 from '../../assets/college-image2.jpeg';
import image3 from '../../assets/college-image3.jpeg';
import './CollegeListPage.css';

function CollegeListPage() {
    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        const selectColleges = [
            {id: 1, name: "ABC University", location: "New York", ranking: 5, image: image1},
            {id: 2, name: "XYZ University", location: "California", ranking: 3, image: image2},
            {id: 3, name: "LMN University", location: "Texas", ranking: 8, image: image3},
        ];
        setColleges(selectColleges);
    }, []);

  return (
    <div className='college-container'>
        <h2>College List</h2>
        <div className='college-list'>
            {colleges.map((college) => (
               <CollegeCard key={college.id} college={college}/>
            ))}

        </div>
    </div>
  );
};

export default CollegeListPage;
