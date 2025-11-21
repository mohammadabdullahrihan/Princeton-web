const InvestmentCategory = ({ investmentCategory }) => {
  const { name, description, icon, category1, category2, category3, category4, category5 } = investmentCategory;
  return (
    <div className={`${category1 && category2 && category3 && category4 && category5 ? "bg-[#E72929]" : "bg-[#8F8933]"} px-10 py-2 text-white w-96 h-96`}>
      <div className="">
        <img
         loading="lazy"
          style={{ filter: "brightness(0) invert(1)" }}
          className="w-16 mt-5"
          src={icon}
          alt=""
        />
        <h1 className="text-3xl font-bold my-2 w-72 mt-5">{name}</h1>
        <p className="text-xl mt-5">{description}</p>
        {
          category1 && category2 && category3 && category4 && category5 && (
            <ul>
              <li>1. {category1}</li>
              <li>2. {category2}</li>
              <li>3. {category3}</li>
              <li>4. {category4}</li>
              <li>5. {category5}</li>
            </ul>
          )
        }
        
      </div>
    </div>
  );
};

export default InvestmentCategory;
