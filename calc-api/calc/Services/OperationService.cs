using System;
using System.Collections.Generic;
using System.Data;
using calc.Models;

namespace calc.Services
{
    public class OperationService
    {
        private readonly OperationContext _context;

        public OperationService(OperationContext context){
            _context = context;
        }


        public IEnumerable<Operation> getOperations(){
            return _context.Operations;
        }
        
        public OperationDTO CalculateExpression(string expression)
        {
            var result = Calculate(expression);

            Operation operation = new Operation();
            operation.OperationData = $"{expression} = {result}";
            operation.DateOperation = DateTime.Now;

            _context.Add(operation);
            _context.SaveChangesAsync();
            return makeOperationDTO(expression, result.ToString());
        }

        private object Calculate(string expression){
            DataTable dt = new();
            var value = dt.Compute(expression,"");
            return value;
        }

        private OperationDTO makeOperationDTO(string expression, string result){
            OperationDTO op = new OperationDTO();
            op.expression = expression;
            op.result = result;
            return  op;
        }



    }
}
