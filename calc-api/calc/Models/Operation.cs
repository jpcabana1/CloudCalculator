using System;

namespace calc.Models
{
    public class Operation
    {
        public int Id { get; set; }
        public string OperationData { get; set; }
        public DateTime DateOperation { get; set; }

        public static string ConvertData(OperationDTO opDTO, double result)
        {
            return $"A : {opDTO.A} {opDTO.operation} B : {opDTO.B} = {result}";
        }
    }
}
