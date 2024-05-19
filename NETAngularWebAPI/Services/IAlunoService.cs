using NETAngularWebAPI;

namespace NETAngularWebAPI.Services
{
    public interface IAlunoService
    {
        public List<Aluno> _GetAll();
        public Aluno       _GetById(int id);
        public int         _GetNextId();
        public void        _AddAluno(Aluno item);
        public void        _DeleteAluno(int id);
        public void        _UpdateAluno(Aluno item);
        public void        _CarregaAlunosMemoria();

    }

}
