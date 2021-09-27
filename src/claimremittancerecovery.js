import { LightningElement, track } from 'lwc'; 

const LINEITEMDATA = [
    {   
        id: "1",
        recoverydate: "2021-06-01",
        checknumber: "128463745372",
        checkreceiveddate: "2021-06-01",
        amount : "$100.23",
        recoverytype : "System Recovered",
        reason : "lorem ipsum reasons"
    },
    {   
        id: "2",
        recoverydate: "2021-06-01",
        checknumber: "128463745372",
        checkreceiveddate: "2021-06-01",
        amount : "$100.23",
        recoverytype : "System Recovered",
        reason : "lorem ipsum reasons"
    }
];

const LINEITEMCOLUMNS = [
    { label: 'Recovery Type', fieldName: 'recoverytype', type: "text", sortable: false, wrapText: true},
    { label: 'Recovery Date', fieldName: 'recoverydate', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        }
    },
    { label: 'Amount', fieldName: 'amount', type: "text", sortable: false, wrapText: true},
    { label: 'Check Number', fieldName: 'checknumber', type: "text", sortable: false, wrapText: true},
    { label: 'Check Received Date', fieldName: 'checkreceiveddate', type: "date-local", sortable: false, wrapText: true,typeAttributes:{
            month: "2-digit",
            day: "2-digit"
        }
    },
    { label: 'Reason', fieldName: 'reason', type: "text", sortable: false, wrapText: true}
];

export default class Claimremittancerecovery extends LightningElement {

@track lineitemData = LINEITEMDATA;
  lineitemColumns = LINEITEMCOLUMNS;

closemodal(){
    this.dispatchEvent(new CustomEvent('close'));
}
}