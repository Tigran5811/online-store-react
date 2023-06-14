export const getMapUsers = (users) => users?.map(({
  email, firstName, username, lastName, age, image,
}) => (
  {
    col1: image,
    col2: username,
    col3: firstName,
    col4: lastName,
    col5: age,
    col6: email,
  }
));
export const getMapUser = (users) => users?.map(({ _id }) => _id);
