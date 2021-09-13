import { createTheme } from "@material-ui/core";
import { colors } from '@material-ui/core'


import pallete from "./__pallete";
import typography from "./__typography";


const theme = createTheme({
    palette: {
       ...pallete 
    },
    typography: {
        ...typography
    }
})

export default theme