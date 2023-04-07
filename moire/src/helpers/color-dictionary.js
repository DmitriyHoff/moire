const colors = {
  Red: 'Красный',
  Blue: 'Синий',
  Green: 'Зелёный',
  Yellow: 'Жёлтый',
  Purple: 'Фиолетовый',
  Pink: 'Розовый',
  black: 'Чёрный',
  white: 'Белый',
};

/** Возвращает соотвестветствующее значение из словаря или `key`
 * @param {string} key Цвет в словаре
 * @returns Перевод
 */
export default function translateColorName(colorName) {
  const key = Object.keys(colors).find((key) => {
    return key.toUpperCase().trim() === colorName.toUpperCase().trim();
  });

  // если ключ не найден - возвращаем значение без перевода
  return key ? colors[key] : colorName;
}
