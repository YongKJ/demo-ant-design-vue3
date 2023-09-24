import {App} from "vue";
import {
    ElRow,
    ElCol,
    ElLink,
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
    ElConfigProvider,
} from "element-plus";

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
        Vue.component(ElImage.name, ElImage);
        Vue.component(ElTable.name, ElTable);
        Vue.component(ElTableColumn.name, ElTableColumn);
        Vue.component(ElConfigProvider.name, ElConfigProvider);
    }
}