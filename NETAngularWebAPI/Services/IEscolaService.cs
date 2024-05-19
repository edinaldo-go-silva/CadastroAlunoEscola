using NETAngularWebAPI;
using System.Text.Json;

namespace NETAngularWebAPI.Services
{
    public interface IEscolaService
    {
        public List<Escola> _GetAll();
        public Escola       _GetById(int id);
        public int          _GetNextId();
        public void         _AddEscola(Escola item);
        public void         _DeleteEscola(int id);
        public void         _UpdateEscola(Escola item);
        public void         _CarregaEscolasMemoria();
    }

}
