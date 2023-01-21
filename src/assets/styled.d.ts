import 'styled-components';
import Header from '../components/header/index';
import { Title } from '../components/header/style';


declare module 'styled-components'
{
    export interface DefaultTheme {
        borderRadius?: string
        colors: {
                separator: Interpolation<ThemedStyledProps<ViewProps & RefAttributes<View>, DefaultTheme>>;
                priceUp: Interpolation<ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>>;
                symb: Interpolation<ThemedStyledProps<TextProps & RefAttributes<Text>, DefaultTheme>>;
                main: string
                title: string
                name: string
            }
        }
    }
       
    
