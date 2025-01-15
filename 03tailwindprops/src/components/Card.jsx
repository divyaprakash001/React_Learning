
function Card({item}) {
  console.log(item);
  
  return (
    <>
        <div className="flex flex-col rounded-xl  p-4 max-w-[300px]"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{item.name}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between">
            <p>{item.number || 24}</p>
            <p>{item.price || 50}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
