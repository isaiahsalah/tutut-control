import { Button, Divider, Typography, Unstable_Grid2 as Grid } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';




export const MyBanner = (props) => {

    const handleClickOpenDialogCreate = props.OpenDialogCreate;
    const MySvg = props.MySvg;
    const MyTitle = props.MyTitle;
    const MyDescription = props.MyDescription;
    const MyBuutonText = props.MyBuutonText;
    return (

        <Grid container
            paddingBottom={1}
            paddingTop={1}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            columnSpacing={3}
            rowSpacing={0.5}
            >

            <Grid container
                xs={4}
                sm={4}
                maxWidth={200}  >
                <Grid xs={12} >
                    {MySvg}
                </Grid>
            </Grid>

            <Grid xs={8} sm={8} textAlign={{ xs: 'center', sm: 'left' }}>
                <Typography fontSize={{ xs: 35, md: 50 }} >
                    <b>{MyTitle}</b>
                </Typography>
                <Typography fontSize={{ xs: 13, md: 15 }} style={{ marginBottom: "10px" }} >
                    {MyDescription}
                </Typography>
                <Grid p={0} display={{ xs: "none", sm: "block" }} xs={12} >
                    <Button variant="contained"
                        //to="/User"
                        onClick={handleClickOpenDialogCreate('paper')}
                    >
                        {MyBuutonText}
                    </Button>
                </Grid>
            </Grid>
            <Grid display={{ xs: "block", sm: "none" }} xs={12} >
                <Button fullWidth variant="contained"
                    //to="/User"
                    onClick={handleClickOpenDialogCreate('paper')}
                >
                    {MyBuutonText}
                </Button>
            </Grid>
        </Grid>

    )
}

MyBanner.propTypes = {
    OpenDialogCreate: PropTypes.func.isRequired,
    MySvg: PropTypes.object.isRequired,
    MyTitle: PropTypes.string.isRequired,
    MyDescription: PropTypes.string.isRequired,
    MyBuutonText: PropTypes.string.isRequired,
};

