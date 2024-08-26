import React , { useState } from 'react';
import "../../styles/become-mentor/beome-mentor.css"

const BecomeMentor = () => {
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions);
        const newLanguages = selectedOptions.map(option => ({
            value: option.value,
            label: option.text
        }));

        setSelectedLanguages(prevLanguages => {
            // Filter out already selected languages
            const filteredNewLanguages = newLanguages.filter(newLang => 
                !prevLanguages.some(lang => lang.value === newLang.value)
            );
            return [...prevLanguages, ...filteredNewLanguages];
        });

        // Reset the select input so the user can reselect the same language if needed
        event.target.value = '';
    };

    const removeLanguage = (value) => {
        setSelectedLanguages(prevLanguages =>
            prevLanguages.filter(lang => lang.value !== value)
        );
    };
    


  return (
    <div className="become-mentor-container">
        {/*hero section of the page */}
        <section className="mentor-section">
            <div className="mentor-text">
                <h1>Become a Mentor & Guide Unstoppable Talent!</h1>
                <p>Join the clan of mentors & leverage our 11 Mn+ community to share learnings with them 1:1 through your vast experience.</p>
                <div className="info-bubble">
                        <p>Build your personal brand</p>
                        <p>10,000+ Sessions booked</p>
                        <p>Earn money</p>           
                        <p>2000+ Mentors</p>
                </div>
                
            </div>
            <div className="mentor-image">
                <img src="/images/images.png" alt="Mentors" />       
            </div>
        </section>


        {/*form */}
        <div className="form-container">
        <div className="mentor-form">
            <h2>Become a Mentor!</h2>
            <form>
                {/*Profile Picture Upload*/} 
                <div className="form-group">
                    <label htmlFor="profile-pic-upload">Upload Profile Photo</label>
                    <input type="file" id="profile-pic-upload" accept="image/*" name="profile" />
                </div>
        
                {/*first name */}
                <div className="form-group">
                    <label htmlFor="first-name">First Name*</label>
                    <input type="text" id="first-name" placeholder="First Name" name="firstName" />
                </div>
        
                {/*last name */}
                <div className="form-group">
                    <label htmlFor="last-name">Last Name*</label>
                    <input type="text" id="last-name" placeholder="Last Name" name="lastName" />
                </div>
        
                {/*catchy headline */}
                <div className="form-group">
                    <label htmlFor="profile-link">
                        Catchy headline* 
                    </label>
                    <input type="url" id="profile-link" placeholder="skilled @ educational assistance" name="headline" />
                </div>
        
                {/**Gender Selection */  }
                <div className="form-group gender-group">
                    <label htmlFor="gender">Gender*</label>
                    <div className="gender-options">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male" className="gender-label">Male</label>
        
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female" className="gender-label">Female</label>
        
                        <input type="radio" id="transgender" name="gender" value="transgender" />
                        <label htmlFor="transgender" className="gender-label">Transgender</label>
        
                        <input type="radio" id="intersex" name="gender" value="intersex" />
                        <label htmlFor="intersex" className="gender-label">Intersex</label>
        
                        <input type="radio" id="nonbinary" name="gender" value="nonbinary"/>
                        <label htmlFor="nonbinary" className="gender-label">Non-binary</label>
        
                        <input type="radio" id="others" name="gender" value="others" />
                        <label htmlFor="others" className="gender-label">Others</label>
                    </div>
                </div>
        
                
                {/*bio enter */}
                <div className="form-group">
                    <label htmlFor="bio">Enter your Bio*</label>
                    <textarea id="bio" placeholder="Write something about yourself..." required name="bio"></textarea>
                </div>
        
                {/*select languages */}
                <div className="form-group">
                    <label htmlFor="languages">Languages you're fluent in*</label>
                    
                    <div id="selected-languages" className="selected-languages">
                    {selectedLanguages.map(lang => (
                        <div key={lang.value} className="language-tag" data-value={lang.value}>
                            {lang.label} <span className="remove-language" onClick={() => removeLanguage(lang.value)}>&times;</span>
                        </div>
                    ))}
                    </div>
                    
                    <select id="languages" name="languages[]"onChange={handleSelectChange} multiple >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="mandarin">Mandarin</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="arabic">Arabic</option>
                        <option value="bengali">Bengali</option>
                        <option value="russian">Russian</option>
                        <option value="portuguese">Portuguese</option>
                        <option value="indonesian">Indonesian</option>
                        <option value="urdu">Urdu</option>
                        <option value="german">German</option>
                        <option value="japanese">Japanese</option>
                        <option value="swahili">Swahili</option>
                        <option value="korean">Korean</option>
                        <option value="italian">Italian</option>
                        <option value="turkish">Turkish</option>
                        <option value="thai">Thai</option>
                        <option value="persian">Persian</option>
                        <option value="punjabi">Punjabi</option>
                    </select>
                </div>
                
                
                
                {/*social media profiles  */}
                <div className="form-group">
                    <label htmlFor="linkedin">LinkedIn*</label>
                    <input type="url" id="linkedin" placeholder="https://www.linkedin.com/in/yourprofile" required name="socila-media[]" />
                </div>
        
                <div className="form-group">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="url" id="facebook" placeholder="https://facebook.com/yourprofile" name="social-media[]" />
                </div>
        
                <div className="form-group">
                    <label htmlFor="youtube">YouTube</label>
                    <input type="url" id="youtube" placeholder="https://youtube.com/yourchannel" name="socila-media[]" />
                </div>
        
                <div className="form-group">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="url" id="instagram" placeholder="https://instagram.com/yourprofile" name="social-media[]" />
                </div>
                 
                 {/*submit button */}
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        
      
    </div>
  )
}

export default BecomeMentor
