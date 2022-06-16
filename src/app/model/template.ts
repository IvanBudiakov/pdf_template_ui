import { Service } from "./service"

export class Template {
    create_time !: Date
    effective_date !: Date
    end_date !: Date
    html !: string | null
    id !: number
    serviceCodeEntity = new Service
    update_time !: Date
}
