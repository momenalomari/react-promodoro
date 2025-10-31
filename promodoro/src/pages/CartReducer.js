// // src/context/CartReducer.js

// export const cartActions = {
//     ADD_ITEM: 'ADD_ITEM',
//     REMOVE_ITEM: 'REMOVE_ITEM',
//     UPDATE_QUANTITY: 'UPDATE_QUANTITY',
//     CLEAR_CART: 'CLEAR_CART',
// };

// // الدالة الرئيسية (Reducer)
// export const cartReducer = (state, action) => {
//     switch (action.type) {
        
//         case cartActions.ADD_ITEM: {
//             const product = action.payload;
//             const exists = state.find(item => item.id === product.id);

//             if (exists) {
//                 // تزيد الكمية إذا كان المنتج موجودًا بالفعل
//                 return state.map(item =>
//                     item.id === product.id 
//                         ? { ...item, quantity: item.quantity + 1 } 
//                         : item
//                 );
//             } else {
//                 // تضيف المنتج بكمية 1 إذا لم يكن موجودًا
//                 return [...state, { ...product, quantity: 1 }];
//             }
//         }
        
//         case cartActions.REMOVE_ITEM: {
//             const productId = action.payload;
//             // يتم إزالة المنتج الذي يطابق الـ ID
//             return state.filter(item => item.id !== productId);
//         }
        
//         case cartActions.UPDATE_QUANTITY: {
//             const { id, quantity } = action.payload;
//             // تحديث كمية منتج معين
//             return state.map(item =>
//                 item.id === id ? { ...item, quantity: quantity } : item
//             );
//         }
        
//         case cartActions.CLEAR_CART:
//             // تفريغ السلة بالكامل
//             return [];
            
//         default:
//             return state;
//     }
// };