using Newtonsoft.Json;

namespace Company.Function
{
    public class CounterImpl
    {
        [JsonProperty(propertyName:"id")]
        public string Id { get; set; }
        
        [JsonProperty(propertyName:"count")]
        public int Count { get; set; }
    }
    
}
