import type { Overview as Overview_Type } from './../types/overview'

export class Overview {
    #overviewData: Overview_Type

    constructor(overviewData: Overview_Type) {
        this.#overviewData = overviewData
    }

    get overviewData() {
        return this.#overviewData
    }
}
