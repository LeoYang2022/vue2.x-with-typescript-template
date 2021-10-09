// 构造具有默认值的类
function createClass(className, attributeList = [], defaultMessage = "") {
    if(className && attributeList.length > 0) {
        let result = "\nexport class " + className + " {\n";
        for(let attr of attributeList) {
            result = result + "\t" + attr + ": string = '" + defaultMessage + "';\n";
        }
        result = result + "}\n";
        return result;
    }
    return "参数有误！";
}

let className = "testClass";
let list = ["title", "subTitle", "showField", "showName", "date", "otherAttr"];

createClass(className, list, "初始化-暂无数据");



// 构造具有默认值的类
function createInterface(interfaceName, attributeList = []) {
    if(interfaceName && attributeList.length > 0) {
        let result = "\nexport interface " + interfaceName + " {\n";
        for(let attr of attributeList) {
            result = result + "\t" + attr + ": string;\n";
        }
        result = result + "}\n";
        return result;
    }
    return "参数有误！";
}

let interfaceName = "testInterface";
let list = ["title", "subTitle", "showField", "showName", "date", "otherAttr"];

createInterface(interfaceName, list);
