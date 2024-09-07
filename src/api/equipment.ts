import { post } from "../utils/http/request"

interface searchData {
    name: string,
    person: string,
    page: number,
    pageSize: number
}

export function getEquipmentList(data: searchData) {
    return post("/equipmentList", data)
}