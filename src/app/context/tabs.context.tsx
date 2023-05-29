'use client'

//

type tabState = {
    selectedColumn: number;
    selectedRow: number;
}

type tabActions = {
    type: string;
    payload: any;
};

const initialState: tabState = {
    selectedColumn: 0,
    selectedRow: 0
}

const reducer = (state: tabState, action: tabActions) => {
    switch (action.type) {
        case 'moveRow':
            return {...state, selectedRow: action.payload as number}
        case 'moveCol':
            return {...state, selectedColumn: action.payload as number}
    }
}