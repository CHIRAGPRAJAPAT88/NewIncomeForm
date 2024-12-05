import React from "react";

import IncomeForm from "./IncomeSources";
import Form16UploadPage from "./UplodeForm16";
import FinancialDetailsForm from "./FinancialDetails";
import BasicDetails from "./BasicDetails";
import BasicDetails2 from "./BasicDetails2";
import SalaryForm from "./SalaryIncome";
import BusinessNatureSelect0 from "./PrimitiveIn";
import BusinessNatureSelect from "./PresumptiveIncome";
import HouseProperty from "./HouseProperty";
import IncomeForm2 from "./OtherSourceofIncome";
import TaxSavingForm1 from "./Deductions1";
import Section80DForm from "./Deductions2";
import DonationForm from "./Deductions3";
import TaxForm from "./Deductions4";
import BankAndAadhaarDetails from "./BankDetails";
import PrepaidTaxes from "./PrepaidTaxes";
import ExtraDetails from "./ExtraDetails";
import SourcesofIncome from "./SourcesofIncome";






function UserForm() {
  return (
    <div>
      <IncomeForm />
      <Form16UploadPage />
      <FinancialDetailsForm />
      <BasicDetails />
      <BasicDetails2 />
      <SalaryForm />
      <BusinessNatureSelect0 />
      {/* <BusinessNatureSelect /> */}
      <HouseProperty />
      <IncomeForm2 />
      <TaxSavingForm1 />
      <Section80DForm />
      <DonationForm />
      <TaxForm />
      <BankAndAadhaarDetails />
      <PrepaidTaxes />
      <ExtraDetails />

      
      {/* <SourcesofIncome/> */}
    
      
      
     
    </div>
  );
}

export default UserForm;
