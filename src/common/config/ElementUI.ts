import {App} from "vue";
import {
    ElRow,
    ElCol,
    ElLink,
    ElIcon,
    ElMain,
    ElForm,
    ElTable,
    ElInput,
    ElImage,
    ElButton,
    ElDialog,
    ElUpload,
    ElOption,
    ElSelect,
    ElTooltip,
    ElCheckbox,
    ElProgress,
    ElDropdown,
    ElFormItem,
    ElContainer,
    ElPagination,
    ElPageHeader,
    ElTableColumn,
    ElButtonGroup,
    ElDropdownMenu,
    ElDropdownItem,
    ElConfigProvider
} from "element-plus";

import {
    UploadFilled,
    CaretBottom,
    Back,
    Right,
    Folder,
    FolderOpened,
    FolderChecked,
    Search,
    StarFilled,
    Tools,
    CopyDocument,
    DocumentAdd,
    FolderAdd,
    Upload,
    Link,
    Download,
    Sell,
    Delete,
    DocumentCopy,
    Scissor,
    List,
    RefreshRight,
    Refresh,
    Clock,
    DataAnalysis,
    Connection,
    RefreshLeft,
    Warning,
    MessageBox,
    EditPen,
    PictureFilled,
    SoldOut,
    Document,
    VideoPlay,
    FolderDelete,
    DocumentDelete,
    VideoCamera,
    Picture,
    Handbag,
    Memo,
    Tickets,
    Brush,
    MagicStick,
    Key,
    Plus,
    Minus,
    Share,
    IceCreamRound,
    Platform,
    Notification,
    MoreFilled,
    Notebook,
// @ts-ignore
} from "@element-plus/icons-vue";

export const ElementUI = {
    install(Vue: App) {
        Vue.component(ElRow.name, ElRow);
        Vue.component(ElCol.name, ElCol);

        Vue.component(ElForm.name, ElForm);
        Vue.component(ElInput.name, ElInput);
        Vue.component(ElUpload.name, ElUpload);
        Vue.component(ElFormItem.name, ElFormItem);

        Vue.component(ElButton.name, ElButton);
        Vue.component(ElSelect.name, ElSelect);
        Vue.component(ElOption.name, ElOption);
        Vue.component(ElDialog.name, ElDialog);
        Vue.component(ElCheckbox.name, ElCheckbox);

        Vue.component(ElProgress.name, ElProgress);
        Vue.component(ElPagination.name, ElPagination);
        Vue.component(ElPageHeader.name, ElPageHeader);
        Vue.component(ElButtonGroup.name, ElButtonGroup);

        Vue.component(ElMain.name, ElMain);
        Vue.component(ElTooltip.name, ElTooltip);
        Vue.component(ElDropdown.name, ElDropdown);
        Vue.component(ElContainer.name, ElContainer);
        Vue.component(ElDropdownMenu.name, ElDropdownMenu);
        Vue.component(ElDropdownItem.name, ElDropdownItem);

        Vue.component(ElLink.name, ElLink);
        Vue.component(ElIcon.name, ElIcon);
        Vue.component(ElImage.name, ElImage);
        Vue.component(ElTable.name, ElTable);
        Vue.component(ElTableColumn.name, ElTableColumn);
        Vue.component(ElConfigProvider.name, ElConfigProvider);

        Vue.component(UploadFilled.name, UploadFilled);
        Vue.component(CaretBottom.name, CaretBottom);
        Vue.component(Back.name, Back);
        Vue.component(Right.name, Right);
        Vue.component(Folder.name, Folder);
        Vue.component(FolderOpened.name, FolderOpened);
        Vue.component(FolderChecked.name, FolderChecked);
        Vue.component(Search.name, Search);
        Vue.component(StarFilled.name, StarFilled);
        Vue.component(Tools.name, Tools);
        Vue.component(CopyDocument.name, CopyDocument);
        Vue.component(DocumentAdd.name, DocumentAdd);
        Vue.component(FolderAdd.name, FolderAdd);
        Vue.component(Upload.name, Upload);
        Vue.component(Link.name, Link);
        Vue.component(Download.name, Download);
        Vue.component(Sell.name, Sell);
        Vue.component(Delete.name, Delete);
        Vue.component(DocumentCopy.name, DocumentCopy);
        Vue.component(Scissor.name, Scissor);
        Vue.component(List.name, List);
        Vue.component(RefreshRight.name, RefreshRight);
        Vue.component(Refresh.name, Refresh);
        Vue.component(Clock.name, Clock);
        Vue.component(DataAnalysis.name, DataAnalysis);
        Vue.component(Connection.name, Connection);
        Vue.component(RefreshLeft.name, RefreshLeft);
        Vue.component(Warning.name, Warning);
        Vue.component(MessageBox.name, MessageBox);
        Vue.component(EditPen.name, EditPen);
        Vue.component(PictureFilled.name, PictureFilled);
        Vue.component(SoldOut.name, SoldOut);
        Vue.component(Document.name, Document);
        Vue.component(VideoPlay.name, VideoPlay);
        Vue.component(FolderDelete.name, FolderDelete);
        Vue.component(DocumentDelete.name, DocumentDelete);
        Vue.component(VideoCamera.name, VideoCamera);
        Vue.component(Picture.name, Picture);
        Vue.component(Handbag.name, Handbag);
        Vue.component(Memo.name, Memo);
        Vue.component(Tickets.name, Tickets);
        Vue.component(Brush.name, Brush);
        Vue.component(MagicStick.name, MagicStick);
        Vue.component(Key.name, Key);
        Vue.component(Plus.name, Plus);
        Vue.component(Minus.name, Minus);
        Vue.component(Share.name, Share);
        Vue.component(IceCreamRound.name, IceCreamRound);
        Vue.component(Platform.name, Platform);
        Vue.component(Notification.name, Notification);
        Vue.component(MoreFilled.name, MoreFilled);
        Vue.component(Notebook.name, Notebook);
    }
}
