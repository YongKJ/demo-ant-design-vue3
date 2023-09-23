import {CommonService} from "@/common/core/CommonService";
import Vue from "vue";
import {Class} from "@/common/pojo/enum/Class";
import {RouterService} from "@/common/core/RouterService";

export abstract class PatchService extends RouterService {

    protected constructor() {
        super();
    }

    protected abstract getService<T extends CommonService<any>>(clazz: Class | (new (vue: Vue) => T), index?: number): T;

}
