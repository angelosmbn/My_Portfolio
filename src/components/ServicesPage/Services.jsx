import './services.css';
import ServicesCard from "./ServicesCard";

function Services() {
  return (
    <div className="servicesWindow">
      <div className="services">
        <ServicesCard num="01" name="Web Development" desc="Specializing in front-end and back-end development using HTML, CSS, JavaScript, React, and PHP to create responsive, user-friendly websites." />
        <ServicesCard num="02" name="UI/UX Design" desc="Crafting intuitive user interfaces and ensuring seamless user experiences across digital platforms." />
        <ServicesCard num="03" name="Software Development" desc="Tailoring software solutions to meet specific business needs, ensuring high performance and scalability." />
        <ServicesCard num="04" name="Mobile App Development" desc=" Building user-friendly mobile applications for Android and iOS using modern frameworks." />
      </div>
    </div>
  );
}

export default Services;