function Step({
  index,
  heading,
  ingredients,
}: {
  index: number;
  heading: string;
  ingredients: string[];
}) {
  return (
    <div>
      <p className='font-league font-semibold pb-4 text-2xl'>
        Step {index}: {heading}
      </p>
      {ingredients && (
        <ul className='flex flex-col lg:flex-wrap lg:gap-x-24 gap-2 lg:h-60'>
          {ingredients.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Step;
