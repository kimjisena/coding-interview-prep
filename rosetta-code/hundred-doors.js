function getFinalOpenedDoors(numDoors) {
  let doors = (new Array(numDoors + 1)).fill(0);

  let delta = 1;
  while(delta <= 100) {

    for (let i = delta; i < doors.length; i += delta) {
      doors[i] = doors[i] === 0 ? 1 : 0;
    }
    delta++;
  }

  return doors.flatMap((door, i) => {
    return door === 1 ? i : [];
  });
}