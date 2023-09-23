import {DataUtil} from "@/common/util/DataUtil";
import {LogUtil} from "@/common/util/LogUtil";
import {Log} from "@/common/pojo/dto/Log";
import crypto from "crypto-js";

export class GenUtil {

    private constructor() {
    }

    public static getSizeStr(size: number): string {
        if (size == -1) return "";
        let tempSize = size / 1024 / 1024 / 1024 / 1024 / 1024 / 1024;
        let sizeStr = tempSize.toFixed(2) + " EB";
        if (tempSize < 1) {
            tempSize = size / 1024 / 1024 / 1024 / 1024 / 1024;
            sizeStr = tempSize.toFixed(2) + " PB";
        }
        if (tempSize < 1) {
            tempSize = size / 1024 / 1024 / 1024 / 1024;
            sizeStr = tempSize.toFixed(2) + " TB";
        }
        if (tempSize < 1) {
            tempSize = size / 1024 / 1024 / 1024;
            sizeStr = tempSize.toFixed(2) + " GB"
        }
        if (tempSize < 1) {
            tempSize = size / 1024 / 1024;
            sizeStr = tempSize.toFixed(2) + " MB"
        }
        if (tempSize < 1) {
            tempSize = size / 1024;
            sizeStr = tempSize.toFixed(2) + " KB"
        }
        if (tempSize < 1) {
            sizeStr = size.toFixed(2) + " B"
        }
        return sizeStr;
    }

    public static checkLocalHostName(): boolean {
        let hostname = window.location.hostname;
        return Array.of(
            "192.168.3.4",
            "192.168.50.171",
            "localhost",
            "127.0.0.1",
        ).includes(hostname);
    }

    public static getUrlHost(): string {
        let url = window.location.href;
        let index = url.lastIndexOf("/");
        return url.substring(0, index);
    }

    public static getMd5Str(str: string): string {
        return crypto.MD5(str).toString().toUpperCase();
    }

    public static checkDesktop(): boolean {
        return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) == null;
    }

    public static strToList(str?: string, separator?: string): Array<string> {
        if (typeof str === "undefined" || str.length === 0) return new Array<string>();
        return str.trim().split(separator == null ? " " : separator);
    }

    public static strToString(str?: string | null): string {
        return typeof str === "string" ? str :
            (typeof str === "undefined" || str == null ? "" :
                (typeof str === "object" ? GenUtil.prettyFormat(JSON.stringify(str)) :
                    // @ts-ignore
                    (Array.isArray(str) ? GenUtil.prettyFormat(str.toString()) : str + "")));
    }

    public static prettyFormat(str: string): string {
        try {
            // 设置缩进为2个空格
            str = JSON.stringify(JSON.parse(str), null, 2);
            str = str
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;');
            return str.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
                let cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return match;
            });
        } catch (e) {
            LogUtil.loggerLine(Log.of("GenUtil", "prettyFormat", "err", e));
            return "";
        }
    }

    public static listToStr(lstStr: Array<string>, separator?: string): string {
        let tempStr = "";
        lstStr.forEach(str => tempStr += str + (separator == null ? " " : separator));
        return tempStr.substring(0, tempStr.length - (separator == null ? 1 : separator.length));
    }

    public static recAddAll(recOldData: Record<string, any>, recNewData: Record<string, any>): void {
        for (let key of Object.keys(recNewData)) {
            recOldData[key] = recNewData[key];
        }
    }

    public static randomNum(minNum: number, maxNum: number): number {
        switch (arguments.length) {
            case 1:
                return parseInt(String(Math.random() * minNum + 1), 10);
            case 2:
                return parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum), 10);
            default:
                return 0;
        }
    }

    private static isIncomingMedia(res: Record<string, any>): boolean {
        if ((res.mediaType === "video" || res.id.toLowerCase().indexOf("video") > -1) &&
            res.type === "inbound-rtp" && res.id.indexOf("rtcp") < 0) {
            return true;
        } else if (res.type == 'ssrc' && res.bytesReceived &&
            (res.googCodecName === "VP8" || res.googCodecName === "")) {
            return true;
        }
        return false;
    }

    public static timer(func: () => void, time: number): void {
        setTimeout(func, time);
    }

    public static createLinkTag(url: string, fileName: string): void {
        let ele = document.createElement('a');
        ele.download = fileName;
        ele.href = url;
        ele.style.display = 'none';
        document.body.appendChild(ele);
        ele.click();
        document.body.removeChild(ele);
    }

    public static sleep(waitTimeInMs: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, waitTimeInMs));
    }

    public static strToNumber(str?: string | null | number): number {
        return typeof str === "string" ? Number(str) : (typeof str === "undefined" || str == null ? 0 : str);
    }

    public static isJson<T>(obj: T): boolean {
        return typeof obj !== "undefined" && obj !== null && (<Record<string, any>>obj).constructor === {}.constructor;
    }

    public static arrayToObjList<T>(lstData: Array<Record<string, any> | Map<string, any>>, clazz: (new () => T) | T): Array<T> {
        let lstObj = new Array<T>();
        for (let data of lstData) {
            lstObj.push(
                this.isJson(data) ?
                    this.recToObj(data, clazz) :
                    this.mapToObj(<Map<string, any>>data, clazz)
            );
        }
        return lstObj;
    }

    public static mapToObj<T>(mapData: Map<string, any>, clazz: (new () => T) | T): T {
        let entity = typeof clazz === "function" ?
            new (<new () => T>clazz)() : clazz;
        let methodNames = DataUtil.getPrototypes(clazz);
        for (let methodName of methodNames) {
            entity[<keyof T>methodName] = mapData.get(methodName);
        }
        return entity;
    }

    public static recToObj<T>(recData: Record<string, any>, clazz: (new () => T) | T): T {
        let entity = typeof clazz === "function" ?
            new (<new () => T>clazz)() : clazz;
        let methodNames = DataUtil.getPrototypes(clazz);
        for (let methodName of methodNames) {
            entity[<keyof T>methodName] = recData[methodName];
        }
        return entity;
    }

    public static arrayToMapList<T>(lstObj: Array<T>): Array<Map<string, any>> {
        let lstData = new Array<Map<string, any>>();
        for (let obj of lstObj) {
            lstData.push(
                !(this.isJson(obj)) ?
                    this.objToMap(obj) :
                    this.recToMap(obj)
            );
        }
        return lstData;
    }

    public static recToMap(recData: Record<string, any>): Map<string, any> {
        let mapData = new Map<string, any>();
        for (let key of Object.keys(recData)) {
            mapData.set(key, recData[key]);
        }
        return mapData;
    }

    public static objToMap<T>(obj: T): Map<string, any> {
        let mapData = new Map<string, any>();
        let methodNames = DataUtil.getPrototypes(obj);
        for (let methodName of methodNames) {
            mapData.set(methodName, obj[<keyof T>methodName]);
        }
        return mapData;
    }

    public static recToStr(record: Record<string, any> | Array<Record<string, any>>, pretty?: boolean): string {
        return typeof pretty === "undefined" ? JSON.stringify(record) : JSON.stringify(record, null, 2);
    }

    public static arrayToRecList<T>(lstObj: Array<T>): Array<Record<string, any>> {
        let lstData = new Array<Record<string, any>>();
        for (let obj of lstObj) {
            lstData.push(
                !(obj instanceof Map) ?
                    this.objToRecord(obj) :
                    this.mapToRecord(<Map<string, any>>obj)
            );
        }
        return lstData;
    }

    public static objToRecord<T>(obj: T): Record<string, any> {
        let recData: Record<string, any> = {};
        let methodNames = DataUtil.getPrototypes(obj);
        for (let methodName of methodNames) {
            recData[methodName] = obj[<keyof T>methodName];
        }
        return recData;
    }

    public static mapToRecord(mapData: Map<string, any>): Record<string, any> {
        let recData: Record<string, any> = {};
        let regStr = "^[+-]?\\d*(\\.\\d*)?(e[+-]?\\d+)?$";
        let regex = new RegExp(regStr);
        for (let [key, value] of mapData) {
            if (typeof value === "string" && value.length === 0) {
                recData[key] = value;
                continue;
            }
            recData[key] = regex.test(value) ? this.strToNumber(value) : value;
        }
        return recData;
    }

    public static strToRecord(str: string): Record<string, any> | Array<Record<string, any>> {
        return JSON.parse(str);
    }

    public static getKeys(data: Map<string, any> | Record<string, any>): Array<string> {
        if (GenUtil.isJson(data)) {
            return Object.keys(data);
        }
        let lstKey = new Array<string>();
        for (let key of data.keys()) {
            lstKey.push(key);
        }
        return lstKey;
    }

    public static getUrlKey(key: string): string | undefined {
        let url = window.location.href;
        if (url.indexOf("?") !== -1) {
            let cs_str = url.split('?')[1];
            let cs_arr = cs_str.split('&');
            let cs: Record<string, any> = {};
            for (let i = 0; i < cs_arr.length; i++) {
                cs[cs_arr[i].split('=')[0]] = cs_arr[i].split('=')[1];
            }
            return (<Record<string, any>>cs)[key];
        }
        return '';
    }

}