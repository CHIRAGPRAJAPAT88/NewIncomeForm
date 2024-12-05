import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Button,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Section80DForm = () => {
  // State for form rows (array of form data)
  const [formDataList, setFormDataList] = useState([
    {
      policyType: "",
      isSeniorCitizen: null,
      preventiveHealthCheckUp: "",
      medicalExpenditure: "",
      insurancePremium: "",
    },
  ]);

  // Handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newFormDataList = [...formDataList];
    newFormDataList[index][name] = value;
    setFormDataList(newFormDataList);
  };

  // Handle policy type change
  const handlePolicyTypeChange = (event, index) => {
    const newFormDataList = [...formDataList];
    newFormDataList[index].policyType = event.target.value;
    setFormDataList(newFormDataList);
  };

  // Handle toggle button change
  const handleSeniorCitizenChange = (event, newAlignment, index) => {
    const newFormDataList = [...formDataList];
    newFormDataList[index].isSeniorCitizen = newAlignment;
    setFormDataList(newFormDataList);
  };

  // Add new row
  const handleAddRow = () => {
    setFormDataList([
      ...formDataList,
      {
        policyType: "",
        isSeniorCitizen: null,
        preventiveHealthCheckUp: "",
        medicalExpenditure: "",
        insurancePremium: "",
      },
    ]);
  };

  // Remove last row
  const handleRemoveRow = () => {
    if (formDataList.length > 1) {
      const newFormDataList = formDataList.slice(0, formDataList.length - 1);
      setFormDataList(newFormDataList);
    }
  };

  return (
    <>
    <Box sx={{bgcolor:"#f5f5f5", minHeight:"100vh"}}>
      <Typography
        variant="h5"
        align="center"
        sx={{ mb: 1, fontWeight: "bold", color: "#253243", mt: 5 }}
      >
        ENTER TAX SAVING DEDUCTIONS
      </Typography>
      <Typography
        variant="body2"
        sx={{ mb: 3, textAlign: "center", color: "#253243", fontSize: "20px" }}
      >
        We're here to help you to get maximum deductions on your TAX
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
        {/* Header Section */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Section 80D
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{
            mb: 3,
            backgroundColor: "#e0f7fa",
            p: 1,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          Note: In case of New Tax Regime, only deduction u/s 80CCD(2) is
          allowed. This is available under Other tab.
        </Typography>

        {/* Form Section */}
        {formDataList.map((formData, index) => (
          <Grid container spacing={2} key={index}>
            {/* Policy Type */}
            <Grid item xs={12} sm={4}>
              <Typography>Medical Insurance</Typography>
              <FormControl fullWidth>
                <Select
                  value={formData.policyType}
                  onChange={(e) => handlePolicyTypeChange(e, index)}
                  name="policyType"
                  placeholder="Select Policy Type"
                >
                  <MenuItem value="health">Select Policy Type</MenuItem>
                  <MenuItem value="life">
                    For Self, Spouse and Dependent children
                  </MenuItem>
                  <MenuItem value="general">For Parents</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Senior Citizen Toggle */}
            <Grid
              item
              xs={12}
              sm={8}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start", // Aligns items to the left
              }}
            >
              <Typography sx={{ mr: 2 }} variant="h6">
                Is any of the policy holder aged 60 years or more
              </Typography>
              <ToggleButtonGroup
                value={formData.isSeniorCitizen}
                exclusive
                onChange={(e, newAlignment) =>
                  handleSeniorCitizenChange(e, newAlignment, index)
                }
                aria-label="Senior Citizen"
                sx={{ mt: 1 }}
              >
                <ToggleButton value="yes" color="primary">
                  Yes
                </ToggleButton>
                <ToggleButton value="no" color="primary">
                  No
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            {/* Preventive Health Check-Up */}
            <Grid item xs={12} sm={4}>
              <Typography>Preventive Health Check Up</Typography>
              <TextField
                fullWidth
                name="preventiveHealthCheckUp"
                value={formData.preventiveHealthCheckUp}
                onChange={(e) => handleInputChange(e, index)}
                variant="outlined"
              />
            </Grid>

            {/* Medical Expenditure */}
            <Grid item xs={12} sm={4}>
              <Typography>Medical Expenditure</Typography>
              <TextField
                fullWidth
                name="medicalExpenditure"
                value={formData.medicalExpenditure}
                onChange={(e) => handleInputChange(e, index)}
                variant="outlined"
              />
            </Grid>

            {/* Medical Insurance Premium */}
            <Grid item xs={12} sm={4}>
              <Typography>Medical Insurance Premium</Typography>
              <TextField
                fullWidth
                name="insurancePremium"
                value={formData.insurancePremium}
                onChange={(e) => handleInputChange(e, index)}
                variant="outlined"
              />
            </Grid>
            {/* Add/Remove Row Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center", // Center the items vertically if needed
                mb: 3,
                mt: 3,
                gap: 2,
              }}
            >
              <IconButton onClick={handleAddRow} color="primary">
                <AddIcon />
              </IconButton>
              <IconButton onClick={handleRemoveRow} color="primary">
                <RemoveIcon />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Box>
      </Box>
    </>
  );
};

export default Section80DForm;
