function Step({
  header,
  ingredients,
}: {
  header: string;
  ingredients: Array<string>;
}) {
  return (
    <div>
      <p className='font-oswald font-semibold pb-4 text-2xl'>{header}</p>
      <ul>
        {ingredients.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default Step;
