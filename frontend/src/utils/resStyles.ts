import styles from '../styles/App.module.scss';
import big from '../styles/BigScreen.module.scss';
import mid from '../styles/MiddleScreen.module.scss';
import small from '../styles/SmallScreen.module.scss';
import phone from '../styles/PhoneScreen.module.scss';

/* Функция, которая добавляется в className чтобы добавлять специальные стили в зависимости от размера экрана */
function resStyles(name: string, resolution: {
     isPhone: boolean,
     isSmallScreen: boolean,
     isMidScreen: boolean,
     isBigScreen: boolean
}) {
     switch (true) {
          case resolution.isPhone:
               return phone[name];
          case resolution.isSmallScreen:
               return small[name];
          case resolution.isMidScreen:
               return mid[name];
          case resolution.isBigScreen:
               return big[name];
          default:
               return '';
     }
}

export default resStyles;