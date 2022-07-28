import TransparentWrapper from "../UI/TransparentWrapper";

const NewExpense = () => {
  return (
    <div className="mb-4">
    <TransparentWrapper>
      <form className="flex flex-wrap p-2">
        <div className="grid grid-rows-5 gap-3 text-white">
          <label className="font-semibold">Title:</label>
          <input type="text" className="rounded-md text-black p-1"></input>
          <div className="grid grid-cols-10 gap-2">
            <label className="col-span-4 font-semibold">Date: </label>
            <label className="col-span-4 font-semibold col-start-7">Amount:</label>
          </div>
          <div className="grid grid-cols-10 gap-2">
            <input type="date" min="2019-01-01" max="2022-12-31" className="rounded-md text-black font-medium p-1 col-span-4"></input>
            <div className="col-span-1 col-start-6 ml-auto my-auto">$</div>
            <input type="number" min="0.01" step="0.01" className="rounded-md text-black font-medium p-1 col-span-4 col-start-7"></input>
          </div>
        </div>
        <button type="submit" className="bg-rose-700 font-medium text-lg py-2 px-4 rounded-md text-gray-200 ml-auto">Add Expense</button>
      </form>
    </TransparentWrapper>
    </div>
  );
};

export default NewExpense;
