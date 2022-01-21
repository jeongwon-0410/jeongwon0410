
export interface AxApis{
    name: string;
    desc: string;
    license_number: number;
    gx_uri: string;
    id: string;
    default_model: {
      name: string;
      desc: string;
      capacity: number;
      id: string;
    }
    created: string; 
  
}

export interface DxApis{
    name : string;
    address : string;
    capacity : number;
    used : number;
    enable : number;
    loading :number;
    id : string;
    loaded_models : [];
}


export interface MxApis{
    name: string;
    uri: string;
    user_id: string;
    user_pw: string;
    adaptor: string;
    id: string;
}


export interface ModelApis{
    name : string;
    desc: string;
    capacity: number;
    id: string;
}

export interface UserApis{
    name : string;
    email: string;
    id: number;
    level: number;
}
  
  
