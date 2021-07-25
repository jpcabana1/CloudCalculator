using System;
using calc.Models;

namespace calc.Services
{
    public class OperationService
    {
        public Operation MakeOperation(OperationDTO opDTO)
        {
            Operation operation = new Operation();
            operation.OperationData = Operation.ConvertData(opDTO, Calculate(opDTO));
            operation.DateOperation = DateTime.Now;

            return operation;
        }

        private double Calculate(OperationDTO opDTO)
        {
            double Result;
            switch (opDTO.operation)
            {
                case "+":
                    Result = opDTO.A + opDTO.B;
                    break;
                case "-":
                    Result = opDTO.A - opDTO.B;
                    break;
                case "*":
                    Result = opDTO.A * opDTO.B;
                    break;
                case "/":
                    Result = opDTO.A / opDTO.B;
                    break;
                default:
                    Result = opDTO.A + opDTO.B;
                    break;
            }
            return Result;
        }

        public bool ValidateOperation(string op) => (op == "+" || op == "-" || op == "*" || op == "/");
           
    }
}
