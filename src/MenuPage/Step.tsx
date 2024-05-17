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
      <ul className='flex flex-col lg:flex-wrap lg:gap-x-24 gap-2 lg:h-60'>
        {ingredients.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default Step;
