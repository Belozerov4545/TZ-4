import {
  Box, Button, IconButton, Modal, Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import closeIcon from '../icons/closeIcon';
import deleteIcon from '../icons/deleteIcon';

const useStyles = makeStyles(() => ({
  Button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00FFBE',
    height: '25px',
    width: '93px',
    fontSize: '14px',
    marginLeft: '5px',
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 435,
  height: 170,
  border: '1px solid #B7B7B7',
  boxShadow: 24,
};

function DeleteModal({ open, setOpen, explorer }) {
  const styles = useStyles();
  const handleDelete = () => {
    explorer.items.pop();
    console.log(explorer.items);
    setOpen(false);
  };
  return (
    <Modal
      explorer={explorer}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#2A2A2A', height: '40px',
        }}
        >
          {deleteIcon()}
          <Typography className="title" id="modal-modal-title" variant="h6" component="h2" style={{ marginLeft: '5px', color: '#FFFFFF' }}>
            Delete sequence
          </Typography>
          <IconButton className="btn" onClick={() => setOpen(false)}>
            {closeIcon()}
          </IconButton>
        </Box>
        <Typography
          className="title"
          id="modal-modal-description"
          style={{
            color: '#FFFFFF', marginBottom: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}
        >
          <Typography
            className="title"
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '5px',
            }}
          >
            The sequence INFC and related objects will be permanently
            deleted and cannot be restored.
          </Typography>
          <Typography className="title" style={{ margin: '5px' }}>
            Are you sure you want to continue?
          </Typography>
        </Typography>
        <Box style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <Button
            style={{
              display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#3D3D3D', height: '25px', width: '199px', fontSize: '14px', marginLeft: '5px',
            }}
            size="small"
            className={styles.Button}
            onClick={() => setOpen(false)}
          >
            <Typography style={{ color: '#BFBFBF', fontSize: '10px' }}>
              Cancel
            </Typography>
          </Button>
          <Button
            style={{
              display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#FF005C', height: '25px', width: '199px', fontSize: '14px', marginLeft: '5px', color: '#353535',
            }}
            size="small"
            className={styles.Button}
            startIcon={deleteIcon()}
            onClick={() => handleDelete()}
          >
            <Typography style={{ color: '#353535', fontSize: '10px' }}>
              Delete
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteModal;
