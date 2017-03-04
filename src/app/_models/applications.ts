export class Applications {
  
    licenseField: string;
    appListField: AppList;
  }

export class AppList{
  appDefsField : AppDefs[];
  defaultAppField:string;
}

export class AppDefs{
 
    nameField            :string;
    descriptionField     :string;
    disksetField         :string;
    flagsField           :number;
}


export enum AppDatatype {
    CHAR=0,
    INTEGER,
    SMALLINT,
    DATE,
    TIME
}


export class AppFieldDef{
    nameField :string;
    descriptionField:string;
    dataTypeField:AppDatatype;
    lengthField:number;
    precisionField:number;
}

export class getFieldListResponse
{
    licenseField: string;
    fieldsField : AppFieldDef[] ;
}
