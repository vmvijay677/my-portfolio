import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export function Contact() {
  return (
    <div className='contact-page'>
      <div className='contact-container'>
        <h2 className='container-heading'>Contact</h2>
        <div className='contact-flex'>
          <div className='mini-container'>
            <p className='contact-icon'><HomeIcon color="success" fontSize="inherit" /></p>
            <p className='contact-heading'>Location</p>
            <p className='contact-content'>Chennai, TN, India</p>
          </div>
          <div className='mini-container'>
            <p className='contact-icon'><CallIcon color="success" fontSize="inherit" /></p>
            <p className='contact-heading'>Phone</p>
            <p className='contact-content'>+91 9941776936</p>
          </div>
          <div className='mini-container'>
            <p className='contact-icon'><EmailIcon color="success" fontSize="inherit" /></p>
            <p className='contact-heading'>Email</p>
            <p className='contact-content'>vickyvijay677@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
