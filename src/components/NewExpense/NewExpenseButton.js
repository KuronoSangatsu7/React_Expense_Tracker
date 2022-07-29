const NewExpenseButton = () => {
  return (
    <div className="flex flex-row-reverse">
      <button className="bg-gray-200 font-medium text-lg py-2 px-4 mt-2 mb-4 rounded-md hover:translate-y-1 hover:scale-110 hover:bg-gray-300 focus:ring-4 focus:ring-black transition-all duration-150">
        New Expense
      </button>
    </div>
  );
};

export default NewExpenseButton;
