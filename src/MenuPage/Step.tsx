function Step({
  header,
  ingredients,
}: {
  header: string;
  ingredients: Array<string>;
}) {
  return (
    <div>
      <p className='font-league font-semibold pb-4 text-2xl'>{header}</p>
      <ul className='flex flex-col gap-2'>
        {ingredients.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default Step;
