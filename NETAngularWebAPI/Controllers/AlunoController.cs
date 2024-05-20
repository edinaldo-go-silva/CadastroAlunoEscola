using Microsoft.AspNetCore.Mvc;
using DexianWebAPI.Services;
using Microsoft.AspNetCore.Session;
using System.Text.Json;
using System;


namespace DexianWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        private readonly IAlunoService _alunoService;
        private readonly ILogger<AlunoController> _logger;

        public AlunoController(ILogger<AlunoController> logger, IAlunoService __alunoService)
        {
            _logger = logger;
            _alunoService = __alunoService;
            _alunoService._CarregaAlunosMemoria();
        }

        [HttpGet]
        public List<Aluno> Get()
        {
            List<Aluno> _item = _alunoService._GetAll();
            return _item;
        }

        [HttpGet("{id}")]
        public Aluno GetAluno(int id)
        {
            return _alunoService._GetById(id);
        }

        [HttpPost]
        public void Post(Aluno item)
        {
            _alunoService._AddAluno(item);
        }

        [HttpPut]
        public void Put(Aluno item)
        {
            _alunoService._UpdateAluno(item);
        }

        [HttpDelete("{id}")]
        public void Remove(int id)
        {
            _alunoService._DeleteAluno(id);

        }
    }
}