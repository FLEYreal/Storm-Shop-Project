export default function lighterRgb(rgba:string, color:number | string) {
    // Получить уровень прозрачности изначального цвета
    let value = rgba
      .split(/[()]/)[1]
      .split(',')[3];
  
    // Найти все совпадения
    let matches = rgba.match(new RegExp(value, 'g'));
  
    // Найти индекс последнего совпадения
    let lastIndex = rgba.lastIndexOf(matches![matches!.length - 1]);
  
    // Разделить строку на две части и заменить значение
    let modifiedString = rgba.substring(0, lastIndex) + ' ' + String(color) + rgba.substring(lastIndex + value.length);
  
    return modifiedString;
  }
  