import { createAction, handleActions } from 'redux-actions';

import { InvoiceItem } from '../classes/invoice-item';

export const selectInvoiceItems = state => state.invoiceItemsState.data;

const DEFAULT_STATE = {
    data: [ new InvoiceItem() ]
};

const ADD = 'invoice-items/ADD';
const REMOVE = 'invoice-items/REMOVE';
const RESET = 'invoice-items/RESET';
const UPDATE = 'invoice-items/UPDATE';

export default handleActions(
    {
        [ADD]: state => {
            const { data } = state;
            const updatedData = [].concat(data, [ new InvoiceItem() ]);

            return Object.assign({}, state, { data: updatedData });
        },
        [REMOVE]: (state, action) => {
            const index = action.payload;
            const { data } = state;
            console.log('index: ', index);

            const updatedData = [].concat(data);
            updatedData.splice(index, 1);

            return Object.assign({}, state, { data: updatedData });
        },
        [RESET]: state => Object.assign({}, state, DEFAULT_STATE),
        [UPDATE]: (state, action) => {
            const { data } = state;
            const { index, item } = action.payload;

            const updatedData = [].concat(data);
            updatedData[index] = new InvoiceItem(item);

            return Object.assign({}, state, { data: updatedData });
        }
    },
    DEFAULT_STATE
);

export const addInvoiceItem = createAction(ADD);
export const removeInvoiceItem = createAction(REMOVE);
export const resetInvoiceItems = createAction(RESET);
export const updateInvoiceItem = createAction(UPDATE);
