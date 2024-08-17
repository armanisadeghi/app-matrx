// components/ThemeProvider.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';
type ContrastColor = 'standard' | 'red' | 'blue' | 'green' | 'violet' | 'yellow';

interface ThemeContextProps {
    theme: Theme;
    contrastColor: ContrastColor;
    toggleTheme: () => void;
    setContrastColor: (color: ContrastColor) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [contrastColor, setContrastColor] = useState<ContrastColor>('standard');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const handleSetContrastColor = (color: ContrastColor) => {
        setContrastColor(color);
    };

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('contrast-red', contrastColor === 'red');
        document.documentElement.classList.toggle('contrast-blue', contrastColor === 'blue');
        document.documentElement.classList.toggle('contrast-green', contrastColor === 'green');
        document.documentElement.classList.toggle('contrast-violet', contrastColor === 'violet');
        document.documentElement.classList.toggle('contrast-yellow', contrastColor === 'yellow');
    }, [theme, contrastColor]);

    return (
        <ThemeContext.Provider value={{ theme, contrastColor, toggleTheme, setContrastColor: handleSetContrastColor }}>
            <div className={`${theme} contrast-${contrastColor}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
