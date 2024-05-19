using Microsoft.AspNetCore.Mvc;
using NETAngularWebAPI.Services;
using Microsoft.AspNetCore.Session;
using System.Text.Json;
using System;


namespace NETAngularWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EscolaController : ControllerBase
    {
        private readonly IEscolaService _EscolaService;
        private readonly ILogger<EscolaController> _logger;

        public EscolaController(ILogger<EscolaController> logger, IEscolaService __EscolaService)
        {
            _logger = logger;
            _EscolaService = __EscolaService;
            _EscolaService._CarregaEscolasMemoria();
        }

        [HttpGet]
        public List<Escola> Get()
        {
            List<Escola> _item = _EscolaService._GetAll();
            return _item;
        }

        [HttpGet("{id}")]
        public Escola GetEscola(int id)
        {
            return _EscolaService._GetById(id);
        }

        [HttpPost]
        public void Post(Escola item)
        {
            _EscolaService._AddEscola(item);
        }

        [HttpPut]
        public void Put(Escola item)
        {
            _EscolaService._UpdateEscola(item);
        }

        [HttpDelete("{id}")]
        public void Remove(int id)
        {
            _EscolaService._DeleteEscola(id);

        }
    }
}