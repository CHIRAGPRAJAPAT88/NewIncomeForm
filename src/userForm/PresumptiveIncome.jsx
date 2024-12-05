import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ListSubheader,
} from "@mui/material";

const BusinessNatureSelect = ({ value, onChange }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ my: 2 }}>
      <InputLabel id="business-nature-label">Business Nature</InputLabel>
      <Select
        labelId="business-nature-label"
        value={value}
        onChange={onChange}
        label="Business Nature"
      >
        <MenuItem value="">
          <em>Please Select</em>
        </MenuItem>
        <ListSubheader>Section 44AE</ListSubheader>
        <MenuItem value="9999">Goods Carriage (Section 44AE)</MenuItem>
        <ListSubheader>Section 44ADA</ListSubheader>
        <MenuItem value="16001">Legal profession</MenuItem>
        <MenuItem value="16002">Accounting, book-keeping & auditing profession</MenuItem>
        <MenuItem value="16003">Tax consultancy</MenuItem>
        <MenuItem value="16004">Architectural profession</MenuItem>
        <MenuItem value="16005">Engineering & technical consultancy</MenuItem>
        <MenuItem value="16007">Fashion designing</MenuItem>
        <MenuItem value="16008">Interior decoration</MenuItem>
        <MenuItem value="14001">Software development</MenuItem>
        <MenuItem value="14002">Other software consultancy</MenuItem>
        <MenuItem value="14003">Data processing</MenuItem>
        <MenuItem value="14005">Other IT enabled services</MenuItem>
        <MenuItem value="18001">General hospitals</MenuItem>
        <MenuItem value="18004">Diagnostic centers</MenuItem>
        <MenuItem value="18010">Medical clinics</MenuItem>
        <MenuItem value="18017">Medical education</MenuItem>
        <ListSubheader>Section 44AD</ListSubheader>
        <MenuItem value="01001">Growing & manufacturing of tea</MenuItem>
        <MenuItem value="01010">Agricultural & animal husbandry services</MenuItem>
        <MenuItem value="01013">Growing of timber, plantation, operation of tree nurseries & conserving of forest</MenuItem>
        <MenuItem value="01014">Gathering of tendu leaves</MenuItem>
        <MenuItem value="02006">Other Fish farming activity n.e.c</MenuItem>
        <MenuItem value="03006">Mining of uranium & thorium ores</MenuItem>
        <MenuItem value="03009">Mining of gemstones</MenuItem>
        <MenuItem value="03015">Mining & production of salt</MenuItem>
        <MenuItem value="03016">Other mining & quarrying n.e.c</MenuItem>
        <MenuItem value="04006">Manufacture of sugar</MenuItem>
        <MenuItem value="04007">Manufacture of cocoa, chocolates & sugar confectionery</MenuItem>
        <MenuItem value="04008">Flour milling</MenuItem>
        <MenuItem value="04009">Rice milling</MenuItem>
        <MenuItem value="04020">Manufacture of mineral water</MenuItem>
        <MenuItem value="04021">Manufacture of soft drinks</MenuItem>
        <MenuItem value="04022">Manufacture of other non-alcoholic beverages</MenuItem>
        <MenuItem value="04023">Manufacture of tobacco products</MenuItem>
        <MenuItem value="04031">Manufacture of footwear</MenuItem>
        <MenuItem value="04033">Manufacture of paper & paper products</MenuItem>
        <MenuItem value="04082">Manufacture of optical instruments</MenuItem>
        <MenuItem value="04083">Manufacture of watches & clocks</MenuItem>
        <MenuItem value="04084">Manufacture of motor vehicles</MenuItem>
        <MenuItem value="04093">Manufacture of jewellery</MenuItem>
        <MenuItem value="04094">Manufacture of sports goods</MenuItem>
        <MenuItem value="04095">Manufacture of musical instruments</MenuItem>
        <MenuItem value="04096">Manufacture of games & toys</MenuItem>
        <MenuItem value="04097">Other manufacturing n.e.c.</MenuItem>
        <MenuItem value="05004">Other essential commodity service n.e.c</MenuItem>
        <MenuItem value="06008">Construction & maintenance of power transmission & telecommunication lines</MenuItem>
        <MenuItem value="06010">Other construction activity n.e.c.</MenuItem>
        <MenuItem value="07005">Other real estate/renting services n.e.c</MenuItem>
        <MenuItem value="08006">Renting of office machinery & equipment</MenuItem>
        <MenuItem value="08009">Renting of other machinery n.e.c.</MenuItem>
        <MenuItem value="09002">Repair & maintenance of motor vehicles</MenuItem>
        <MenuItem value="09020">Wholesale of waste, scrap & materials for re-cycling</MenuItem>
        <MenuItem value="09026">Retail sale of hardware, paint & glass</MenuItem>
        <MenuItem value="09027">Wholesale of other products n.e.c</MenuItem>
        <MenuItem value="09028">Retail sale of other products n.e.c</MenuItem>
        <MenuItem value="10001">Hotels – Star rated</MenuItem>
        <MenuItem value="10002">Hotels – Non-star rated</MenuItem>
        <MenuItem value="10007">Restaurants – with bars</MenuItem>
        <MenuItem value="10008">Restaurants – without bars</MenuItem>
        <MenuItem value="10012">Other hospitality services n.e.c.</MenuItem>
        <MenuItem value="11001">Travel agencies & tour operators</MenuItem>
        <MenuItem value="11005">Transport by urban/sub-urban railways</MenuItem>
        <MenuItem value="11015">Other Transport & Logistics services n.e.c</MenuItem>
        <MenuItem value="12001">Post & courier activities</MenuItem>
        <MenuItem value="12002">Basic telecom services</MenuItem>
        <MenuItem value="12003">Value added telecom services</MenuItem>
        <MenuItem value="13001">Commercial banks, saving banks & discount houses</MenuItem>
        <MenuItem value="13009">Chit fund</MenuItem>
        <MenuItem value="13015">Stock brokers, sub-brokers & related activities</MenuItem>
        <MenuItem value="13016">Financial advisers, mortgage advisers & brokers</MenuItem>
        <MenuItem value="14010">Other computation related services n.e.c.</MenuItem>
        <MenuItem value="17006">Coaching centres & tuitions</MenuItem>
        <MenuItem value="17007">Other education services n.e.c.</MenuItem>
        <MenuItem value="19007">Political organisations</MenuItem>
        <MenuItem value="20002">Film distribution</MenuItem>
        <MenuItem value="20017">Museum activities</MenuItem>
        <MenuItem value="20023">Other sporting activities n.e.c.</MenuItem>
        <MenuItem value="20024">Other recreational activities n.e.c.</MenuItem>
        <MenuItem value="21001">Hair dressing & other beauty treatment</MenuItem>
        <MenuItem value="21002">Funeral & related activities</MenuItem>
        <MenuItem value="21003">Marriage bureaus</MenuItem>
        <MenuItem value="21007">Private households as employers of domestic staff</MenuItem>
        <MenuItem value="21008">Other services n.e.c.</MenuItem>
        <MenuItem value="22001">Extra territorial organisations & bodies (IMF, World Bank, European Commission etc.)</MenuItem>
        <MenuItem value="21006">Astrological & spiritualists activities</MenuItem>
        <MenuItem value="16019">Other professional services n.e.c.</MenuItem>
      </Select>
    </FormControl>
  );
};

export default BusinessNatureSelect;
