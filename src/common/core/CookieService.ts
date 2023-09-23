import Vue from "vue";
import {TipsService} from "@/common/core/TipsService";

export abstract class CookieService extends TipsService {

    protected constructor() {
        super();
    }

    protected abstract get vue(): Vue;

    protected set(key: string, value: any, time?: number): void {
        time = time || 24 * 60 * 60;
        this.vue.$cookies.set(key, value, time);
    }

    protected modify(key: string, value: any): void {
        if (this.has(key)) this.remove(key);
        this.set(key, value);
    }

    protected has(key: string): boolean {
        return this.vue.$cookies.isKey(key);
    }

    protected remove(key: string): void {
        this.vue.$cookies.remove(key);
    }

    protected get(key: string): any {
        return this.vue.$cookies.get(key);
    }

}