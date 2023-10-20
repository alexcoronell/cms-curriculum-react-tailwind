/* Components */
import BasicPage from '../../Components/BasicPage';

/* Styles */
import './style.scss';

const Briefcase = () => {
  const titlePage = 'Briefcase';

  return <BasicPage titlePage={titlePage}>
    <div className="Briefcase content">
      Briefcase
    </div>
  </BasicPage>
};

export default Briefcase;
