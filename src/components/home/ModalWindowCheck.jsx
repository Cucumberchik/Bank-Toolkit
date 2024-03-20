
export default function ModalWindowCheck({obj, modal, setModal}) {
  let {price, product, category, date} = obj;
  return (
    <div id="Modal" onClick={()=>setModal(false)} style={{display: modal ? "flex" : "none"}}>
      <section onClick={(e)=>e.stopPropagation()}>
        <center><h1>{date}</h1></center>
        <h2>product: <span className="gen">{product}</span>  </h2>
        <h2>category: <span className="gen">{category}</span></h2>
        <h2>price: <span className="gen">${price}</span></h2>
      </section>
    </div>
  )
}
