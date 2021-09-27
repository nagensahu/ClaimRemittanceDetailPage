import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        createddate: "2021-06-01",
        claimid: "128463745372",
        servicedate: "2021-06-01",
        overpaymentamount : "$100.23"
    },
    {   
        id: "2",
        createddate: "2021-06-01",
        claimid: "128463745372",
        servicedate: "2021-06-01",
        overpaymentamount : "$100.23"
    }
];

const LINEITEMCOLUMNS = [
    { label: 'Created Date', fieldName: 'createddate', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        }
    },
    { label: 'Claim ID', fieldName: 'claimid', type: "button", sortable: false, wrapText: true,
    typeAttributes: {variant: "base", label: {fieldName: "claimid"}}},
    { label: 'Service Date', fieldName: 'servicedate', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        }
    },
    { label: 'Over Payment Amount', fieldName: 'overpaymentamount', type: "text", sortable: false, wrapText: true}
];

export default class Claimremittanceoverpayments extends LightningElement {

@track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;

closemodal(){
    this.dispatchEvent(new CustomEvent('close'));
}
}