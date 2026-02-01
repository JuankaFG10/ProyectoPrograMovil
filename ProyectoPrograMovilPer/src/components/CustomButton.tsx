import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "forgotPassword"; 
}

export default function CustomButton ({
    title,
    onClick,
    variant = "primary"
}: CustomButtonProps){
    const styles = getStyles(variant);
 
    return(
       <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
                <Text
                style={styles.text}>
                    {title}
                </Text>
        </TouchableOpacity>
    );
}

const getStyles = (variant: 'primary' | 'secondary' | 'forgotPassword' ) => 
    StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center',
        width: "80%",
        backgroundColor: 
            variant === "primary" ? "#1be7c8" : 
            variant === "secondary" ? "red" : "transparent",
        borderRadius: 8,
        borderWidth: variant === "forgotPassword" ? 0 : 1,
        borderColor: "#ffffff",
    },
    text: {
        color: 
            variant === "primary" ? "white" : 
            variant === "secondary" ? "white" : "#1be7c8",
        fontSize: variant === "forgotPassword" ? 14 : 18,
        fontWeight: "500",
        textDecorationLine: variant === "forgotPassword" ? "underline" : "none"
    }
});