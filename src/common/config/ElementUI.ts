import {VueConstructor} from 'vue'
import {
    Row,
    Col,
    Link,
    Main,
    Form,
    Table,
    Input,
    Image,
    Button,
    Dialog,
    Upload,
    Option,
    Select,
    Tooltip,
    Checkbox,
    Progress,
    Dropdown,
    FormItem,
    Container,
    Pagination,
    PageHeader,
    TableColumn,
    ButtonGroup,
    DropdownMenu,
    DropdownItem,
} from "element-ui";

export const ElementUI = {
    install(Vue: VueConstructor) {
        Vue.component(Row.name, Row);
        Vue.component(Col.name, Col);

        Vue.component(Form.name, Form);
        Vue.component(Input.name, Input);
        Vue.component(Upload.name, Upload);
        Vue.component(FormItem.name, FormItem);

        Vue.component(Button.name, Button);
        Vue.component(Select.name, Select);
        Vue.component(Option.name, Option);
        Vue.component(Dialog.name, Dialog);
        Vue.component(Checkbox.name, Checkbox);

        Vue.component(Progress.name, Progress);
        Vue.component(Pagination.name, Pagination);
        Vue.component(PageHeader.name, PageHeader);
        Vue.component(ButtonGroup.name, ButtonGroup);

        Vue.component(Main.name, Main);
        Vue.component(Tooltip.name, Tooltip);
        Vue.component(Dropdown.name, Dropdown);
        Vue.component(Container.name, Container);
        Vue.component(DropdownMenu.name, DropdownMenu);
        Vue.component(DropdownItem.name, DropdownItem);

        Vue.component(Link.name, Link);
        Vue.component(Image.name, Image);
        Vue.component(Table.name, Table);
        Vue.component(TableColumn.name, TableColumn);
    }
}