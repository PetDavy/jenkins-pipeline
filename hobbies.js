const hobbies = 
['jogging', 'cooking', 'ddiving', 'swimming', 'reading'];

exports.getHobbies = () => {
  return hobbies;
}

exports.getHobbies = id => {
  if (id < 1 || id > hobbies.length) {
    return null;
  }

  return hobbies[id - 1];
}