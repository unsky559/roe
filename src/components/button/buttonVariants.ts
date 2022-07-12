import styles from "./button.module.scss";

export enum ButtonVariants{
    DEFAULT = "btn",
    SECONDARY = "btn-secondary",
    EDITOR = "btn-editor"
}

export const buttonClassMap = new Map([
    [ButtonVariants.DEFAULT, styles.btn],
    [ButtonVariants.SECONDARY, styles.btnSecondary],
    [ButtonVariants.EDITOR, styles.btnEditor],
]);
