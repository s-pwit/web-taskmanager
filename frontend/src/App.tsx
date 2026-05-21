import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Layout from './components/Layout.tsx'
import Dashboard from './components/Dashboard.tsx'
import TaskManagement from './components/TaskManagement.tsx'

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
})

/**
 * App – Einstiegspunkt der gesamten Anwendung.
 *
 * Hier wird das zentrale Design-System (Theme) definiert und das Routing eingerichtet.
 * Alle Seiten (Dashboard und TaskManagement) werden innerhalb eines einheitlichen
 * Layouts gerendert.
 *
 * Best Practice:
 * - ThemeProvider möglichst hoch in der Komponentenhierarchie platzieren
 * - CssBaseline für konsistentes Browser-Reset nutzen
 * - Routing klar und übersichtlich strukturieren
 *
 * Wichtig zu wissen:
 * Durch die zentrale Definition des Themes hier können alle MUI-Komponenten
 * im gesamten Projekt automatisch das gleiche Design verwenden. Änderungen
 * am Theme wirken sich global aus – das spart enorm viel Zeit und sorgt
 * für visuelle Konsistenz.
 */
function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/tasks" element={<TaskManagement />} />
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

export default App