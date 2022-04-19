import SendIcon from '@mui/icons-material/Send';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';

export function Intro() {
  const italicName = "<Vignesh Ravikumar />";
  return (
    <div className='new-intro'>
      <p className='italicName'>{italicName}</p>
      <img className="profile-pic" src="https://drive.google.com/uc?export=view&id=113IRZIvJx5KWoSPBcIHrfBev9M2YdkV0" alt="picture"></img>
      <p className='welcome'>WELCOME TO MY PORTFOLIO! ✋</p>
      <p className='my-name'>Vignesh Ravikumar</p>
      <p className='designation'><SendIcon className='arrow' /> Full Stack Web Developer</p>
      <div className='button'>
        <Button color="success" variant="contained" href="https://github.com/vmvijay677" target="_blank"><GitHubIcon color="dark" />&nbsp; Github</Button> &nbsp; &nbsp;
        <Button color="success" variant="contained" href="https://www.linkedin.com/in/vignesh-ravikumar-0a7039204" target="_blank"><LinkedInIcon color="dark" />&nbsp; LinkedIn</Button>
      </div>
    </div>
  );
}
