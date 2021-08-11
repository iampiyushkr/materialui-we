import {Button, AppBar, Container, IconButton, Toolbar, Typography,Box, Modal, Paper, makeStyles } from "@material-ui/core";
import MenuIcon from  "@material-ui/icons/Menu";
import { useState } from "react";

const useStyle = makeStyles({
    modelBox: {
        width: "30%",
        margin:"auto"
    }
})
export function Theme() {
    const [showModal, setShowModal] = useState(false)
    const style=useStyle()
    
    return <>
        <Container>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton color="secondary">
                        <MenuIcon/>

                        <Typography variant="h6">Masai</Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Container>

        <Box>
            <Button
                variant="contained" color="primary"
                    onClick={()=>{setShowModal(!showModal)}}         
            >
                 ShowModal   
            </Button>
            <Modal
                onClose={() => { setShowModal(false) }}
                   open={showModal}
            >
                
                <Box className={ style.modelBox }>
                    <Paper>
                        <Typography>MasaiSchool</Typography>
                    </Paper>
                    <Button onClick={()=>{setShowModal(false)}} variant="contained" color="primary">Close</Button>
                   </Box>
                
                

            </Modal>
        </Box>
        </>
}