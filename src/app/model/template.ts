export interface Template {
    create_time : Date
    effective_date : Date
    end_date : Date
    html : string
    id : number
    serviceCodeEntity: {
        effective_date : Date
        end_date : Date
        name : string
        service_code : number
    }
    update_time : Date
}
