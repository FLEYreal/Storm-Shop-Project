import styles from '../../App.module.scss';

/* Функция, которая добавляется в className чтобы добавлять специальные стили в зависимости от размера экрана */
function resStyles(name: string, resolution: {
     isPhone: boolean,
     isSmallScreen: boolean,
     isMidScreen: boolean,
     isBigScreen: boolean
}) {
     switch (true) {
          case resolution.isPhone:
               return styles[`${name}_p`];
          case resolution.isSmallScreen:
               return styles[`${name}_s`];
          case resolution.isMidScreen:
               return styles[`${name}_m`];
          case resolution.isBigScreen:
               return styles[`${name}_b`];
          default:
               return '';
     }
}

export default resStyles;