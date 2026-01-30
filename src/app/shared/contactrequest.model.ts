export class ContactRequest {
    id: number | undefined;
    name: string= '';
    email: string= '';
    interest:string= '';
    message:string= '';
    createdTs: Date | undefined;
    updatedTs: Date | undefined;
    createdBy : string ='';
    updatedBy: string = '';
}
