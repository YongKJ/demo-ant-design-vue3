import {MessageType} from "element-ui/types/message";
import {Message, MessageBox} from "element-ui";
import {MessageBoxData} from "element-ui/types/message-box";
import {ResizeService} from "@/common/core/ResizeService";

export abstract class TipsService extends ResizeService {

    protected constructor() {
        super();
    }

    protected warningConfirm(message: string, title: string, thenFunc: () => void, catchFunc: () => void): void {
        TipsService.confirm(message, title, "warning", thenFunc, catchFunc);
    }

    protected errorConfirm(message: string, title: string): void {
        TipsService.confirm(message, title, "error");
    }

    private static confirm(message: string, title: string, type: MessageType, thenFunc?: () => void, catchFunc?: () => void): void {
        MessageBox.confirm(message, title, {
            confirmButtonText: "确定",
            cancelButtonText: "返回",
            type: type
        }).then(thenFunc || (() => {
        })).catch(catchFunc || (() => {
        }));
    }

    protected inputPrompt(message: string, title: string, inputInfo: string, thenFunc: (message: MessageBoxData) => void, catchFunc: () => void): void {
        this.prompt(message, title, inputInfo, undefined, thenFunc, catchFunc);
    }

    protected prompt(message: string, title: string, inputInfo: string, inputValue?: string, thenFunc?: (message: MessageBoxData) => void, catchFunc?: () => void): void {
        MessageBox.prompt(message, title, {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            inputPlaceholder: inputInfo,
            inputValue: inputValue
        }).then(thenFunc || (() => {
        })).catch(catchFunc || (() => {
        }));
    }

    protected success(msg: string): void {
        Message.success(msg);
    }

    protected warning(msg: string): void {
        Message.warning(msg);
    }

    protected error(msg: string): void {
        Message.error(msg);
    }

    protected info(msg: string): void {
        Message.info(msg);
    }

}