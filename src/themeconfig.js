import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette:{
        primary:{
            main: "#AB61E5",
            second: "#FFFFFF",
            navbar: "#F2F3F4"
        },
        secondary:{
            main: "#ACB1B6",
            second: "#D9DCDE"
        }


    },
    components:{
        MuiButton:{
            defaultProps:{
                variant: "contained",
                size: "large"
            },
            styleOverrides:{
                root:{
                    textTransform: "none"
                }
            }
        }
    }
})