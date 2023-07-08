export default function shortenText(input: string, maxLength: number): string {
     if (input.length <= maxLength) {
       // Если длина входного текста меньше или равна maxLength, возвращаем исходный текст без изменений
       return input;
     }
   
     // Укорачиваем текст до maxLength символов и добавляем многоточие в конце
     const shortenedText = input.substring(0, maxLength) + "...";
   
     return shortenedText;
}