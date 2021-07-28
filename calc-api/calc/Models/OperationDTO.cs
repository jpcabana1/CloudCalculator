
using System.Text.Json.Serialization;

namespace calc.Models
{
    public class OperationDTO
    {
        [JsonPropertyName("expression")]
        public string expression{ get; set; }
        [JsonPropertyName("result")]
        public string result { get; set; }
    }
}