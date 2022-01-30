import { colors } from "./colors";

export const styles = {
    navBar: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        color: "#78798B",
        backgroundColor: "#F8F8F8"
    },
    paragraph: {
        paddingRight: "40px"
    },
    blueButton: {
        borderRadius: "5px",
        color: "white",
        backgroundColor:colors.secondary.main,
        height: "130%"
    },
    greenButton: {
        borderRadius: "5px",
        color: "white",
        backgroundColor:colors.secondary.light,
        height: "130%"
    },
    template: {
        display: "grid",
        placeItems:"center"
    },
    table: {
        textAlign: "left",
        borderSpacing: "15px",
        border: "1px"
    },
}