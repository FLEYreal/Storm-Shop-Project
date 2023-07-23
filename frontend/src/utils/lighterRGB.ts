// Данная функция делает принимаемый цвет той прозрачности, которую мы передали вторым аргументом
export default function lighterRgb(rgba: string, color: number | string) {
    // Получить уровень прозрачности изначального цвета
    const value = rgba
        .split(/[()]/)[1]
        .split(',')[3];

    // Найти все совпадения
    const matches = rgba.match(new RegExp(value, 'g'));

    // Найти индекс последнего совпадения
    const lastIndex = rgba.lastIndexOf(matches![matches!.length - 1]);

    // Разделить строку на две части и заменить значение
    const modifiedString = rgba.substring(0, lastIndex) + ' ' + String(color) + rgba.substring(lastIndex + value.length);

    return modifiedString;
}