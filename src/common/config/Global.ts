export class Global {

    private static _BASE_URL = "http://192.168.10.126:7799";

    private static readonly _LOG_ENABLE = true;

    static get LOG_ENABLE(): boolean {
        return this._LOG_ENABLE;
    }

    static get BASE_URL(): string {
        return this._BASE_URL;
    }

}