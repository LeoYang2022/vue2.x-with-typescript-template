class ProductConfig {
    title: string = "";
    subTitle: string = "";
    showField: string = "";
    showName: string = "";
    date: string = "";
    otherAttr: string = "";

    // constructor(title : string, subTitle : string, showField : string, showName : string, date : string) {
    //     this.title = title;
    //     this.subTitle = subTitle;
    //     this.showField = showField;
    //     this.showName = showName;
    //     this.date = date;
    // }
}

export default class Product {
    name: string = "";
    productCode: string = "";
    inveTypeDesc: string = "";

    productConfig: ProductConfig = new ProductConfig();
}
