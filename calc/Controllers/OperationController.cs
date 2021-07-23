using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using calc.Models;
using calc.Services;

namespace calc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        #region "Atributes"
        private readonly OperationContext _context;
        private OperationService service;
        #endregion

        #region "Constructors"
        public OperationController(OperationContext context)
        {
            _context = context;
            service = new OperationService();
        }

        #endregion

        #region "Methods"

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Operation>>> GetTodoItems()
        {
            return await _context.Operations.ToListAsync();
        }

        // POST: api/Operation
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Operation>> PostOperation(OperationDTO opDto)
        {
            Operation operation = service.MakeOperation(opDto);

            _context.Operations.Add(operation);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostOperation), new { id = operation.Id }, operation);
        }

        #endregion



    }
}
