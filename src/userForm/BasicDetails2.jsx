import React, { useState } from 'react';
import { Box, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Button } from '@mui/material';

function BasicDetails2() {
  const [formData, setFormData] = useState({
    pincode: '',
    flatDoorBuilding: '',
    buildingVillage: '',
    road: '',
    area: '',
    employerCategory: '',
  });

  // Handle form field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle submission here, like sending data to a backend or showing in the console
    console.log('Form Submitted:', formData);
  };

  return (
    <>
    {/* Title */}
    <Typography
        variant="h5"
        align="center"
        sx={{ mb: 1, fontWeight: "bold", color: "#253243", mt: 5 }}
      >
      ENTER PERMANENT/CURRENT ADDRESS DETAILS
      </Typography>
      <Typography variant="body2" sx={{ mb: 3 , textAlign: "center" , color: "#555", fontSize:"20px" }}>We'll keep it a secret.</Typography>
      <Box
        sx={{
        boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          color:"#0a2342",
          maxWidth: "lg",
          p:3,
          mt:2,
          margin: "0 auto",
        }}
      >
        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Pincode */}
            <Grid item xs={12} sm={6}>
              <Typography>Pincode</Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Flat / Door / Building */}
            <Grid item xs={12} sm={6}>
              <Typography>Flat / Door / Building</Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="flatDoorBuilding"
                value={formData.flatDoorBuilding}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Building / Village */}
            <Grid item xs={12} sm={4}>
              <Typography>Building / Village</Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="buildingVillage"
                value={formData.buildingVillage}
                onChange={handleChange}
              />
            </Grid>

            {/* Road */}
            <Grid item xs={12} sm={4}>
              <Typography>Road</Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="road"
                value={formData.road}
                onChange={handleChange}
              />
            </Grid>

            {/* Area */}
            <Grid item xs={12} sm={4}>
              <Typography>Area</Typography>
              <TextField
                variant="outlined"
                fullWidth
                name="area"
                value={formData.area}
                onChange={handleChange}
              />
            </Grid>

            {/* Employer Category */}
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
             <Typography>Employer Category</Typography>
                <Select
                  name="employerCategory"
                  value={formData.employerCategory}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="government">Central Government</MenuItem>
                  <MenuItem value="selfEmployed">State Government</MenuItem>
                  <MenuItem value="private">Public Sector Unit</MenuItem>
                  <MenuItem value="private">Pensioners</MenuItem>
                  <MenuItem value="other">Private / Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Box>
      </>
  );
}

export default BasicDetails2;