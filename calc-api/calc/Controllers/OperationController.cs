using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using calc.Models;
using calc.Services;
using System;

namespace calc.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OperationController : ControllerBase
    {
        #region "Atributes"
        private OperationService service;
        #endregion

        #region "Constructors"
        public OperationController(OperationContext context)
        {
            service = new OperationService(context);
        }

        #endregion

        #region "Methods"

        [HttpGet]
        public ActionResult<IEnumerable<Operation>> GetOperations()
        {
            return Ok(service.getOperations());
        }

        // POST: api/Operation
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=212375
        [HttpPost]
        public ActionResult<OperationDTO> PostOperation([FromHeader] string propOperation)
        {
            try
            {
                OperationDTO response = service.CalculateExpression( propOperation);
                return CreatedAtAction(nameof(PostOperation), response);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return BadRequest();
            }

        }

        #endregion

    }
}
