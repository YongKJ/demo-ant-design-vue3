import Vue from "vue";
import EventEmitter2 from "eventemitter2";
import {CommonService} from "@/common/core/CommonService";
import {Class} from "@/common/pojo/enum/Class";

export interface BaseService<U> {

    vue: Vue;

    service: U;

    emitter: EventEmitter2;

    emit(event: string, ...values: any[]): void;

    on(event: string, func: (...values: any[]) => void): void;

    hasService<T extends CommonService<any>>(clazz: Class | (new (vue: Vue) => T), index?: number): boolean;

    getService<T extends CommonService<any>>(clazz: Class | (new (vue: Vue) => T), index?: number): T;

    getValue(name: string): any;

    getProp(name: string): any;

    getRef(name: string): any;

}