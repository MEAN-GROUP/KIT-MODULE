export class deliveryorderdata {
        constructor(
        public PatientName: string,
        public patientId: string,
        public fathername: string,
        public kitType: string,
        public dateTime: string,
        public mobileno: number,
        public email: string,
        public address: object
       
        ){}
}