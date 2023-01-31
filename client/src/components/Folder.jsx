import { useState } from 'react';
import {
  Box, Grid, IconButton, Typography,
} from '@mui/material';
import arrowIcon from './icons/arrowIcon';
import arrowUpIcon from './icons/arrowDownIcon';
import addIcon from './icons/addIcon';
import deleteIcon from './icons/deleteIcon';
import folderIcon from './icons/folderIcon';
import fileIcon from './icons/fileIcon';
import AddModal from './modals/AddModal';
import DeleteModal from './modals/DeleteModal';

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  return (
    <Grid>
      <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <IconButton className="btn" onClick={() => setExpand(!expand)}>
          {!expand ? arrowIcon() : arrowUpIcon() }
        </IconButton>
        <IconButton className="btn">
          {explorer.isFolder ? folderIcon() : fileIcon()}
        </IconButton>
        <Typography className="title">
          {explorer.name}
        </Typography>
        <IconButton className="btn" onClick={() => setOpen(true)}>
          {addIcon()}
        </IconButton>
        <AddModal open={open} setOpen={setOpen} explorer={explorer} />
        <IconButton className="btn" onClick={() => setOpenDeleteModal(true)}>
          {deleteIcon()}
        </IconButton>
        <DeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal} explorer={explorer} />
      </Box>
      <Box>
        <Typography style={{ display: expand ? 'flex' : 'none', paddingLeft: 25, flexDirection: 'column' }}>
          {explorer.items.map((explore) => (
            <Folder key={explore.name} explorer={explore} />
          ))}
        </Typography>
      </Box>
    </Grid>
  );
}

export default Folder;
