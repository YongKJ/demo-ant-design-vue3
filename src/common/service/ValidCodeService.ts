import {CommonService} from "@/common/core/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";
import autobind from "autobind-decorator";

export class ValidCodeService extends CommonService<ValidCodeService> {

    private _validCode: string;
    private readonly length: number;
    private _codeList: Array<Record<string, any>>;

    public constructor(vue: Vue) {
        super(vue);
        this._validCode = "";
        this.length = this.getProp("length");
        this._codeList = new Array<Record<string, any>>();
    }

    @autobind
    public refreshCode(): void {
        this.createdCode();
    }

    private createdCode(): void {
        const codeList = new Array<Record<string, any>>();
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
        // 生成
        for (let i = 0; i < this.length; i++) {
            const rgb = [
                Math.round(Math.random() * 220),
                Math.round(Math.random() * 240),
                Math.round(Math.random() * 200)
            ];
            codeList.push({
                color: `rgb(${rgb})`,
                padding: `${[Math.floor(Math.random() * 10)]}px`,
                code: chars.charAt(Math.floor(Math.random() * chars.length)),
                fontSize: `${10 + (+[Math.floor(Math.random() * 10)] + 6)}px`,
                transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
            });
        }
        // 指向
        this._validCode = codeList.map(item => item.code).join('');
        this._codeList = codeList;
    }

    getStyle(data: Record<string, any>): string {
        return `
            color: ${data.color};
            padding: ${data.padding};
            font-size: ${data.fontSize};
            transform: ${data.transform};
          `;
    }

    get codeList(): Array<Record<string, any>> {
        return this._codeList;
    }

    get validCode(): string {
        return this._validCode;
    }

    protected getClassName(): string {
        return Class.ValidCodeService;
    }

    static get class(): string {
        return Class.ValidCodeService;
    }

}