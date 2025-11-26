const easyDictionary = [
  { en: "day", ua: "день" },
  { en: "night", ua: "ніч" },
  { en: "sun", ua: "сонце" },
  { en: "moon", ua: "місяць" },
  { en: "star", ua: "зірка" },
  { en: "tree", ua: "дерево" },
  { en: "flower", ua: "квітка" },
  { en: "rain", ua: "дощ" },
  { en: "snow", ua: "сніг" },
  { en: "wind", ua: "вітер" },
  { en: "mountain", ua: "гора" },
  { en: "river", ua: "річка" },
  { en: "sea", ua: "море" },
  { en: "sky", ua: "небо" },
  { en: "food", ua: "їжа" },
  { en: "drink", ua: "напій" },
  { en: "cold", ua: "холодо" },
  { en: "hot", ua: "гаряче" },
  { en: "fast", ua: "швидко" },
  { en: "slow", ua: "повільно" }
];

const mediumDictionary = [
  { en: "forest", ua: "ліс" },
  { en: "island", ua: "острів" },
  { en: "village", ua: "село" },
  { en: "city", ua: "місто" },
  { en: "bridge", ua: "міст" },
  { en: "road", ua: "дорога" },
  { en: "path", ua: "стежка" },
  { en: "cloud", ua: "хмара" },
  { en: "storm", ua: "буря" },
  { en: "lightning", ua: "блискавка" },
  { en: "stone", ua: "камінь" },
  { en: "field", ua: "поле" },
  { en: "bird", ua: "птах" },
  { en: "animal", ua: "тварина" },
  { en: "forest", ua: "ліс" },
  { en: "bridge", ua: "міст" },
  { en: "happy", ua: "щасливий" },
  { en: "angry", ua: "злий" },
  { en: "strong", ua: "сильний" },
  { en: "weak", ua: "слабкий" }
];

const hardDictionary = [
  { en: "knowledge", ua: "знання" },
  { en: "freedom", ua: "свобода" },
  { en: "responsibility", ua: "відповідальність" },
  { en: "opportunity", ua: "можливість" },
  { en: "decision", ua: "рішення" },
  { en: "behavior", ua: "поведінка" },
  { en: "experience", ua: "досвід" },
  { en: "memory", ua: "памʼять" },
  { en: "direction", ua: "напрямок" },
  { en: "distance", ua: "відстань" },
  { en: "strength", ua: "сила" },
  { en: "difficulty", ua: "складність" },
  { en: "danger", ua: "небезпека" },
  { en: "safety", ua: "безпека" },
  { en: "improvement", ua: "покращення" },
  { en: "challenge", ua: "виклик" },
  { en: "intention", ua: "наміри" },
  { en: "ability", ua: "здатність" },
  { en: "possibility", ua: "ймовірність" },
  { en: "development", ua: "розвиток" }
];


function getDictionary(level) {
  switch (level) {
    case 1:
      return easyDictionary;
    case 2:
      return mediumDictionary;
    case 3:
      return hardDictionary;
    default:
      return [];
  }
}
