import './Parceiros.css';

import logo1 from '../assets/colaboradores/logo-1.png';
import logo2 from '../assets/colaboradores/logo-2.png';
import logo3 from '../assets/colaboradores/logo-3.png';
import logo4 from '../assets/colaboradores/logo-4.png';
import logo5 from '../assets/colaboradores/logo-5.png';
import logo6 from '../assets/colaboradores/logo-6.png';
import logo7 from '../assets/colaboradores/logo-7.png';
import logo8 from '../assets/colaboradores/logo-8.png';
import logo9 from '../assets/colaboradores/logo-9.png';
import logo10 from '../assets/colaboradores/logo-10.png';
import logo11 from '../assets/colaboradores/logo-11.png';
import planta from '../assets/colaboradores/planta.png';


const Parceiros = () => {
  const parceiros = [
    { name: 'logo1', logo: logo1 },
    { name: 'logo2', logo: logo2 },
    { name: 'logo3', logo: logo3 },
    { name: 'logo4', logo: logo4 },
    { name: 'logo5', logo: logo5 },
    { name: 'logo6', logo: logo6 },
    { name: 'logo7', logo: logo7 },
    { name: 'logo8', logo: logo8 },
    { name: 'logo9', logo: logo9 },
    { name: 'logo10', logo: logo10 },
    { name: 'logo11', logo: logo11 },
    { name: 'planta', logo: planta},
  ];

  return (
    <div className="parceiros-container">
      <div className="title-container">
        <h2>
          Parceiros que tornam<br />
          tudo <span className="highlight">possível</span>
        </h2>
      </div>
      <div className="parceiros-grid">
      {parceiros.map((parceiro, index) => (
  <div key={index} className="parceiro">
    <img
      className={`img parceiro-${index + 1}`} 
      src={parceiro.logo}
      alt={`${parceiro.name} logo`}
    />
  </div>
))}
      </div>
    </div>
  );
};

export default Parceiros;
