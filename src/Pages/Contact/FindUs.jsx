const FindUs = () => {
  return (
    <section>
      <div>
        <h1 className="text-8xl text-center py-20">FIND US</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "550px",
          overflow: "hidden",
          border: "0",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3257779826095!2d90.35252377444034!3d23.77141078797107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0a2d9055555%3A0xd6deafe57c635467!2sInnovative%20IT%20solution!5e0!3m2!1sen!2sbd!4v1741597476430!5m2!1sen!2sbd"
          width="100%"
          height="750"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        
      </div>
    </section>
  );
};

export default FindUs;
