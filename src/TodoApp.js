import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import "./styles.css";

export default function TodoApp() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () => createMuiTheme({
            palette: {
                type: prefersDarkMode ? 'dark' : 'light',
            },
        }),
        [prefersDarkMode],
    );
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Typography component="div" align="center" style={{height: '100vh' }}>
                    <h1>APY Optimizer</h1>
                    <AddTodo />
                    <TodoList />
                </Typography>                
            </Container>
        </ThemeProvider>
    );
}
