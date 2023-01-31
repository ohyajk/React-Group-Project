export const buttonClass = (joined) => {
  let classes = 'btn';
  classes += joined ? 'red' : 'dark';
  return classes;
};

export const badgeClass = (joined) => {
  let classes = 'badge bg-';
  classes += joined ? 'blue' : 'dark';
  return classes;
};
