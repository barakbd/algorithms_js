"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_data_1 = require("./input_data");
console.log("currencieSymbols length - ", input_data_1.currencieSymbols.length);
let input_array = create_input_array(input_data_1.currencieSymbols);
function create_input_array(input_data) {
    return input_data.map((symbol, index) => {
        return createInputObject(symbol, index, index, index);
    });
}
console.log("input_array length - ", input_array.length);
function createInputObject(currencySymbol, available, hold, deducted) {
    return {
        currencySymbol: currencySymbol,
        sub_balances: [
            {
                type: "AVAILABLE",
                amount: available
            },
            {
                type: "HOLD",
                amount: hold
            },
            {
                type: "DEDUCTED",
                amount: deducted
            }
        ]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5cGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ludGVydmlld3MvcGF5cGFsL3BheXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZDQUFnRDtBQUVoRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixFQUFFLDZCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRW5FLElBQUksV0FBVyxHQUEyQixrQkFBa0IsQ0FBQyw2QkFBZ0IsQ0FBQyxDQUFDO0FBRS9FLFNBQVMsa0JBQWtCLENBQUMsVUFBaUI7SUFDM0MsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ3RDLE9BQU8saUJBQWlCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFrRXpELFNBQVMsaUJBQWlCLENBQ3hCLGNBQXNCLEVBQ3RCLFNBQWlCLEVBQ2pCLElBQVksRUFDWixRQUFnQjtJQUVoQixPQUFPO1FBQ0wsY0FBYyxFQUFFLGNBQWM7UUFDOUIsWUFBWSxFQUFFO1lBQ1o7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxTQUFTO2FBQ2xCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLElBQUk7YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsUUFBUTthQUNqQjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUMifQ==