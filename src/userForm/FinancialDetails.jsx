import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Typography,
} from "@mui/material";

const FinancialDetailsForm = () => {
  const [formData, setFormData] = useState({
    financialYear: "2023-2024", // Default selection
    pan: "",
    dob: "",
    prefill: "no", // Default selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      {/* Title */}
      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 1, fontWeight: "bold", color: "#253243", mt: 5 }}
      >
        START YOUR INCOME TAX RETURN FILING
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 3, textAlign: "center", color: "#555", fontSize: "20px" }}
      >
        Let us do the paperwork.
      </Typography>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
          color: "#0a2342",
          maxWidth: "lg",
          p: 3,
          mt: 2,
          margin: "0 auto",
          mb: 4,
        }}
      >
        <Grid container spacing={3}>
          {/* Financial Year */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Typography>Financial Year *</Typography>
              <Select
                name="financialYear"
                value={formData.financialYear}
                onChange={handleChange}
                required
              >
                <MenuItem value="2024-2025">2024-2025</MenuItem>
                <MenuItem value="2023-2024">2023-2024</MenuItem>
                <MenuItem value="2022-2023">2022-2023</MenuItem>
                <MenuItem value="2021-2022">2021-2022</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* PAN Number */}
          <Grid item xs={12} sm={6}>
            <Typography>PAN Number</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* Date of Birth */}
          <Grid item xs={12} sm={6}>
            <Typography>Date of Birth</Typography>
            <TextField
              variant="outlined"
              fullWidth
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>

          {/* Pre-fill Data */}
          <Grid item xs={12} sm={6}>
            <FormControl
              component="fieldset"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FormLabel component="legend" sx={{ mr: 2 }}>
                Do you want to pre-fill data?
              </FormLabel>
              <RadioGroup
                row
                name="prefill"
                value={formData.prefill}
                onChange={handleChange}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FinancialDetailsForm;
