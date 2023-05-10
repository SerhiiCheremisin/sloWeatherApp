import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IModalProps } from '../utils/types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 55
  };



const Modals = ( {error, closeFunction} : IModalProps ):JSX.Element =>  {

    const closeModalHandler = ():void => {
        closeFunction(false);
    }

const errorText:string = error === "empty" ? "All selection bars should be chosen" : `Date "from" should be earlier that date "to"`;
    return (
        <div>
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                You did something wrong
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {errorText}
              </Typography>
              <Button onClick={closeModalHandler} variant="contained">Git it</Button>
            </Box>
        </div>
      );
    
}

export default Modals;
