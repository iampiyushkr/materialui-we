
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Paper from "@material-ui/core/Paper"
export function Grids() {
    const pages = new Array(12).fill(0).map((a, i) => i + 1);
    return <>
        <Grid container spacing={0}>
            {pages.map(e =>
                <Grid xs={12} sm={4} md={4} lg={3} xl={2} >
                    <Paper>
                        <Box>
                            <Typography>
                                {e}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
                )}

        </Grid>
        </>
} 