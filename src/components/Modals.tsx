import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IModalProps } from '../utils/types';

const style = {
    position: 'absolute',
    top: {xs: "90%", lg: '50%'},
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: "300px",sm: "500px", md: "700px"},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 55
  };

const typographyStyseH2 = {
    fontSize: {
       xs: "20px",
       sm: "1.25rem;" 
    }
}

const typographyStyse = {
    fontSize: {
       xs: "17px",
       sm: "1rem;" 
    },
    mt: 2
}

const buttonStyle= {
    fontSize: {
        xs: "15px",
        sm: "0.875rem;;"
    }
}

const Modals = ( {error, closeFunction} : IModalProps ):JSX.Element =>  {

    const closeModalHandler = ():void => {
        closeFunction(false);
    }

const errorText:string = error === "empty" ? "All selection bars should be chosen" : `Date "from" should be earlier that date "to"`;
    return (
        <div>
            <Box sx={style}>
              <Typography sx={typographyStyseH2} id="modal-modal-title" variant="h6" component="h2">
                You did something wrong
              </Typography>
              <Typography sx={typographyStyse} id="modal-modal-description">
                {errorText}
              </Typography>
              <Button sx={buttonStyle} onClick={closeModalHandler} variant="contained">Git it</Button>
            </Box>
        </div>
      );
    
}

export default Modals;
