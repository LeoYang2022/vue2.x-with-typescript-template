// Class对象
export class RangePickerObj {
    startDate: string;
    endDate: string;
    event: any;
    otherAttr?: string;

    constructor(startDate: string, endDate: string, event: any) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.event = event;
    }
}

export class PaginationObj {
    public pageNo: number;
    public pageSize: number;
    public total: number;

    private cannotVisited?: any;

    constructor(pageNo?: number, pageSize?: number, total?: number) {
        this.pageNo = pageNo || 0;
        this.pageSize = pageSize || 0;
        this.total = total || 0;
    }
}
