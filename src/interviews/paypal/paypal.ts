import * as util from "util";

import { currencieSymbols } from "./input_data";
// import { generate_array } from "../../helper_functions";
console.log("currencieSymbols length - ", currencieSymbols.length);

let input_array: InputObjectInterface[] = create_input_array(currencieSymbols);

function create_input_array(input_data: any[]): InputObjectInterface[] {
  return input_data.map((symbol, index) => {
    return createInputObject(symbol, index, index, index);
  });
}
console.log("input_array length - ", input_array.length);

// function rearrange(
//   input_array: InputObjectInterface[]
// ): OutputObjectInterface[] {
//   var visited = {};
//   var output_array: OutputObjectInterface[] = [];

//   input_array.map(inputObject => {
//     inputObject.sub_balances.map(inputSubBalance => {
//       console.log(
//         `current visted - ${util.inspect(visited, {
//           showHidden: false,
//           depth: null
//         })} \n`
//       );
//       if (visited[inputSubBalance.type] >= 0) {
//         //type exists in output - push to output.type.sub_balances
//         output_array[visited[inputSubBalance.type]].sub_balances.push({
//           currency: inputObject.currency,
//           amount: inputSubBalance.amount
//         });
//         console.log(
//           `type exists - pushing to output - sub_balances - ${util.inspect(
//             output_array,
//             { showHidden: false, depth: null }
//           )} \n`
//         );
//       } else {
//         // type does not exist in output. create new object
//         output_array.push({
//           type: inputSubBalance.type,
//           sub_balances: [
//             {
//               currency: inputObject.currency,
//               amount: inputSubBalance.amount
//             }
//           ]
//         });
//         console.log(
//           `first push - ${util.inspect(output_array, {
//             showHidden: false,
//             depth: null
//           })} \n`
//         );
//         // add type hash with index
//         visited[inputSubBalance.type] = output_array.length - 1;
//         console.log(
//           `updated visted - ${util.inspect(visited, {
//             showHidden: false,
//             depth: null
//           })} \n`
//         );
//       } // end inputObject.sub_balances.map
//     });
//   }); // end input.map
//   console.log(
//     ` **************** returned output **************** ${"\n".repeat(
//       2
//     )} ${util.inspect(output_array, { showHidden: false, depth: null })} \n`
//   );
//   return output_array;
// } // end rearrange

// rearrange(input);
console.log("input_array length - ", input_array.length, "\n");

function rearrange(
  input_array: InputObjectInterface[]
): OutputObjectInterface[] {
  var visited: Visited = {};
  var output_array: OutputObjectInterface[] = [];

  input_array.map(inputObject => {
    inputObject.sub_balances.map(inputSubBalance => {
      console.log(
        `current visted - ${util.inspect(visited, {
          showHidden: false,
          depth: null
        })} \n`
      );
      if (typeof visited[inputSubBalance.type] === "number") {
        //type exists in output - push to output.type.sub_balances
        output_array[
          visited[inputSubBalance.type] as number
        ].currencySymbols.push({
          currency: inputObject.currencySymbol,
          amount: inputSubBalance.amount
        });
        console.log(
          `type exists - pushing to output - sub_balances - ${util.inspect(
            output_array,
            { showHidden: false, depth: null }
          )} \n`
        );
      } else {
        // type does not exist in output. create new object
        output_array.push({
          type: inputSubBalance.type,
          sub_balances: [
            {
              currency: inputObject.currency,
              amount: inputSubBalance.amount
            }
          ]
        });
        console.log(
          `first push - ${util.inspect(output_array, {
            showHidden: false,
            depth: null
          })} \n`
        );
        // add type hash with index
        visited[inputSubBalance.type] = output_array.length - 1;
        console.log(
          `updated visted - ${util.inspect(visited, {
            showHidden: false,
            depth: null
          })} \n`
        );
      } // end inputObject.sub_balances.map
    });
  }); // end input.map
  console.log(
    ` **************** returned output **************** ${"\n".repeat(
      2
    )} ${util.inspect(output_array, { showHidden: false, depth: null })} \n`
  );
  return output_array;
} // end rearrange

rearrange(input_array);

function createInputObject(
  currencySymbol: String,
  available: Number,
  hold: Number,
  deducted: Number
): InputObjectInterface {
  let sub_balances: SubBalancesInterface = [];
  if (typeof available === "number") {
  }
  return {
    currencySymbol: currencySymbol,
    sub_balances: sub_balances
  };
}

interface SubBalancesInterface {
  [index: number]: {
    type?: "AVAILABLE" | "HOLD" | "DEDUCTED";
    amount?: Number;
  };
}
interface InputObjectInterface {
  currencySymbol: String;
  sub_balances: SubBalancesInterface;
}
interface OutputObjectInterface {
  sub_balance: "AVAILABLE" | "HOLD" | "DEDUCTED";
  currencyBalances: Array<{
    currency: String;
    amount: Number;
  }>;
}

interface Visited {
  AVAILABLE?: number;
  HOLD?: number;
  DEDUCTED?: number;
}
