
using System.Text.Json.Serialization;

namespace calc.Models
{
    public class OperationDTO
    {
        [JsonPropertyName("propA")]
        public double A { get; set; }
        [JsonPropertyName("propB")]
        public double B { get; set; }
        [JsonPropertyName("propOperation")]
        public string operation { get; set; }
    }
}