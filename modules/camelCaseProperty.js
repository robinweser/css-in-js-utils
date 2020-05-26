function toLowerCaseFirstCharacter(value) {
  return value.substr(0, 1).toLowerCase()  + value.substr(1);
}

function toUpperCaseFirstCharacter(value) {
  return value.substr(0, 1).toUpperCase() + value.substr(1);
}

export default function camelCaseProperty(property) {
  // -ms-transition => ['', 'ms', 'transition']
  // transition-delay => ['transition', 'delay']
  // WebkitTransitionDelay => ['WebkitTransitionDelay']
  const separatedByDash = property.split('-')

  if (separatedByDash.length === 1) {
    return property;
  }

  const inPascalCase = separatedByDash.map(toUpperCaseFirstCharacter).join('');
  const shouldLowerCaseFirstChar = separatedByDash[0] !== '' || separatedByDash[1] === 'ms'

  return shouldLowerCaseFirstChar ? toLowerCaseFirstCharacter(inPascalCase) : inPascalCase;
}
