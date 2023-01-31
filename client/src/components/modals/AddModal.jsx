import {
  Box, Button, IconButton, Modal, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import addIcon from '../icons/addIcon';
import closeIcon from '../icons/closeIcon';

const useStyles = makeStyles(() => ({
  Input: {
    height: '25px',
    padding: '0px',
    width: '300px',
    borderBlockStartStyle: 'solid',
    borderColor: '#333333',
    borderRadius: '3px',
    backgroundColor: '#232323',
    color: '#E2E2E2',
    paddingLeft: '15px',
  },
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
  width: 400,
  border: '1px solid #B7B7B7',
  boxShadow: 24,
  padding: '5px',
};

function AddModal({ open, setOpen, explorer }) {
  const styles = useStyles();
  const [fileName, setFileName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileName) {
      console.log(fileName);
      explorer.items.push({
        name: fileName,
        isFolder: true,
        items: [],
      });
      setFileName('');
      setOpen(false);
    }
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
          display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#2A2A2A',
        }}
        >
          {addIcon()}
          <Typography className="title" id="modal-modal-title" variant="h6" component="h2" style={{ marginLeft: '5px', color: '#FFFFFF' }}>
            Add shot
          </Typography>
          <IconButton className="btn" onClick={() => setOpen(false)}>
            {closeIcon()}
          </IconButton>
        </Box>
        <Typography className="title" id="modal-modal-description" style={{ color: '#FFFFFF', marginBottom: '5px' }}>
          Enter the name:
        </Typography>
        <form
          style={{
            padding: '0px', display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#252525',
          }}
          noValidate
          autoComplete="off"
          id="addFolder"
          type="submit"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            form="addFolder"
            className={styles.Input}
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          <Button
            style={{
              display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#00FFBE', height: '25px', width: '93px', fontSize: '14px', marginLeft: '5px',
            }}
            size="small"
            type="submit"
            className={styles.Button}
            startIcon={addIcon()}
          >
            <Typography style={{ color: '#353535', fontSize: '10px' }}>
              Add shot
            </Typography>
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default AddModal;
