import { StyleSheet, TouchableOpacity, Text } from "react-native";

export const IconBtn = ({label, variant = "default", isLoading, className, icon, iconOrientation = "start", children, isDisabled, mode, ...other}) => {
    return (
        <TouchableOpacity title={label ?? (typeof children == "string" ? children : "_")} style={[styles.regular_btn, styles[`regular_btn_${variant}`], isLoading?.status == true ? styles.isLoading : "", styles[`regular_btn_mode_${mode}`], className ?? ""]} disabled={isLoading?.status} {...other}>
            {/* {icon && iconOrientation === "start" && <span data-elm-type={"btn_icon"}>{icon}</span>} */}
            {/* {isLoading?.status === true ? <span className={styles.regular_btn_loading_icon}>{isLoading.iconAlt ?? <AiOutlineLoading />}</span> : (label || children)} */}
            {/* {icon && iconOrientation === "end" && <span data-elm-type={"btn_icon"}>{icon}</span>} */}
            {label ? <Text style={[styles.appButtonText, styles[`appButtonText_${variant}`]]}>{label}</Text> : (typeof children === "string" ? <Text style={[styles.appButtonText, styles[`appButtonText_${variant}`]]}>{children}</Text> : children)}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    regular_btn: {
        width: 44,
        height: 44,
        padding: 10,
        borderRadius: 20,
        color: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    regular_btn_primary: {
        backgroundColor: "#259CD5"
    },
    regular_btn_default: {
        backgroundColor: "#D9D9D9",
        color: "black"
    },
    appButtonText: {
        // fontWeight: 700,
        fontSize: 16,
        color: "#fff"
    },
    appButtonText_default: {
        color: "black"
    }
})