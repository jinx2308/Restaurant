const AboutUs = () => {
  return (
    <div className="text-color ms-5 me-5 mr-5 mt-5">
      <div>
        <h1 style={{ textAlign: "center" }}>About Us</h1>
      </div>

      <div>
      <b>
      Sports Management System is your go-to platform for sports interested people's, athletes across various sports disciplines! Whether you're organizing a game, looking to book grounds, turfs and courts, or simply seeking like-minded individuals to engage in sporting activities, our user-friendly interface makes it easy to find the perfect match. From soccer to basketball, tennis to rugby, discover  and book turfs and courts of all skill levels in your area.
      
      </b>
      </div>
    
    <div style={{textAlign: "center"}}>
      <img className="photo ms-5 me-5 mr-5 mt-3" src={require('../images/balls.jpg')} alt="sports balls" style={{ height: 500, width: 800 }} />
</div>
    </div>
  );
};

export default AboutUs;
