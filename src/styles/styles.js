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
        backgroundColor:colors.secondary.main
    },
    greenButton: {
        borderRadius: "5px",
        color: "white",
        backgroundColor:colors.secondary.light,
        height: "130%"
    },
    template: {
        display: "grid",
        placeItems:"unset",
        width: "50%"

    },
    table: {
        textAlign: "left",
        borderCollapse: "collapse",
        width: "100%"
    },
    td: {
        border: "1px solid black",
        textAlign: "left"
    },
    input: {
        borderRadius: "5%",
        width:"50%",
        marginBottom: "5%",
    },
}