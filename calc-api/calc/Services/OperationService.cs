using System;
using calc.Models;

namespace calc.Services
{
    public class OperationService
    {
        public Operation MakeOperation(double propA, string propOperation, double propB)
        {
            double result = Calculate(propA, propOperation, propB);

            Operation operation = new Operation();
            operation.OperationData = $"A : {propA} {propOperation} B : {propB} = {result}";
            operation.DateOperation = DateTime.Now;

            return operation;
        }

        private double Calculate(double propA, string propOperation, double propB)
        {
            double Result;
            switch (propOperation)
            {
                case "+":
                    Result = propA + propB;
                    break;
                case "-":
                    Result = propA - propB;
                    break;
                case "*":
                    Result = propA * propB;
                    break;
                case "/":
                    Result = propA / propB;
                    break;
                default:
                    Result = propA + propB;
                    break;
            }
            return Result;
        }
    }
}
