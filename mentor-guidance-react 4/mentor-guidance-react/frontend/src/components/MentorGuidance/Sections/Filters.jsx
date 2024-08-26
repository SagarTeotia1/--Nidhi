import React, { useState, useEffect, useRef } from 'react';
import "../../../styles/mentor-guidance/filters.css";

const FilterSection = () => {
  const [filtersDropdownOpen, setFiltersDropdownOpen] = useState(false);

  //filters states 
  const [selectedFilters, setSelectedFilters] = useState({
    mentorship: '',
    sortBy: '',
    skills: [],
    availability: '',
    customDateRange: { start: '', end: '' },
    workExperience: 0,
    price: 0
  });

  //function to toggle the dropdowns 
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setFiltersDropdownOpen(!filtersDropdownOpen);
  };

  //select single option from the mentorship services and the sort by
  const selectSingleOption = (category, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [category]: value,
    });
  };

  //check box handler 
  const handleCheckboxChange = (skill) => {
    const updatedSkills = selectedFilters.skills.includes(skill)
      ? selectedFilters.skills.filter(s => s !== skill)
      : [...selectedFilters.skills, skill];
    setSelectedFilters({ ...selectedFilters, skills: updatedSkills });
  };


  //rangle handler
  const handleRangeChange = (event, category) => {
    const value = event.target.value;
    setSelectedFilters({ ...selectedFilters, [category]: value });
  };


  //date change handler 
  const handleDateChange = (event, dateType) => {
    setSelectedFilters({
      ...selectedFilters,
      customDateRange: {
        ...selectedFilters.customDateRange,
        [dateType]: event.target.value,
      },
    });
  };


  //clear all filters 
  const clearAllFilters = () => {
    setSelectedFilters({
      mentorship: '',
      sortBy: '',
      skills: [],
      availability: '',
      customDateRange: { start: '', end: '' },
      workExperience: 0,
      price: 0
    });
  };


  //apply all filters
  const applyAllFilters = () => {
    console.log("Applied filters:", selectedFilters);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFiltersDropdownOpen(false);
      }
    };

    // Close the dropdown when clicking outside of it
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  //toggle cross functionalities 
  function toggleCrossFilter(event) {
    const filter = event.currentTarget;
    filter.classList.toggle("cross-active"); // Toggle the 'cross-active' class
  }
  
  // Function to handle click on the "x" symbol
  function handleCrossClick(event) {
    const filter = event.currentTarget.parentElement;
    filter.classList.remove("cross-active"); 
    event.stopPropagation(); // Prevent the click event from bubbling up
  }




  return (
    <div className="filter-section">

      {/*Filters dropdown  */}
      <div
        className="filter-button filters"
        onClick={toggleDropdown}
      >
        Filters &#x25BC;
        {filtersDropdownOpen && (
          <div id="filters-dropdown" className="dropdown-menu" ref={dropdownRef} onClick={(e) => e.stopPropagation()}>

            {/**Mentorship */}
            <div className="filter-category">
              <label>Mentorship</label>
              <div id="filters-mentorship-dropdown">
                {['Courses', 'Practice', 'Competitions'].map(option => (
                  <div
                    key={option}
                    className={`dropdown-item ${selectedFilters.mentorship === option ? 'selected' : ''}`}
                    onClick={() => selectSingleOption('mentorship', option)}
                  >
                    <span className="checkmark">&#10003;</span> {option}
                  </div>
                ))}
              </div>
            </div>

            {/*Sort by */}
            <div className="filter-category">
              <label className="filter-title">Sort By</label>
              <div id="filters-sortby-dropdown">
                {['Rating (High to Low)', 'Work Experience (High to Low)', 'Price (High to Low)'].map(option => (
                  <div
                    key={option}
                    className={`dropdown-item ${selectedFilters.sortBy === option ? 'selected' : ''}`}
                    onClick={() => selectSingleOption('sortBy', option)}
                  >
                    <span className="checkmark">&#10003;</span> {option}
                  </div>
                ))}
              </div>
            </div>
            
            {/*Skills */}
            <div className="filter-category contains-checkbox">
              <label className="filter-title">Skills</label>
              {['Agile', 'Algorithms', 'Analytics', 'B2B', 'Business Strategy', 'Cloud', 'CSE IT', 'Career Coaching', 'Coding', 'Product Management', 'Public Speaking', 'Research', 'SaaS', 'Sales'].map(skill => (
                <label key={skill} className="dropdown-item">
                  <input
                    type="checkbox"
                    checked={selectedFilters.skills.includes(skill)}
                    onChange={() => handleCheckboxChange(skill)}
                  />
                  {skill}
                </label>
              ))}
            </div>


            {/*Availability  */}
            <div className="filter-category">
              <div className="availability-header">
                <span>Instantly Available</span>
              </div>
              <div className="availability-options">
                {['Instant', '7 Days', '30 Days'].map(option => (
                  <button
                    key={option}
                    type="button"
                    className={`dropdown-item ${selectedFilters.availability === option ? 'selected' : ''}`}
                    onClick={() => selectSingleOption('availability', option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {/*date inputs */}
              <div className="or-separator">OR</div>
              <div className="dropdown-item custom-date-range">
                <label>Select Custom Date Range:</label>
                <div className="date-range">
                  <div>
                  <label>Start</label>
                  <input
                    type="date"
                    id="start-date"
                    value={selectedFilters.customDateRange.start}
                    onChange={(event) => handleDateChange(event, 'start')}
                    placeholder="Start Date"
                  />
                  </div>

                 <div>
                 <label>End</label>
                  <input
                    type="date"
                    id="end-date"
                    value={selectedFilters.customDateRange.end}
                    onChange={(event) => handleDateChange(event, 'end')}
                    placeholder="End Date"
                  />
                 </div>
                </div>
              </div>
            </div>

            {/*Work experience */}
            <div className="filter-category">
              <label className="filter-title">Work Experience</label>
              <div className="slider-container">
                <div className="slider-labels">
                  <span>Min : 0</span>
                  <span>Max : 30+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  value={selectedFilters.workExperience}
                  step="1"
                  onChange={(event) => handleRangeChange(event, 'workExperience')}
                />
                <div className="slider-value">
                  Selected Value: <span>{selectedFilters.workExperience}</span>
                </div>
              </div>
            </div>

            {/*Price  */}
            <div className="filter-category">
              <label className="filter-title">Price</label>
              <div className="slider-container">
                <div className="slider-labels">
                  <span>Min : 0</span>
                  <span>Max : 3000+</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={selectedFilters.price}
                  step="100"
                  onChange={(event) => handleRangeChange(event, 'price')}
                />
                <div className="slider-value">
                  Selected Value: <span>{selectedFilters.price}</span>
                </div>
              </div>
            </div>

            <button id="clear-button" type="button" onClick={clearAllFilters}>
              Clear All Filters
            </button>

            <button
              type="button"
              className="apply-filter"
              onClick={applyAllFilters}
            >
              Apply All Filters &rarr;
            </button>
          </div>
        )}
      </div>

      {/**Top Mentors*/}
      <div className="filter-button top-mentors" onClick={(event)=>{toggleCrossFilter(event)}}>Top Mentors<span className="close" onClick={(event)=>{handleCrossClick(event)}}> X </span></div>

       {/* free services */}
       <div className="filter-button free-services" onClick={(event)=>{toggleCrossFilter(event)}}>Free Services<span className="close"  onClick={(event)=>{handleCrossClick(event)}}> X </span></div>
</div>
  );
};

export default FilterSection;





