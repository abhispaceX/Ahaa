

const ListItems=({items})=>{
    
    return(
        <div>
        {items.map((item)=>{
            return(<div key={item.card.info.id} className=" border-b-2 border-gray-200 flex flex-col" >
                <div className=" w-24">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          item.card.info.imageId} alt="" />
              </div>
              <div>
               <span className=" font-semibold" >{item.card.info.name}- </span> 
               <span className=" font-semibold" >₹{item.card.info.price/100}</span>
               </div>
                <div>
                    <p >{item.card.info.description}</p>
                </div>
                </div>
                
            )
        })}
        </div>
    )
}
export default ListItems