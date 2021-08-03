using Xunit;
using calc.Models;
using calc.Services;
using FakeItEasy;
using Microsoft.EntityFrameworkCore;

namespace calc.Tests
{
    public class OperationServiceTest
    {
        [Theory]
        [InlineData("2.5000 + 0.5000")]
        [InlineData("((20.5-0.5) * 5) / 2 ")]
        public void MakeOperation_ValidNumber_ReturnsOperation(
            string expression
        )
        {
            //Arrange
             var options = new DbContextOptionsBuilder<OperationContext>()
            .UseInMemoryDatabase(databaseName: "Operations")
            .Options;

            OperationService service = new(new OperationContext(options));
        
            //Act
            var op = service.CalculateExpression(expression);

            //Assert
            Assert.IsType<OperationDTO> (op);
        }
    }
}
