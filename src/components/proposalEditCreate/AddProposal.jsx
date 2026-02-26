import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const AddProposal = ({previtems}) => {
    const [items, setItems] = useState(previtems);

    const addItem = () => {
        const newItem = {
            id: items.length + 1,
            product: '',
            qty: 1,
            price: 0
        };
        setItems([...items, newItem]);
    };

    const removeItem =()=>{
        items.pop()
      
        setItems(items)
    }


    const handleInputChange = (id, field, value) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                const updatedItem = { ...item, [field]: value };
                if (field === 'qty' || field === 'price') {
                    updatedItem.total = updatedItem.qty * updatedItem.price;
                }
                return updatedItem;
            }
            return item;
        });
        setItems(updatedItems);
    };

    const subTotal = items.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.qty);
    }, 0);

    const vat = (subTotal * 0.1).toFixed(2)
    const vatNumber = Number(vat);
    const total = Number(subTotal + vatNumber).toFixed(2)

    return (
        <div className="col-12" style={{background: "transparent", marginBottom: "53px"}}>
            <div className=" stretch stretch-full proposal-table">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-7 card m-auto white-opa">
                            
                           <div className="card-body">

                        <div className='text-start mb-2'>
                            <h3 className="mb-1" style={{lineHeight: "44px"}}>Try with a Demo Website</h3>
                            <div class="fs-14 text-muted"><span class="text-dark fw-medium"></span> Explore a Demo project with sample data</div>
                        </div>
                           <div className="card-footer border-0 p-0 mt-3">
                                                                                 <Link to="#" className="custom-btn">Try with a Demo Website</Link>
                                                                             </div>

                      

                       
                      

                       
                    
                    
                   
                    </div>
                          
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProposal