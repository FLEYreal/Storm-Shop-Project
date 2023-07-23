// Все нужные импорты
import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";

// Переменные стилей
const $buttonColor = '#fff';

const $buttonPinkBackground = '#FF7BB3'
const $buttonPinkBackground_hover = '#ff9dc7'
const $buttonPinkBackground_active = '#ffbed9'
const $buttonPinkBackground_loading = '#9c486b'

const $buttonBlueBackground = '#5B66FF'
const $buttonBlueBackground_hover = '#7e87ff'
const $buttonBlueBackground_active = '#a7adff'
const $buttonBlueBackground_loading = '#34398d'


// Стили
export const PinkButtonStyle = {
    borderRadius: '10px',
    backgroundColor: $buttonPinkBackground,
    color: $buttonColor,
    boxShadow: 'none',
    textShadow: 'none',
    margin: '6px',
    fontSize: '20px',
    fontWeight: '500',
    padding: '6px 18px',
    border: 'none',

    '&:hover': {
        backgroundColor: $buttonPinkBackground_hover,
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    '&:active': {
        backgroundColor: $buttonPinkBackground_active,
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    '&.MuiLoadingButton-root.Mui-disabled': {  // стили для состояния загрузки
        color: $buttonColor,
        borderColor: $buttonPinkBackground_loading,
    },
}
export const BlueButtonStyle = {
    borderRadius: '10px',
    backgroundColor: $buttonBlueBackground,
    color: $buttonColor,
    boxShadow: 'none',
    textShadow: 'none',
    margin: '6px',
    fontSize: '20px',
    fontWeight: '500',
    padding: '6px 18px',
    border: 'none',

    '&:hover': {
        backgroundColor: $buttonBlueBackground_hover,
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    '&:active': {
        backgroundColor: $buttonBlueBackground_active,
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    '&.MuiLoadingButton-root.Mui-disabled': {  // стили для состояния загрузки
        color: $buttonColor,
        borderColor: $buttonBlueBackground_loading,
    },
}
export const StormButtonStyle = {
    borderRadius: '10px',
    color: $buttonColor,
    boxShadow: 'none',
    textShadow: 'none',
    margin: '7px',
    fontSize: '20px',
    fontWeight: '500',
    padding: '8px 30px',
    border: 'none',

    '&:hover': {
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    '&:active': {
        boxShadow: 'none',
        border: 'none',
        cursor: 'pointer',
    },
}
export const StormIconButtonStyle = {
    color: $buttonColor,
    boxShadow: 'none',
    textShadow: 'none',
    margin: '7px',
    fontSize: '20px',
    fontWeight: '500',
    padding: '8px',
    border: 'none'
}


// Компоненты
export const PinkButton = styled(LoadingButton)(PinkButtonStyle)
export const BlueButton = styled(LoadingButton)(BlueButtonStyle)
export const StormButton = styled(LoadingButton)(StormButtonStyle)
export const StormIconButton = styled(IconButton)(StormIconButtonStyle)