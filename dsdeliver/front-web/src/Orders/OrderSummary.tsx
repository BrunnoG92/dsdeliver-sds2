type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}
function OrderSummary ({amount, totalPrice,onSubmit}:Props ){
    return (
       <div className="order-summary-container" >
           <div className="order-summary-content">
               <div>
               <span className=" ammount-selected-container">
                   <strong className="amount-selected">{amount} </strong>
                   PEDIDOS SELECIONADOS
                   <span className="order-summary-total" >
                       <strong> R${totalPrice}</strong>
                       VALOR TOTAL
                   </span>
               </span>
               
               </div>
               <button className="order-summary-make-order" onClick={onSubmit}> FAZER PEDIDO</button>
               </div> 
              
       </div>
    )
}
export default OrderSummary