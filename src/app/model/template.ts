export interface Template {
    id : number
    html : string
    effective_date : Date
    end_date : Date
    create_time : Date
    update_time : Date
    service : {
        code : number
        name : string
        effective_date : Date
        end_date : Date
    }
    
}
