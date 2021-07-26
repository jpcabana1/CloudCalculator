
using calc.Models;
using calc.Services;
using Xunit;

namespace calc.Tests
{

    public class OperationServiceTest
    {

        [Theory]
        [InlineData(6, "+", 2)]
        [InlineData(6, "-", 2)]
        [InlineData(6, "*", 2)]
        [InlineData(6, "/", 2)]
        [InlineData(6, "error", 2)]
        public void MakeOperation_ValidNumber_ReturnsOperation(double propA, string propOperation, double propB)
        {
            //Arrange
            OperationService service = new OperationService();

            //Act
            var op = service.MakeOperation(propA, propOperation, propB);

            //Assert
            Assert.IsType<Operation>(op);
        }

    }
}
